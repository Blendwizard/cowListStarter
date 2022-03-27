import React from 'react';

class CowListItem extends React.Component {
  constructor(props) {
    super(props);
  }


  handleClick(event) {
    // Gives use access to specific list items
    // console.log(this.props.cow)
    this.props.clickedOnCow(this.props.cow);
  }

  render() {
    return (
      <li onClick={this.handleClick.bind(this)}>
        {this.props.cow.name}
      </li>
    )
  }
}


export default CowListItem;