import React from "react";
import "./members.css";

function List_of_members(){
    const List_ = () => {

        const groupMembers = [
          'meron',
          'ruth',
          'robel',
          'natinael',
          'nathan',
          'salem',
          'solomon',
          'surafel',
          'osman',
          'temesgen',
        ];
    }


  return (
    <div className="List_of_members">
      <h2>Group 10 Members</h2>
      <ul>

        {List_of_members.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>

    </div>
  );
};


export default List_of_members;
