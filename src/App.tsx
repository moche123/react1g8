import React, { useEffect, useState } from 'react'
import './App.css'
import Present, { ITheme } from './Present'
import SuperComponent from './SuperComponent';

function App() {

  const size = "big";
  // const theme = "light";

  const [count, setCount] = useState(11);
  const [themeColor, setTheme] = useState<ITheme>("light");


  useEffect(() => {
    //ACCIÓN

    if(count === 20 && themeColor === "dark" ){
      alert('REQUISITO CUMPLIDO')
    }
  

  }, [count,themeColor])
  



  const switchTheme = () => {
    if(themeColor === "light"){
      setTheme("dark");
    }else{
      setTheme("light");
    }

  }
  
  const incrementNumber = () => {
    setCount(count+1); 
  }
 
  return (
    <React.Fragment>
      <Present theme={themeColor} size={size} />

      <div className="button-container">
       
        <button onClick={() => switchTheme()}>Switch</button>
      </div>

      <hr />
      <br />

        {/* V = V && V */}
        { count>=30  &&  <h2 className="dark">Asdasd</h2> } 
      
      <br />
      <div className="button-container">
        <div className="number-container">
          {count}
        </div>
        <button onClick={() => incrementNumber()}>+1</button>
      </div>

      <hr />
      <br /><br />

      <SuperComponent type="class-super">

          <h3>Hello Super component</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Et quos aperiam sed, dolorem consequuntur iure, rem, aut
              modi blanditiis corrupti tempora ullam necessitatibus! 
              Voluptates totam sit dignissimos facilis quos tempore.</p>

      </SuperComponent>

      <hr /><hr /><hr />

      <SuperComponent type="class-super">

          <h3>Hello Other component</h3>
          <p>Lorem ipsum dolor sit, amet consectetur 
            adipisicing elit. Pariatur nostrum nisi in
             illo mollitia blanditiis exercitationem 
             amet maxime deserunt inventore dicta natus 
             doloremque ullam enim voluptatem, animi optio 
             iste odit?</p>

      </SuperComponent>

      
    </React.Fragment>
  )
}

export default App
