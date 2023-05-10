import caseimg from '../imgs/Wallpaper_06.png'
import '../styles/casesSection.css'
import Case from './Case';

const CasesSection = () => {
  return (
    <main className="main-cases-div">
      <Case image={caseimg} resume={"resume"} name={"case 1"} skillsIds={[4, 5, 6, 7, 8]}/>
      <Case image={caseimg} resume={"resume"} name={"case 2"} skillsIds={[10, 11, 12, 13, 14]}/>
    </main>
  )
}

export default CasesSection;
