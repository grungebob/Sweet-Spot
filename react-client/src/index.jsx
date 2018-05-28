import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import BPM from './components/BPM.jsx'

var token = 'Bearer BQALfwUDJ3K23rAXrKomhSU-D4tgdryiARMCdwGqYt53hQh6UFpWwDBtYRBVSJqPyUGWBDeLpVOpQN8Ch8H2D8Ri6fEmpDXaKsGqxD7tIqP0_saf0DXatMYrnJQqf7IutmYV55VL4D9ETo60hQg'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],
      term: ''
    }
    this.onChange = this.onChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.artistSearch = this.artistSearch.bind(this);
  }

  componentDidMount() {
    this.artistSearch('Childish Gambino');
  }


  onChange (e) {
    //console.log('You changed something you gawd');
    //console.log(e.target.value);
    //console.log('Current state: ', this.state);

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
      var newData = {}


      // Get request because not changing their database
      // Posting is inserting or updating in servers
      $.get('/artist', {
          url: '/artist',
          nameParam: newName
      })
      .done( (data) => {
        console.log('Returned data', data);
        console.log('Data constructor', data.constructor)
        this.setState({
          items: data
        })
      })
      // .done((data) => {
      //   console.log('Returned data', data);
      //   this.setState(
      //     items: data
      //   )
        //console.log(this.state);
        // return data;
        // this.setState({
        //   // this.state.items
        // })
      // })
      // .then((data) => {
        // this.setState({
        //   this.state.items
        // })
      //})
    }

/* Deleted HTML elements:
      <button onClick = {() => {console.log(this.state)}} >State</button>
      <img src="images.png">

<a ng-href="https://www.facebook.com/v2.3/dialog/oauth?client_id=174829003346&amp;state=AQBk2gTpW97eSicf5juVO7EMH9R1e-nSssXUzav2hkw16vnBITPhrQAlpk7Mu_tDjgBCuxNqI0X3gjwR_di0uztuZmpuIPSmVMWsGgH_49bURZB8WBIMx7WkoVH-QVyBjg-C&amp;redirect_uri=https%3A%2F%2Faccounts.spotify.com%2Fapi%2Ffacebook%2Foauth%2Faccess_token" class="btn btn-sm btn-block btn-facebook ng-binding" target="_parent" role="button" href="https://www.facebook.com/v2.3/dialog/oauth?client_id=174829003346&amp;state=AQBk2gTpW97eSicf5juVO7EMH9R1e-nSssXUzav2hkw16vnBITPhrQAlpk7Mu_tDjgBCuxNqI0X3gjwR_di0uztuZmpuIPSmVMWsGgH_49bURZB8WBIMx7WkoVH-QVyBjg-C&amp;redirect_uri=https%3A%2F%2Faccounts.spotify.com%2Fapi%2Ffacebook%2Foauth%2Faccess_token">Log in with Facebook</a>

*/

  render () {
    
    return (
      <div>
        <div id="facebook">
          <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=174829003346&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv2.3%2Fdialog%2Foauth%3Fredirect_uri%3Dhttps%253A%252F%252Faccounts.spotify.com%252Fapi%252Ffacebook%252Foauth%252Faccess_token%26state%3DAQBk2gTpW97eSicf5juVO7EMH9R1e-nSssXUzav2hkw16vnBITPhrQAlpk7Mu_tDjgBCuxNqI0X3gjwR_di0uztuZmpuIPSmVMWsGgH_49bURZB8WBIMx7WkoVH-QVyBjg-C%26client_id%3D174829003346%26ret%3Dlogin%26logger_id%3D11dc7753-bc52-9220-53a8-8f7118a8b750&cancel_url=https%3A%2F%2Faccounts.spotify.com%2Fapi%2Ffacebook%2Foauth%2Faccess_token%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3DAQBk2gTpW97eSicf5juVO7EMH9R1e-nSssXUzav2hkw16vnBITPhrQAlpk7Mu_tDjgBCuxNqI0X3gjwR_di0uztuZmpuIPSmVMWsGgH_49bURZB8WBIMx7WkoVH-QVyBjg-C%23_%3D_&display=page&locale=en_US&logger_id=11dc7753-bc52-9220-53a8-8f7118a8b750">Log in with Facebook</a>
        </div>
        <div>
        <h1> .
        </h1>
        <h2 align-content="center">    Sweet Spot</h2>
        <h4> Music for every mood. </h4>
        </div>
         <div class>
          <input type="text" placeholder="Enter Artist Name" value={this.state.term} onChange={this.onChange} onKeyPress={this.handleKeyPress}/>
         </div>
        <List items={this.state.items}/>
        <BPM />
      </div>
      )
    
  }
}

ReactDOM.render(<App />, document.getElementById('app'));