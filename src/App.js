import React, { useState } from 'react';

function App() {
  const [active, setActive] = useState({})
  const mouseOver = evt => {
    if (evt.target.id)
      setActive({ active: evt.target.id })
    else
      setActive({})
  }

  const divMain = {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '2rem'
  }
  const divOptions = {
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: '#000',
    color: '#fff',
    padding: '1rem'
  }
  const styleDefault = {
    backgroundColor: 'yellow',
    borderColor: '#000',
    padding: '2em'
  }
  const styleSelected = {
    padding: '2em',
    boxShadow: '0 0 15px #ffee10',
    backgroundColor: '#581845',
    textShadow: '0 0 5px #ffee10'
  }

  const MyItem = ({ name, id }) => (
    <h2
      style={
        active.active === id
          ? styleSelected
          : styleDefault}
    >{name}
    </h2>
  )

  return (
    <>
      <div style={divMain} >
        <MyItem name={'Item 1'} id={'item1'} />
        <MyItem name={'Item 2'} id={'item2'} />
      </div>
      <div style={divMain} >
        <MyItem name={'Item 3'} id={'item3'} />
        <MyItem name={'Item 3'} id={'item3'} />
      </div>
      <div style={divOptions} onMouseOver={mouseOver}>
        <span id='item2'>Item 2</span>
        <span id='item1'>Item 1</span>
        <span id='item3'>Item 3</span>
      </div>
    </>
  )
}

export default App
