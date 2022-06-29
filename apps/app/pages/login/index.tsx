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
import Link from 'next/link';
import useAuth from 'apps/app/components/AuthContext';
import { useMetaMask } from 'metamask-react';

export default function Index() {
  const [connected, setConnected] = React.useState(false);
  const [newUser, setNewUser] = React.useState(true);
  const { login, setUserName, user } = useAuth();
  const { connect, account } = useMetaMask();

  const handleMetamaskConnect = async () => {
    await connect();
    setConnected(true)
  };

  const createSchema = Yup.object().shape({
    name: Yup.string().min(3).max(32).required(),
  });

  React.useEffect(() => {
    if (account) {
      login();
    }
  }, [account]);

  React.useEffect(() => {
    if (user.name != '') setNewUser(false);
  }, [user]);

  return (
    <div className={styles.wrapper}>
      {connected ? (
        newUser ? (
          <>
            <h1>New User?</h1>
            <Formik
              initialValues={{ name: '' }}
              validationSchema={createSchema}
              onSubmit={(values) => {
                setUserName(values.name);
                setNewUser(false);
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
            <h1>All Set!</h1>
            <Link href="/">
              <button>Take me home!</button>
            </Link>
          </>
        )
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
