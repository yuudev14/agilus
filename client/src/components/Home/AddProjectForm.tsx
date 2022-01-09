import { ErrorMessage } from "formik";
import { Field } from "formik";
import { Form, Formik } from "formik";
import React, {useRef} from "react";
import * as yup from "yup";
import { AddProjectType } from "../../types/types";
import InputField from "../Formik/InputField";

const AddProjectForm: React.FC = () => {

  const colors = [
    "#fe9e44",
    "#01c29a",
    "#6171d9",
    "#55d1d8",
    "#fd6341"
  ]
  const initialValues = {
    project_name: "",
    color: "",
  };

  const addProjectRef = useRef<HTMLDivElement>(null)

  const validationSchema = yup.object({
    project_name : yup.string().required("Please input a project name"),
    color : yup.string().required("Please pick a color")
  });

  const addProject = (values: AddProjectType) => {
    console.log(values)
  };

  const closeForm = () => {
    addProjectRef.current?.classList.remove('show')
  }
  return (
    <div className="add-project" onClick={closeForm} ref={addProjectRef}>
      <i className="fa fa-close"/>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={addProject}>
        <Form onClick={(e: any) => e.stopPropagation()}>
          <h1>Add a Project</h1>
          <InputField type="text" label="project name" name="project_name" />

          <h2>Background Picker</h2>
          <div className="colorPicker">
            {colors.map((color, i) => (
              <div className="colorSelector" key={i}>
                <Field name="color" id={color} type="radio" value={color}/>
                <label htmlFor={color} >
                  <div style={{backgroundColor: color}}></div>
                </label>
                
              </div>
            ))}
            <div className="error">
              <ErrorMessage name="color" />
            </div>
          </div>

          <input type="submit" />

        </Form>
      </Formik>
    </div>
  );
};

export default AddProjectForm;
