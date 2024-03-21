import { useContext } from "react"
import { StudentContext } from "../App"


const OgrenciItem = () => {

  // 3. ve son aşama (context consumer)... GLOBALDE  tanımladığımız değerleri buraya çağırdık

  const {students, changeColor} = useContext(StudentContext)
  console.log(students);

  return (
    <div>
{students.map((i)=>{
return(
    <div style={{background:i.color}}>
        <h3>NAME: {i.name}</h3>
        <h4>EMAİL: {i.email} </h4>
        <h4> AGE: {i.age}</h4>
        Color: <input type="text"  value={i.color}
        onChange={(e)=> changeColor(i.id, e.target.value)}
          
        />
    </div>
)


})}
       
    </div>
  )
}

export default OgrenciItem