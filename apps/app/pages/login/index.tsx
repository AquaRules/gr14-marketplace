import React from 'react';
import styles from './index.module.scss';
import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import useAuth from '../../components/AuthContext';
import { useMetaMask } from 'metamask-react';
import Router from 'next/router';

export default function Index() {
  const { login, setUserName, loggedIn, connected } = useAuth();
  const { connect, status, account } = useMetaMask();

  const handleMetamaskConnect = async () => {
    await connect();
  };

  const createSchema = Yup.object().shape({
    name: Yup.string().min(3).max(32).required(),
  });

  React.useEffect(() => {
    if (status == 'connected' && account && account.length > 10) {
      login();
    }
  }, [status]);

  React.useEffect(() => {
    if (loggedIn) {
      Router.push('/');
    }
  }, [loggedIn]);

  return (
    <div className={styles.wrapper}>
      {connected ? (
        <>
          <h1>New User?</h1>
          <Formik
            initialValues={{ name: '' }}
            validationSchema={createSchema}
            onSubmit={(values) => {
              setUserName(values.name);
            }}
          >
            {(props) => (
              <Form>
                <Field name="name">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.name && form.touched.name}
                    >
                      <FormLabel htmlFor="name">
                        Give yourself a Name!
                      </FormLabel>
                      <Input {...field} id="name" placeholder="John Doe" />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Button
                  mt={4}
                  colorScheme="blackAlpha"
                  isLoading={props.isSubmitting}
                  type="submit"
                >
                  Create my Account
                </Button>
              </Form>
            )}
          </Formik>
        </>
      ) : (
        <>
          <h1>Login with Metamask</h1>
          <button onClick={handleMetamaskConnect}>
            Connect Metamask Address
          </button>
        </>
      )}
    </div>
  );
}
