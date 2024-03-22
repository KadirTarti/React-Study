import data from '../data.js'
import ImageSSS from './styles/ImageSSS';
import CardStyle from './styles/KartSSS.jsx';

const Card = () => {
  return (
    <div>
      {data.map((item)=>(
        <CardStyle>
          <div>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>

          <ImageSSS src={`./images/${item.image}`} alt="" />
        </CardStyle>


      ))}
    </div>
  );
}

export default Card