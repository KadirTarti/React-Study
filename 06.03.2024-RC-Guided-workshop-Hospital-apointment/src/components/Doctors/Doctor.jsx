export function Doctor(props) {
    const { img, name } = props;
    return (
      <div className="doctor-container">
        <div className="img-container">
          <img src={img} alt={name} />
        </div>
        <div className="doctor-name">
          <span>{name}</span>
        </div>
      </div>
    );
  }
  