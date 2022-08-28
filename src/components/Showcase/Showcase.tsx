import "./showcase.css";

const Showcase = () => {
  return (
    <div className="showcase_root">
      <div className="intro">
        <div>
          <div>
            <span className="greetings">Hello</span>
            <span>_______________</span>
          </div>
          <p className="name">I am Suraj Pheudin</p>
          <p className="position">Software Developer</p>
          <div className="action_wrapper">
            <a href="https://facebook.com/surajpheudin" target={"_blank"}>
              <button>Contact</button>
            </a>
            <a href="/pdfs/resume.pdf" target={"_blank"}>
              <button>Get CV</button>
            </a>
          </div>
        </div>
      </div>
      <div>
        <img className="img" width="100%" src="images/profile_bg.png"></img>
      </div>
    </div>
  );
};

export default Showcase;
