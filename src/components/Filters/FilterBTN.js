import React from 'react'

const FilterBTN = ({name, index, items, task, setPageNumber}) => {
  return (
      <div>
          <style jsx>
            {`

            .x:checked + label {
                background-color : orange;
                color : white;
            }
            input[type = "radio"] {
                display: none;
            }
            `}
          </style>
    <div className="form-check">
        <input 
            className="form-check-input x" 
            type="radio" 
            name={name} 
            id={`${name}-${index}`}
        />
        <label 
        onClick={() => {
                setPageNumber(1);
                task(items);
            }}
        className="btn btn-outline-primary" 
        for={`${name}-${index}`}>
            {items}
        </label>
    </div>
</div>
  );
};

export default FilterBTN