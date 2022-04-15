import React from 'react'
import FilterBTN from '../FilterBTN';

const Gender = ({setPageNumber, setGender}) => {

    let genders = ["female", "male", "genderless", "unknown"];
  return (
    <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button 
        className="accordion-button collasped" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#collapseThree" 
        aria-expanded="false" 
        aria-controls="collapseThree"
       >
        Gender
      </button>
    </h2>
    <div 
        id="collapseThree" 
        className="accordion-collapse collapse" 
        aria-labelledby="headingThree" 
        data-bs-parent="#accordionExample"
    >
      <div className="accordion-body d-flex flex-wrap gap-2">
          {genders.map((items, index) => (
              <FilterBTN 
                name="gender" 
                index={index}
                key={index} 
                setPageNumber={setPageNumber}
                task={setGender}
                items={items} />
          ))}
      </div>
    </div>
  </div>
  );
};

export default Gender