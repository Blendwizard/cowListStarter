import React from 'react';

class CowListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        {this.props.cow.name}
      </li>
    )
  }
}


export default CowListItem;