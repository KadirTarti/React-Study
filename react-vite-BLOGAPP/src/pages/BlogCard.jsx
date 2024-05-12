

const Card = ({ blog }) => {

    return (
      <div className="card">
        <h3>{blog.title}</h3>
        <p>{blog.summary}</p>
        <button>Read More</button>
      </div>
    );
  };
  
  export default Card;