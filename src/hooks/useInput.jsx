import { useState } from 'react';

function useInput(defaultValue = '') {
  const [value, setValue] = useState(defaultValue);

  function handleValueChange(newValue) {
    setValue(newValue);
  }

  return [value, handleValueChange, setValue];
}

export default useInput;
