import '../styles/heroSection.css';
import PrimaryBtn from './PrimaryBtn';
import heroImg from '../imgs/ftsite.png';
const HeroSection = () => {
  return (
    <div className="quemSou">
      <img src={ heroImg } alt="hero Img" className="heroImg" />
      <div className="texto">
        <h4 className="cta">
          <br />
          HELDER DANIEL
        </h4>
        <h6 className="ctaSec">FULLSTACK DEVELOPER</h6>
        <div>
          <a href="https://www.linkedin.com/in/helderdsa-dev/">
            <PrimaryBtn btnText="linkedin"/>
          </a>
          <a href="https://github.com/helderdsa">
            <PrimaryBtn btnText="github"/>
          </a>
        </div>
      </div>
    </div>
  )
}
export default HeroSection