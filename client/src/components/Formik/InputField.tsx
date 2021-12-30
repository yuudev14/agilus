import { FieldHookConfig, useField } from "formik";

type inputProps = {
  label: String;
};
const InputField = ({
  label,
  ...props
}: FieldHookConfig<string> & inputProps) => {
  const [fields, metas] = useField(props);
  return (
    <div>
      <div className={metas.touched && metas.error ? "input error" : "input"}>
        <label htmlFor={props.name} className={fields.value ? "hasValue" : ""}>
          {label}
        </label>
        <input
          type={props.type}
          {...fields}
          name={props.name}
          id={props.name}
          // placeholder={props.placeholder}
        />
      </div>
      {metas.touched && metas.error && <p className="error">{metas.error}</p>}
    </div>
  );
};

export default InputField;
