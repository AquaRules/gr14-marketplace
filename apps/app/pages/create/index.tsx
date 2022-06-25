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
import React from 'react';
import styles from './index.module.scss';
import * as Yup from 'yup';

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
  });

  return (
    <div className={styles.wrapper}>
      <h1>Create Your NFT</h1>
      <Formik
        initialValues={{
          name: '',
          image: '',
          type: catagories[0],
          chain: 'ethereum',
          price: 1,
          lend: 0.01,
        }}
        validationSchema={createSchema}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {(props) => (
          <Form>
            <Field name="name">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel htmlFor="name">Title</FormLabel>
                  <Input {...field} id="name" placeholder="Covalent NFT" />
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
                  <Input
                    {...field}
                    id="image"
                    placeholder="https://example.com/1.png"
                  />
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
                    <option value="ethereum">ETHEREUM</option>
                    <option value="polygon">POLYGON</option>
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
