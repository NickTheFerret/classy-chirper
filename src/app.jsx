import moment from 'moment';
import React from 'react';
import ChirpCard from './components/chirpCard';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            username: 'Nick',
            message: 'Hello There',
            timestamp: moment().format('MMMM Do YYYY, h:mm:ss a'),

            username: 'Nathan',
            message: 'Hello My Guy',
            timestamp: moment().format('MMMM Do YYYY, h:mm:ss a'),

            username: 'Garrett',
            message: 'Hello World',
            timestamp: moment().format('MMMM Do YYYY, h:mm:ss a'),
        }

    }
    render() {
        return (
            <>
<div>
    <input type="text" onChange={e => this.setState({username: e.target.value})}/>
    <input type="text" placeholder="What." onChange={e => this.setState({message: e.target.value})}/>
</div>



                {this.state.chirps.map (chirp => <ChirpCard chirp={chirp} />
                ))}
</>
    }

}
export default App