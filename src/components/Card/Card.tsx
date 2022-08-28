import "./card.css";

const Card = (props: CardProps) => {
  const { height, text, isSpecial = false } = props;
  return (
    <div
      style={{
        height: height,
      }}
      className={`card ${isSpecial ? "bg" : ""}`}
    >
      {text}
    </div>
  );
};

export default Card;

interface CardProps {
  height: string;
  text: string;
  isSpecial?: boolean;
}
