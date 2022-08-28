import { useInView } from "react-intersection-observer";
import "./introduction.css";

const Introduction = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
      <div
        className="introduction"
        style={{
          marginTop: inView ? 0 : "200px",
        }}
      >
        <p className="title"> let’s Introduce about myself</p>
        <p className="info">
          I am a person who is very positive about every aspect of life. I am a
          hardworking, talented individual. There are many things I like to do,
          to see, and to experience. My greatest passion in life is to build a
          system that connects with people around the globe and I also want to
          help the community with my programming knowledge in any way I can. I
          am always eager to be challenged to grow and further improve my skills
          in both scientific and technical fields.
        </p>
        <p className="info">
          I am a person who is very positive about every aspect of life. I am a
          hardworking, talented individual. There are many things I like to do,
          to see, and to experience. My greatest passion in life is to build a
          system that connects with people around the globe and I also want to
          help the community with my programming knowledge in any way I can. I
          am always eager to be challenged to grow and further improve my skills
          in both scientific and technical fields.
        </p>
        <p className="info">
          I am a person who is very positive about every aspect of life. I am a
          hardworking, talented individual. There are many things I like to do,
          to see, and to experience. My greatest passion in life is to build a
          system that connects with people around the globe and I also want to
          help the community with my programming knowledge in any way I can. I
          am always eager to be challenged to grow and further improve my skills
          in both scientific and technical fields.
        </p>
        <button>Download CV</button>
      </div>
    </div>
  );
};

export default Introduction;
