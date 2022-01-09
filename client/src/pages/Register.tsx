import { Form, Formik, FormikProps } from "formik";
import * as Yup from "yup";
import { useRef } from "react";
import InputField from "../components/Formik/InputField";
import axios from "axios";
import { RegisterFields } from "../types/types";
import { useDispatch } from "react-redux";
import { registerAction } from "../store/actions/authActions";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    username: "",
    email: "",
    password: "",
    retryPassword: "",
    firstName: "",
    lastName: "",
  };

  const formikRef = useRef<FormikProps<RegisterFields>>(null)!;

  const validation = Yup.object({
    firstName: Yup.string().required("Put your first name"),
    lastName: Yup.string().required("Put your last name"),
    email: Yup.string()
      .required("Put your email")
      .test("is_email_exist", "Email already exist", async (value) => {
        const result = await axios.get(
          `/api/auth/user?column=email&value=${value}`
        );
        return result.data;
      }),
    username: Yup.string()
      .required("Put your username")
      .min(6, "Must have 6 letters or more")
      .test("is_username_exist", "username already exist", async (value) => {
        const result = await axios.get(
          `/api/auth/user?column=username&value=${value}`
        );
        return result.data;
      }),
    password: Yup.string()
      .required("Put your password")
      .min(7, "must have 7 letters or more"),
    retryPassword: Yup.string()
      .required("Confirm password")
      .test("confirm_password", "Password does not match", (value) => {
        if (formikRef.current) {
          return value === formikRef.current.values.password;
        }
        return false;
      }),
  });
  const register = async (values: RegisterFields): Promise<void> => {
    try {
      await dispatch(registerAction(values));
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main className="register-page">
      <Formik
        initialValues={initialValues}
        validationSchema={validation}
        onSubmit={register}
        innerRef={formikRef}>
        <Form>
          <Link to="/">
            <h1>Agilus</h1>
          </Link>
          <InputField
            name="firstName"
            type="text"
            label="First Name"
            placeholder="First Name"
          />

          <InputField
            name="lastName"
            type="text"
            label="Last Name"
            placeholder="Last Name"
          />

          <InputField
            name="username"
            type="text"
            label="Username"
            placeholder="Username"
          />

          <InputField
            name="email"
            type="email"
            label="Email"
            placeholder="email"
          />

          <InputField
            name="password"
            type="password"
            label="Password"
            placeholder="password"
          />

          <InputField
            name="retryPassword"
            type="password"
            label="Retry Password"
            placeholder="password"
          />
          <input type="submit" />
          <div className="authOption">
            <p>
              Already have an account? <Link to="/login">Log in</Link>
            </p>
          </div>
        </Form>
      </Formik>
    </main>
  );
};

export default Register;
