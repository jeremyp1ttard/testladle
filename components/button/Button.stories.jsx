import Button from "./Button";


export const Primary = ({label, disabled}) => {
  return <Button text={label} />;
};

Primary.args = {
    label: "Hello world",
    disabled: false,
  };
  