import Button from "./Button";


export const Primary = ({label, disabled}) => {
  return <Button text={label} />;
};
export const Secondary = ({label, disabled}) => {
  return <Button text="SECONDARY BUTTON" />;
};

Primary.args = {
    label: "Primary Button",
    disabled: false,
  };
  