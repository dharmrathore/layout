import React from 'react'

const Blog = (props) => {
    console.log(props.data.name)
    const {data} =  props;

  return (
    <>
    <h1>Name:  {data.name}</h1>
    <h2>Age: {data.age}</h2>
    <h3>Email: {data.email}</h3>
    <h4>Phone: {data.phone}</h4>
    </>
  )
}

export default Blog
