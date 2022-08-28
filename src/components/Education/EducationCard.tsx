import "./educationCard.css";

const EducationCard = (props: EducationCardProps) => {
  const { title, passedYear, institute, result } = props;

  return (
    <div className="education_card">
      <p className="title">{title}</p>
      <p>Institute: {institute}</p>
      <p>Passed Year: {passedYear}</p>
      <p>CGPA: {result}</p>
    </div>
  );
};

export default EducationCard;

interface EducationCardProps {
  title: string;
  passedYear: string;
  institute: string;
  result: string;
}
