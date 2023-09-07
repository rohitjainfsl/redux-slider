import { useEffect } from "react";
import "./App.css"
import { useDispatch, useSelector } from "react-redux";
import { getData, incrementSlider, decrementSlider } from "./slice";

function App() {
  const dispatch = useDispatch();
  const init = useSelector((state) => {
    return state.slider;
  });

  
  useEffect(() => {
    dispatch(getData(init.page));
  }, [init.page]);

  if (!init.isLoading) return <p>Loading...</p>;
  else {
    return (
      <>
      <div className="maindiv">

        <div className="slider">
          <div className="slider-wrapper">
            <div className="left">
              <img src={init.product.image} alt="Product Image" />
            </div>
            <div className="right">
              <h2>{init.product.title}</h2>
              <p>{init.product.description}</p>
              <p>{init.product.price}</p>
            </div>
          </div>
          <div className="navigation">
            <button
              onClick={() => dispatch(decrementSlider())}
              disabled={init.page === 1 ? true : false}
              >
              Prev
            </button>
            <button
              onClick={() => dispatch(incrementSlider())}
              disabled={init.page === 19 ? true : false}
              >
              Next
            </button>
          </div>
              </div>
        </div>
      </>
    );
  }
}

export default App;
