import React from 'react';
import CowList from './CowList.jsx';
import AddCow from './AddCow.jsx';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows: []
    };
    this.url = 'http://localhost:3000/';
  }


  componentDidMount() {
    this.fetchCows();
  }

  fetchCows() {
    fetch(this.url + 'api/cows')
    .then((response) => response.json())
    .then((response) =>
    {
      this.setState({cows: response})
    })
    .then(console.log("Fetching cows..."))
    .catch();
  }

  addCow(cow) {
    console.log(cow);
    fetch(this.url + 'api/cows', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(cow)
    })
    .then((response) => console.log(response))
    .then(this.fetchCows())
    .catch();
  }


  render() {
    return (
      <div>
        <h1>Cow List</h1>
        <AddCow addCow={this.addCow.bind(this)}/>
        <CowList cows={this.state.cows} />
      </div>
    )
  }



}


export default App;
