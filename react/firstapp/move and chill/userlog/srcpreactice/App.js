import {useState , useEffect} from 'react';
import './App.css';


// const Person =(props)=>{
//   return (
//   <>
//     <h1>
//       name : {props.name}
//     </h1>
//     <h2>
//       { props.isname ? props.name +" is good": "cant process due to name not found"}
//     </h2>
//   </>
//   )
// }

const App = () => {
  const [count,setCounter] = useState(0);

  useEffect(() => {
    setCounter(6);
  },[count]);

  return (
    <div className="App">
      {/* <Person name={'john'} isname={true}/>
      <Person name={'mical'} isname={false}/> */}
      <button onClick={() => setCounter((p) => p-5)}>-</button>
      <h1>{count}</h1>
      <button onClick={() => setCounter((prevCount)=>prevCount+5)}>+</button>
    </div>
  );
}

export default App;
