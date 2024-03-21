import { useContext } from "react"


const OgrenciItem = () => {

  const {students, changeColor} = useContext()

  return (
    <div>
{[].map(()=>{
return(
    <div style={{}}>
        <h3>NAME: {}</h3>
        <h4>EMAİL: {} </h4>
        <h4> AGE: {}</h4>
        Color: <input type="text"  
          
        />
    </div>
)


})}
       
    </div>
  )
}

export default OgrenciItem