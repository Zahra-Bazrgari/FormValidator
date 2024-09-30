import * as React from "react";

interface InputBoxesTypes {
  type?: React.HTMLInputTypeAttribute;
  placeHoder: string;
  onChangeHandler?: (_: string) => unknown;
  validator?: (_: string) => boolean;
  value?: string;
  isValid?: boolean;
  defaultValue?: string | undefined;
  error?: string;
}

export default function InputBoxes(props: InputBoxesTypes) {
  const [value, setValue] = React.useState<string>(props.defaultValue || "");

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);
    if (props.onChangeHandler) props.onChangeHandler(inputValue);
  };

  return (
    <div>
      <input
        type={props.type ? props.type : "text"}
        placeholder={props.placeHoder}
        value={value}
        onChange={handleChange}
        className={`border-b-2 p-2 w-full ${
          props.isValid ? "border-costume-border-gray" : "border-red-500"
        }`}
      />
      {!props.isValid && <p className="text-red-500 text-sm">{props.error}</p>}
    </div>
  );
}
