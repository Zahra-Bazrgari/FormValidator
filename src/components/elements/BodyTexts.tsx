interface IPropsTypes {
  text: string;
  textSize?: string;
  textColor?: string;
}

export default function BodyTexts(props: IPropsTypes) {
  return (
    <div
      className={`font-semibold max-w-fit ${
        props.textSize ? props.textSize : "text-base"
      } ${props.textColor ? props.textColor : "text-costume-d-gray"}`}
    >
      {props.text}
    </div>
  );
}
