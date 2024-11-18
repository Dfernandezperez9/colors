import { useState } from 'react';
import Box from './BoxColor';

const MY_FORM = () => {
  const [inputText, setInputText] = useState('');
  const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];

  const HANDLE_CHANGE = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    }}>
      <input type="text" value={inputText} onChange={HANDLE_CHANGE} />
      <div style={{
        width: '900px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
        {colors.map(color => (
          <Box key={color} color={color} inputText={inputText} />
        ))}
      </div>
    </div>
  );
};

export default MY_FORM;