export function Doctor(props) {
    const { img, name, filterByDoctor } = props;
    return (
      <div onClick={() => filterByDoctor(name)} className="doctor-container">
        <div className="img-container">
          <img src={img} alt={name} />
        </div>
        <div className="doctor-name">
          <span>{name}</span>
        </div>
      </div>
    );
  }
  