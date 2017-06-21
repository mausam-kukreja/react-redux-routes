import React from 'react';

class ClockBar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      mins: 0,
      secs: 0,
      hours: 0,
      millisecs:0
    };
    this.setTime = this.setTime.bind(this);
  }
  setTime(){
  	 var currentTime = new Date();
  	 var currentOffset = currentTime.getTimezoneOffset();
  	 var ISTOffset = 330;  
  	 var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset)*60000);
  	 this.setState({ hours:ISTTime.getHours(),mins: ISTTime.getMinutes(), secs: ISTTime.getSeconds() });
  }
  componentWillMount(){
  	this.setTime();
  }
  componentDidMount() {
    setInterval(() => {
      const millisecs = this.state.millisecs +1;
      const secs = millisecs >= 100 ? this.state.secs + 1 : this.state.secs;
      const mins = secs >= 60 ? this.state.mins + 1 : this.state.mins;
      const hours = mins >= 60 ? this.state.hours + 1 : this.state.hours;
      this.setState({ millisecs:millisecs%100,hours:hours % 24,mins: mins % 60, secs: secs % 60 });
    }, 10);
  }
  render() {
    return (
      <div style={{ width: '150px', textAlign: 'center' }}>
        <p> Current Time: {this.state.hours < 10 ? `0${this.state.hours}` : this.state.hours}:{this.state.mins < 10 ? `0${this.state.mins}` : this.state.mins}:{this.state.secs < 10 ? `0${this.state.secs}` : this.state.secs}:{this.state.millisecs < 10 ? `0${this.state.millisecs}` : (this.state.millisecs)} Hrs</p>
      </div>
    );
  }
}
export default ClockBar;
