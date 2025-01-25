import "./Landing.css";
import NavBar from "./NavBar";

function LandingPanel() {
  return (
    <div className="LandingPage" id="home">
      <NavBar></NavBar>
      <p className="welcome bebas-bold">Hi there!</p>
      <div className="self-image-container">
        <img className="self-image" src="/self/Picture.jpg" alt="selfie.jpg" />
      </div>
      <p className="name bebas-regular">Gillian Florin</p>
      <p className="subtitle">Computer Engineering Student</p>
      <p className="paragraph oswald-regular">
        {
          "I’m an Aspiring Engineer with experience in both Software and Hardware"
        }
      </p>
    </div>
  );
}

export default LandingPanel;
