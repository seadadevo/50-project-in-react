import { useSelector, useDispatch } from "react-redux";
import "../counterIncre.css";
import { RootState } from "../../../app/store";
import { useEffect } from "react";
import { updateCounter } from "../../../app/features/counterSlice";

const CounterInc = () => {
  const dispatch = useDispatch();
  const counters = useSelector((state: RootState) => state.counter.counters )

  useEffect(() => {
    const interval = setInterval(() => {
      counters.forEach((counter) => {
        dispatch(updateCounter({id: counter.id}))
      })
    }, 2);
    return () => clearInterval(interval)

  }, [dispatch,counters ])
  return (
   <div className="container">
    {counters.map(({id, website, icon, current }) => (
      <div key={id} className="box">
         <i className={`${icon} fa-3x`}></i>
          <div className="counter">{current}</div>
          <span>{website} Followers</span>
      </div>
    ))}
   </div>
  );
};

export default CounterInc;
