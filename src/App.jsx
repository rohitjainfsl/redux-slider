import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getData, incrementSlider, decrementSlider } from "./slice";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

function App() {
  const dispatch = useDispatch();
  const init = useSelector((state) => {
    return state.slider;
  });

  useEffect(() => {
    dispatch(getData(init.page));
  }, [init.page]);

  return (
    <>
      <div className="maindiv">
        {!init.isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="slider">
            <div className="slider-wrapper">
              <div className="left">
                <img src={init.product.image} alt="Product Image" />
              </div>
              <div className="right">
                <h2>{init.product.title}</h2>
                <p>{init.product.description}</p>
                <p className="pricing"><AttachMoneyIcon />{init.product.price}</p>
              </div>
            </div>
            <div className="navigation">
              <button
                onClick={() => dispatch(decrementSlider())}
                disabled={init.page === 1 ? true : false}
              >
                <ArrowLeftIcon />
              </button>
              <button
                onClick={() => dispatch(incrementSlider())}
                disabled={init.page === 19 ? true : false}
              >
                <ArrowRightIcon />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
