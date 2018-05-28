import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class BPM extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        bpm: 0,
        count: 0,
        msecsFirst: 0,
        msecsPrev: 0
      }
      this.calcBpm = this.calcBpm.bind(this);
    }

  calcBpm(e) {
    //console.log('Tap');
    //console.log(this.state);
    var timeSeconds = new Date;
    var msecs = timeSeconds.getTime();
    // console.log(timeSeconds);
    // console.log(msecs);

    if ((msecs - this.state.msecsPrev) > 1000)
      {
      this.state.count = 0;
      }
    if (this.state.count == 0)
      {
      this.state.msecsFirst = msecs;
      this.state.count = 1;
      }
    else
      {
      var bpmAvg = 60000 * this.state.count / (msecs - this.state.msecsFirst);
      var bpmVal = Math.round(bpmAvg * 100) / 100;
      var bpmWhole = Math.round(bpmAvg);
      this.state.count++;
      this.setState({
        bpm: bpmWhole
      });
      //console.log('Bpm Avg', bpmAvg)
      }
      this.state.msecsPrev = msecs;
    
  }

  render() {
    return (
      <div>
        <h3>Heart Rate: {this.state.bpm} BPM</h3>
        <h4>Tap the logo to the beat of your pulse</h4>
        <img src="url.png" onClick={this.calcBpm} />
      </div>
      )
    }
}

export default BPM;