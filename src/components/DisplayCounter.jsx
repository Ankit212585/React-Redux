import { useSelector } from "react-redux";

function DisplayCounter() {
  // const counter = useSelector((store) => store.counter);
  const { counterVal } = useSelector((store) => store.counter);
  return (
    <p className="lead mb-4">Counter current values:{counterVal}</p>
  );
}
export default DisplayCounter;
