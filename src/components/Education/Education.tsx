import EducationCard from "./EducationCard";

const EDUCATION_DETAILS = [
  {
    title: "BCA - TU",
    institute: "Mega National College",
    passedYear: "Running",
    result: "Not Decided",
  },

  {
    title: "+2 Science",
    institute: "NIMS NIRVANA",
    passedYear: "2018 AD",
    result: "3.04",
  },

  {
    title: "SLC",
    institute: "Bright Star W.H.S.S",
    passedYear: "2016 AD",
    result: "3.04",
  },
];

const Education = () => {
  return (
    <div
      style={{
        paddingTop: "100px",
      }}
    >
      <p
        style={{
          fontSize: "40px",
          textTransform: "uppercase",
          marginBottom: "50px",
        }}
      >
        My Education
      </p>
      {EDUCATION_DETAILS.map((item) => (
        <EducationCard
          key={item?.title}
          title={item?.title}
          institute={item?.institute}
          passedYear={item?.passedYear}
          result={item?.result}
        ></EducationCard>
      ))}
    </div>
  );
};

export default Education;
