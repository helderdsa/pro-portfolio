import { skills } from "../data/data"

const Case = (props) => {
  const {image, resume, name, skillsIds} = props
  return (
    <div style={{backgroundImage: `url('${image}')`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
      <p>{name}</p>
      <p>{resume}</p>
      {skillsIds.map((id) => (
        <img src={skills[id].image} alt={skills[id].name} />
      ))}
    </div>
  )
}

export default Case