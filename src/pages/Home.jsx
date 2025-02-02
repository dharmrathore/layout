import React, { useEffect, useRef, useState } from 'react'

const Home = () => {
	const [data, setData]= useState({
		name: 'dev', 
		age: 25
	});
	const [count, setCount] = useState(0);
	const  lastval = useRef();
	const prevval = lastval.current;
	useEffect(() => {
		lastval.current = count;
	})

  return (
    <>
		<div className="d-flex gap-4 flex-column">
		<h1>Home Page {data.name} / <span className='text-success'>{data.age}</span></h1>

		<h3>Current Val {count}</h3>
		<h3>Prev Val {prevval}</h3>
		<input  type="text" value={data.name} onChange={(e)=> {setData({...data,name:e.target.value})}} />
		<input  type="text" value={data.age} onChange={(e)=> {setData({...data,age:e.target.value})}} />
		<div >
		<button type='button' className='btn btn-primary' onClick={(e)=>{setCount(Math.floor( Math.random()*10))}}>Count</button>
		</div>
		</div>
	</>
  )
}

export default Home
