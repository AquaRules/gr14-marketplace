import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import styles from './index.module.scss';
import * as Yup from 'yup';
import { useMetaMask } from 'metamask-react';
import { ethers } from 'ethers';
import { getContractABI } from '../../contracts';
import config from '../../config.json';
import { Sale, NFT } from '../../types';

export default function Index() {
  const catagories = [
    'comedy',
    'pop',
    'psycodelic',
    'satire',
    'dark',
    'happy',
    'sad',
  ];
  const createSchema = Yup.object().shape({
    name: Yup.string().min(3).max(32).required(),
    image: Yup.string().url().required(),
    type: Yup.string(),
    chain: Yup.string(),
    price: Yup.number(),
    lend: Yup.number(),
    currency: Yup.string(),
  });

  const { ethereum, chainId, account } = useMetaMask();

  const getEthers = async () => {
    return new ethers.providers.Web3Provider(ethereum, 'any').getSigner();
  };
  const chain = () => parseInt(chainId.toString(), 16).toString();

  const getSale = async () => {
    console.log({ config });
    return new ethers.Contract(
      config[chain()]['Sale'],
      await getContractABI('Sale'),
      await getEthers()
    ) as Sale;
  };

  const getNFT = async () => {
    return new ethers.Contract(
      config[chain()]['NFT'],
      await getContractABI('NFT'),
      await getEthers()
    ) as NFT;
  };

  const getTestERC20 = async () => {
    return new ethers.Contract(
      config[chain()]['TestERC20'],
      await getContractABI('TestERC20'),
      await getEthers()
    ) as NFT;
  };

  const makeSale = async (values: {
    name: string;
    image: string;
    type: string;
    chain: string;
    price: number;
    currency: string;
  }) => {
    const Sale = await getSale();
    const NFT = await getNFT();
    if ((await NFT.isApprovedForAll(account, Sale.address)) !== true) {
      console.log('verify');
      await (await NFT.setApprovalForAll(Sale.address, true)).wait();
    }
    console.log({
      tokenId: '1',
      currency: (await getTestERC20()).address,
      owner: account,
      price: ethers.utils.parseEther(values.price.toString()),
      untill: Math.floor(Date.now() / 1000) + 30 * 24 * 3600,
    });
    const tx = await Sale.createSale({
      tokenId: '1',
      currency: (await getTestERC20()).address,
      owner: account,
      price: ethers.utils.parseEther(values.price.toString()),
      untill: Math.floor(Date.now() / 1000) + 30 * 24 * 3600,
    });
    const receipt = await tx.wait();
    console.log({ receipt }, receipt.events);

    const tokenId = NFT.interface
      .parseLog(receipt.events[0])
      .args.tokenId.toString();
    const tokenURL =
      'data:application/json;base64,' +
      Buffer.from(
        JSON.stringify({
          name: values.name,
          image: values.image,
        })
      ).toString('base64');

    await (await NFT.setTokenURIs([tokenId], [tokenURL])).wait();

    return {
      receipt,
      tokenId: tokenId,
    };
  };

  useEffect(() => {
    const run = async () => ((window as any).NFT = await getNFT());
    run();
  }, [chainId, getNFT]);

  return (
    <div className={styles.wrapper}>
      <h1>Create Your NFT</h1>
      <Formik
        initialValues={{
          name: 'Covalent NFT',
          image: 'https://example.com/1.jpg',
          type: catagories[0],
          chain: 'ethereum',
          price: 1,
          lend: 0.01,
          currency: 'usdt',
        }}
        validationSchema={createSchema}
        onSubmit={(values, actions) => {
          makeSale(values)
            .then(() => {
              actions.setSubmitting(false);
            })
            .catch((err) => {
              console.error(err);
            });
          // alert(JSON.stringify(values, null, 2));
        }}
      >
        {(props) => (
          <Form>
            <Field name="name">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel htmlFor="name">Title</FormLabel>
                  <Input {...field} id="name" placeholder="name" />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="image">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.image && form.touched.image}
                >
                  <FormLabel htmlFor="image">Image URL</FormLabel>
                  <Input {...field} id="image" placeholder="image" />
                  <FormErrorMessage>{form.errors.image}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="type">
              {({ field }) => (
                <>
                  <FormLabel htmlFor="type">Select Catagory</FormLabel>
                  <Select {...field}>
                    {catagories.map((v) => (
                      <option value={v} key={v}>
                        {v.toUpperCase()}
                      </option>
                    ))}
                  </Select>
                </>
              )}
            </Field>
            <Field name="chain">
              {({ field }) => (
                <>
                  <FormLabel htmlFor="chain">Select Chain</FormLabel>
                  <Select {...field}>
                    <option value="ethereum">ETHEREUM - Kovan(42)</option>
                    <option value="polygon">POLYGON - Mumbai(80001)</option>
                  </Select>
                </>
              )}
            </Field>
            <Field name="price">
              {({ field, form }) => {
                return (
                  <FormControl id="price">
                    <FormLabel htmlFor="price">Selling Price</FormLabel>
                    <NumberInput
                      id="price"
                      precision={2}
                      step={0.01}
                      {...field}
                      onChange={(val) => form.setFieldValue(field.name, val)}
                    >
                      <NumberInputField />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                  </FormControl>
                );
              }}
            </Field>
            <Field name="lend">
              {({ field, form }) => {
                return (
                  <FormControl id="lend">
                    <FormLabel htmlFor="lend">Lend For</FormLabel>
                    <NumberInput
                      id="lend"
                      precision={2}
                      step={0.01}
                      {...field}
                      onChange={(val) => form.setFieldValue(field.name, val)}
                    >
                      <NumberInputField />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                  </FormControl>
                );
              }}
            </Field>
            <Field name="currency">
              {({ field }) => (
                <>
                  <FormLabel htmlFor="currency">Select Currency</FormLabel>
                  <Select {...field}>
                    <option value="usdt">USDT</option>
                  </Select>
                </>
              )}
            </Field>
            <Button
              mt={4}
              colorScheme="blackAlpha"
              isLoading={props.isSubmitting}
              type="submit"
            >
              Mint This NFT
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
