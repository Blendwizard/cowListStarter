import React from 'react';

class CowDetails extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    if (this.props.clickedCow) {
      return (
        <div>
          <h3>{this.props.clickedCow.name}</h3>
          <p>{this.props.clickedCow.description}</p>
        </div>
      )
    } else {
      return (
        <div>
          <h3>Click on a cow to show details</h3>
        </div>
      )
    }
  }
}

export default CowDetails;