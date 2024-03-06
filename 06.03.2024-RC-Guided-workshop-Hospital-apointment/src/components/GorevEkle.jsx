import { useState } from "react";
import Data from '../helper/Data'

function Doctor (props) {
  const {img, name}= props
  return (
    <div className='doctor-container'>
          <div className='img-container'>
          <img src={img} alt={name} />
          </div>
          <div className='doctor-name'>
            <span>{name}</span>
          </div>
        </div>
  )
}


const GorevEkle = ({todos, setTodos}) => {
  const [texT, setText] = useState('')
  const [day, setDay] = useState('')
  const [display, setDisplay] = useState(true)





  const handleSubmit = (e) => {
    e.preventDefault();  // submit normalde inputu temizliyor ama e.prevent default nedeniyle bu temizlik gerçekleşmedi
    if(texT.trim() == '') {
      alert ('Please try to add something after writing it...')
    } else{

    const id = Math.ceil(Math.random() * 100) + 6
    // fetch.post(...todos, newTodos)     //  database'e gönderme
    // fetch.get(todos)  // database'den yeni halini çekme
    
    const newTodos = {id:id, text:texT, day:day, isDone:false};
    
    localStorage.setItem('gorevler', JSON.stringify([...todos, newTodos]))   // localstorage gönderme
    setTodos(JSON.parse(localStorage.getItem('gorevler')))
    
    // setTodos([...todos, {id:7, text:texT, day:day, isDone:false}])
    // setTodos([newTodos, ...todos]);

    // inputu boşaltmak için:
    setText('')
    setDay('')
   }
  }

  return (
    <div>
      <header className="header">
        <h1>HOSPITAL</h1>
      

      <div className='doctor-list'>
        {Data.map((doc, index)=>{
          return <Doctor img={`images/${doc.image}`} name={doc.doktor} />
        })
        }
      </div>
        {/* {Data.map((doctor)=> (
          <button key={doctor.id} className='d-resim'>
             {doctor.doktor}
          <img src={d1} alt="" />
        </button>
        ))}

        
        <button className='d-resim'>
          <img src={d2} alt="" />
        </button>
          <button className='d-resim'>
          <img src={d3} alt="" />
          </button>
          <button className='d-resim'>
          <img src={d4} alt="" />
        </button> */}


        <div>
        <button
          className="btn"
          style={{background: display ? "#393f4d" : "#cd5554"}}
          onClick = {()=>setDisplay(!display)}
        >
        {display ? "CLOSE" : 'SHOW  '} "Add-Task Bar"
        </button>
        </div>
      </header>

        {display && <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="text">Task</label>
            <input
              id="text"
              type="text"
              name="text"
              onChange={(e)=>setText(e.target.value)}
              value={texT}
            />

          </div>
          <div className="form-control">
            <label htmlFor="day">Day & Time</label>
            <input
              id="day"
              type="datetime-local"
              onChange={(e)=>setDay(e.target.value)}
              name="day"
              value={day}
            
            />
          </div>
          <div>
            <button className="btn btn-submit" type="submit">
              SUBMİT
            </button>
          </div>
        </form>} 
        {/* display true ise form göster, değilse birşey yapma (yani gösterme) dedik. Turnary ile bunu && ile de yapabiliyoruz. : ve sonrasını silip ? yerine && yazıyoruz */}


    
    </div>
  );
};

export default GorevEkle;
