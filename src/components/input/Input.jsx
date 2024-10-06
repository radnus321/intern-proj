import React, { useState } from 'react';
import './input.css';

const Input = ({ onSend }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue) {
      onSend(inputValue);
      setInputValue('')
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='input-field-container'>
        <input
          type="text"
          className='input-field'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type your message"
        />
      </div>
      <input type="submit" value="Send"/>
    </form>
  );
};

export default Input;
