import { StyledInput } from "./styles";

const Checkbox = ({ checked, onChange }) => {
  return (
    <label>
      <StyledInput
        type="checkbox"
        name="checkbox"
        checked={checked}
        onChange={onChange}
      />
    </label>
  );
};

export default Checkbox;
