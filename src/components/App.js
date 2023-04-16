import React, { useState } from 'react'
import '../styles/App.css';

const App = () => {
  // const [width, setWidth] = useState("");
  // const [height, setHeight] = useState("");
  // const [backgroundColor, setBackgroundColor] = useState("");
  const[specs, setSpecs] = useState({
    width:"",
    height:"",
    backgroundColor:"",
  });

  const[styles, setStyles] = useState([]);


  const handleChange = (e)=>{
    setSpecs({
      ...specs,
      [e.target.name]:e.target.value,
    })
  }

  const handleSubmit = ()=>{
    setStyles([
      ...styles, 
      specs
    ])

    setSpecs({
      height:"",
      width:"",
      backgroundColor:""
    })
  }

  console.log(styles);
  return (
    <div id="main">
      <h1>Box Creator</h1>
      <div>
        <label htmlFor="width">Width:</label>
        <input
          id="width"
          type="number"
          name='width'
          value={specs.width}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="height">Height:</label>
        <input
          id="height"
          type="number"
          name='height'
          value={specs.height}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="backgroundColor">Background Color:</label>
        <input
          id="backgroundColor"
          type="text"
          value={specs.backgroundColor}
          name='backgroundColor'
          onChange={handleChange}
        />
      </div>
      <button className='create-btn' onClick={handleSubmit}>Create Box</button>
      <div id="box-container">
        {styles.map((style)=>{
            return <div style={{backgroundColor:`${style.backgroundColor}`, height:`${style.height}px`, width:`${style.width}px`}}></div>
          })
        }
      </div>
    </div>
  );
};


export default App;
