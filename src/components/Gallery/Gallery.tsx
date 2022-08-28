import Card from "../Card/Card";
import "./gallery.css";

const Gallery = () => {
  return (
    <div className="root">
      <Card height="100px" text="Widget 1"></Card>
      <Card height="200px" text="Widget 2"></Card>
      <Card height="150px" text="Widget 3" isSpecial></Card>

      <Card height="200px" text="Widget 4"></Card>

      <Card height="50px" text="Widget 5"></Card>

      <Card height="100px" text="Widget 6" isSpecial></Card>
    </div>
  );
};

export default Gallery;
