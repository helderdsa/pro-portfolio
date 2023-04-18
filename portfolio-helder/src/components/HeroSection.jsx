import '../styles/heroSection.css';
import heroImg from '../imgs/ftsite.png';
const HeroSection = () => {
  return (
    <div className="quemSou">
      <img src={ heroImg } alt="hero Img" className="heroImg" />
      <div className="texto">
        <h4 className="cta">
          {/* OLÁ MUNDO!<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Waving%20Hand.png" alt="hand wave gif" width="37px"></img> */}
          <br />
          HELDER DANIEL
        </h4>
        <h6 className="ctaSec">FULLSTACK DEVELOPER</h6>
      </div>
    </div>
  )
}
export default HeroSection