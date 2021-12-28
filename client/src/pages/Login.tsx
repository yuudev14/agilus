import { useRef } from "react";
import { Form, Formik, FormikContextType, FormikProps } from "formik";
import InputField from "../components/Formik/InputField";
import * as Yup from "yup";
import { LoginFieldsType } from "../types/types";
import { useDispatch } from "react-redux";
import { loginAction } from "../store/actions/authActions";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formikRef = useRef<FormikProps<LoginFieldsType>>(null);
  const initialValues = {
    usernameOrEmail: "",
    password: "",
  };
  const validationSchema = Yup.object({
    usernameOrEmail: Yup.string().required("Input your username or email"),
    password: Yup.string().required("Input your username or email"),
  });

  const login = async (values: LoginFieldsType, { setErrors }: any) => {
    try {
      const loginDispatch = (await dispatch(loginAction(values))) as any;
      if ("error" in loginDispatch) {
        setErrors(loginDispatch.payload);
      } else {
        navigate("/home");
      }
    } catch (error) {}
  };
  return (
    <main>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        innerRef={formikRef}
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
