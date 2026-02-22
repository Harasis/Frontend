import { useEffect, useRef } from "react";
import { STATUS } from "./constants";

function CheckBoxes({ data, handleChange }) {
  const checkboxRef = useRef();

  useEffect(()=>{
    if(data.status === STATUS.INDETERMINATE){
      checkboxRef.current.indeterminate = true
    }
    else{
      checkboxRef.current.indeterminate = false
    }
  }, [data.status])

  

  return (
    <div>
      <input
        ref={checkboxRef}
        type="checkbox"
        checked={data.status === STATUS.CHECKED}
        onChange={()=>handleChange(data.id)}
      />
      <label>{data.label}</label>
    </div>
  );
}

export default CheckBoxes;
