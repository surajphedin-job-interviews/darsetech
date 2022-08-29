import Card from "../Card/Card";
import "./gallery.css";

const Gallery = () => {
  return (
    <div className="root">
      <div>
        <div>
          <Card height="130px" text="Widget 1"></Card>
          <Card height="200px" text="Widget 4"></Card>
        </div>
        <div>
          <Card height="200px" text="Widget 2"></Card>
          <Card height="50px" text="Widget 5"></Card>
        </div>
      </div>

      <div>
        <Card height="150px" text="Widget 3" isSpecial></Card>
        <div className="minus_margin_top">
          <Card height="130px" text="Widget 6" isSpecial></Card>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
