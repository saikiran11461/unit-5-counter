

import React from 'react';

const Counter=()=>{

const [counter, setCounter] = React.useState(0);


const handelChange =(value)=>{
 
  
  
  setCounter(counter+ value);
}


// const decreamnt =()=>{
//   setCounter(counter -1);
// };

const dobly =()=>{
  setCounter(counter * 2);
}

return(
<>

<h3  className= {`${counter % 2 === 0 ? "even" : "odd"}`}>Counter: {counter}</h3>

<button onClick={()=>handelChange(1)}>Increment</button>
<button onClick={()=>handelChange(-1)}>Decreament</button>
<br/>
<button onClick={dobly}>Double</button>



</>
);
}

export default Counter