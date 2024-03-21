

const OgrenciItem = () => {

  return (
    <div>
{[].map((i)=>{
return(
    <div style={{backgroundColor:i.color}}>
        <h3>NAME: {i.name}</h3>
        <h4>EMAİL: {i.email} </h4>
        <h4> AGE: {i.age}</h4>
        Color: <input type="text"  
          
        />
    </div>
)


})}
       
    </div>
  )
}

export default OgrenciItem