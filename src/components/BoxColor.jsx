import { useRef, useState, useEffect } from 'react';

const BOX = ({ color, inputText }) => {
  const BOX_REF = useRef(null);
  const [backgroundColor, setBackgroundColor] = useState(null);

  useEffect(() => {
    if (inputText === color) {
      setBackgroundColor(color);
      BOX_REF.current.style.background = color;
      BOX_REF.current.innerText = `Yes, i am the ${color} color`;
    } else {
      setBackgroundColor(null);
      BOX_REF.current.style.background = '';
      BOX_REF.current.innerText = `I'm not the ${inputText} color`;
    }
  }, [inputText, color]);

  return (
    <div
      ref={BOX_REF}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '150px',
        height: '150px',
        border: `3px solid ${color}`,
        backgroundColor: backgroundColor,
        margin: '10px',
        fontSize: '14px',
      }}
    >
      {BOX_REF.current && BOX_REF.current.innerText}
    </div>
  );
};

export default BOX;