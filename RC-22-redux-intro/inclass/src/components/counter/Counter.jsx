import { useDispatch, useSelector } from "react-redux";
import "./Counter.css";

const Counter = () => {
  // useSelector(state => state.reducer)
  // const {count} = useSelector(state => state)
  // const count = useSelector((state) => state.count);
  //* store'da eski reducer'ı iptal edip root reducer oluşturduğumuz için burada o counter içinden count'a erişmemiz gerekiyor 
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>counter:{count}</h1>
      <div>
        <button className="counter-button negative">decrease</button>
        <button className="counter-button zero">reset</button>
        <button
          className="counter-button positive"
          // onClick={() => dispatch("INC")} //! action obje olmak zorunda o nedenle argüman gönderirken obje olarak göndermek zorundayız. Bu şekilde hata alırız.
          // onClick={() => dispatch({ tip: "INC" })}//? obje içerisinde gönderdiğimiz property type adında olmalı 
          onClick={() => dispatch({ type: "INC" })} //* dispatch içerisinde verdiğimiz argüman reducer içerisindeki action parametresine karşılık gelir.
        >
          increase
        </button>
      </div>
    </div>
  );
};

export default Counter;