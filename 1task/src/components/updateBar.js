import React  from 'react';
import '../assets/css/update.css';

const Update = () => {
  const formStyle = [
    {
      display : "block"
    },
    {
     fontSize: "15px",
     fontWeight: "bold", 
    },
    {
      width : "100%", 
      borderRadius:'10px',
    }
  ]
  
  return (
    <div className="update-bar row">
      <div className= "col-3" style={formStyle[0]}>
        <h3 style={formStyle[1]}>All Updates</h3>
        <div className="update-bottom-line">
        </div>
      </div>
      <div className='col-5'></div>
      <div className="dropdown col-4">
        <select className='form-control' style={formStyle[2]}>
            <option>Everthing</option>
            <option>Select 1</option>
            <option>Select 2</option>
            <option>Select 3</option>
        </select>
        <span>Show</span>
      </div>
    </div>

  );
};

export default Update;
