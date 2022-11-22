
import { useState, useEffect, useRef } from 'react';

import Content from './components/Content';



function App() {

  const [allow, setAllow] = useState('enabled');
  const [color, setColor] = useState('black');
  const [size, setSize] = useState(12);
  const [family, setFamily] = useState('Monospace');

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  useEffect(() => {
    if (allow === 'disabled') {
      ref1.current.disabled = true;
      ref2.current.disabled = true;
      ref3.current.disabled = true;
    } else {
      ref1.current.disabled = false;
      ref2.current.disabled = false;
      ref3.current.disabled = false;
    }
  }, [allow]);





  return (


    <>

      <div className='container'>
        <div className='tgl'>
          <select name="changing" className='select' onChange={(e) => setAllow(e.target.value)}>
            <option value="enabled">Allow edit</option>
            <option value="disabled">Disable</option>
          </select>

          <select name="change-color" className='select' ref={ref1} onChange={(e) => setColor(e.target.value)}>
            <option value="black">Black</option>
            <option value="blue">Blue</option>
            <option value="red">Red</option>
          </select>

          <select name="change-size" className='select' ref={ref2} onChange={(e) => setSize(e.target.value)}  >
            <option value="12">12</option>
            <option value="20">20</option>
            <option value="25">25</option>
          </select>

          <select name="change-style" className='select' ref={ref3} onChange={(e) => setFamily(e.target.value)}>
            <option value="Monospace">Monospace</option>
            <option value="Sans-serif">Sans-Serif</option>
            <option value="Script">Script</option>
          </select>

        </div>

        <Content color={color} size={size} family={family} />

      </div>

    </>
  );
}

export default App;
