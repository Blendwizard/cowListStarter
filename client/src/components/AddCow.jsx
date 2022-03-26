import React from 'react';

class AddCow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameInput: '',
      descriptionInput: ''
    }
  }

  handleNameChange(event) {
    this.setState({nameInput: event.target.value});
  }

  handleDescriptionChange(event) {
    this.setState({descriptionInput: event.target.value});
  }

  handleSubmit() {
    console.log("Submitted new cow!")
    var cow = {name: this.state.nameInput, description: this.state.descriptionInput};

    this.props.addCow(cow);
  }

  render() {
    return (
      <div>
        <input val={this.state.nameInput} onChange={this.handleNameChange.bind(this)} placeholder='Add Cow Name...'></input>
        <input val={this.state.descriptionInput} onChange={this.handleDescriptionChange.bind(this)} placeholder='Add Cow Description...'></input>

        <button onClick={this.handleSubmit.bind(this)}>Add</button>
      </div>
    )
  }
}

export default AddCow;