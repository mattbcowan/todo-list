import { TaskInput } from "./styles";

const TextInput = ({ value, onChange, placeholder, textColor, required }) => {
  return (
    <TaskInput
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      textColor={textColor}
      required={required}
    />
  );
};

export default TextInput;
