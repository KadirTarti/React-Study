
const GorevEkle = () => {
 

  return (
    <div>
      <header className="header">
        <h1>TO DO APP</h1>
        <button
          className="btn"
        
        >
         CLOSE ADD TASK BAR
        </button>
      </header>

      
        <form >
          <div className="form-control">
            <label htmlFor="text">Task</label>
            <input
              id="text"
              type="text"
              name="text"
            />

          </div>
          <div className="form-control">
            <label htmlFor="day">Day & Time</label>
            <input
              id="day"
              type="datetime-local"
            
              name="day"
            
            />
          </div>
          <div>
            <button className="btn btn-submit" type="submit">
              SUBMİT
            </button>
          </div>
        </form>
    
    </div>
  );
};

export default GorevEkle;
