import { Form, Formik } from "formik";
import InputField from "../components/Formik/InputField";

const Login = () => {
  const initialValues = {
    usernameOrEmail: "",
    password: "",
  };
  const validationSchema = {};
  const login = () => {};
  return (
    <main>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={login}>
        <Form>
          <InputField
            name="usernameOrEmail"
            label="username or email"
            type="text"
          />
          <InputField name="password" label="Password" type="password" />
          <input type="submit" />
        </Form>
      </Formik>
    </main>
  );
};

export default Login;
