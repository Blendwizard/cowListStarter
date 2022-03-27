import React from 'react';
import CowListItem from './CowListItem.jsx';
var CowList = (props) => {
  return (
    <div>
      <h2>Cow Roster</h2>
      <ul>
        {props.cows.map((cow) => {
          return <CowListItem key={cow.id} cow={cow} clickedOnCow={props.clickedOnCow}/>
        })}
      </ul>
    </div>
  )
}


export default CowList;