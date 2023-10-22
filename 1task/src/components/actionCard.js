import React from 'react';

const ActionCard = ({heading, members,notification = false, button = false}) => {
  return (
    <div className="action-card">
      <h2>{heading}</h2>
      <ul>
        {members.map((member) => (
          <li key={member.name}>
          <div className="member-container">
            <img src={member.avatar} alt={member.name} />
            {
              notification === true ?  
              <span className="notification">
                {member.notification}
              </span> : null
            }
                    
          </div>
          <div>
            <span>{member.name}</span>
            <span className="username">{member.username}</span>
          </div> 
          {button === true ? <div className="group-actionss">
            <button className="join-button">
              <img src="./icon2.png" alt="JG" style={{border : 'none' , height : "20px" , width : "20px"}}/>
            </button>
          </div> : null } 
        </li>
        ))}
      </ul>
    </div>



  );
};

export default ActionCard;
