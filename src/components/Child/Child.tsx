import "./child.css";

const Child = (props: ChildProps) => {
  const { incrementBy, handleClick } = props;
  return (
    <>
      <button className="child_btn" onClick={handleClick}>
        Add {incrementBy}
      </button>
    </>
  );
};

export default Child;

interface ChildProps {
  incrementBy: number;
  handleClick: () => void;
}
