import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';

var token = 'Bearer BQALfwUDJ3K23rAXrKomhSU-D4tgdryiARMCdwGqYt53hQh6UFpWwDBtYRBVSJqPyUGWBDeLpVOpQN8Ch8H2D8Ri6fEmpDXaKsGqxD7tIqP0_saf0DXatMYrnJQqf7IutmYV55VL4D9ETo60hQg'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: ['exampleItem1', 'exampleItem2'],
      term: ''
    }
    this.onChange = this.onChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: '/items', 
      success: (data) => {
        // this.setState({
        //   items: data
        // })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }


  onChange (e) {
    console.log('You changed something you gawd');
    //console.log(e.target.value);
    console.log('Current state: ', this.state);

    this.setState({
      term: e.target.value
    });
  }

  handleKeyPress (e) {
    if (e.key === 'Enter') {
      // console.log('Event', e);
      // console.log(this.state.term);
      this.artistSearch(this.state.term);
    }
  }

  artistSearch(name) {
      //let artistName = JSON.stringify(name);
      
      var newName = name.replace(' ', '%20');
      console.log('Searching for ' + newName);


      // Get request because not changing their database
      // Posting is inserting or updating in servers
      $.get('/artist', {
          url: '/artist',
          nameParam: newName
      })
    }


  render () {
    return (
      <div>
      <button onClick = {() => {console.log(this.state)}} >State</button>
      <h1>Sweet Spot</h1>
       <div class="topnav">
        <input type="text" placeholder="Enter Artist Name" value={this.state.term} onChange={this.onChange} onKeyPress={this.handleKeyPress}/>
       </div>
      <List items={this.state.items}/>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));