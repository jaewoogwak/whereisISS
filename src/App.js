import React from 'react';
import Iss from './Iss';

class App extends React.Component {

  constructor() {
    super();
    this.state= {
      data : {
        message : '',
        timestamp : '',
        iss_position : {
          latitude :0,
          longitude:0
        }
      }
    }
    setInterval(this.run, 3000)
  }
  getData = async () => {
    const url = await fetch('http://api.open-notify.org/iss-now.json');
    const resp = await url.json();
    console.log('resp', resp);
    return resp;
  }

  run = async () => {
    // tdhis.timer = setInterval(this.getData, 3000);aafdsafdsaaafdsafdas
    console.log('this,timer', this.timer);
    const data = await this.getData()
    this.setState({ data : data});
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    console.log('data', this.state.data);
    return (
      <div>
        <Iss data = {this.state.data}/>

      </div>
    )

  }
}

export default App;