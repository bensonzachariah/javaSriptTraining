//Rendering in React

import React, { Component } from 'react';
import { render } from 'react-dom';

ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('root')
);


//React class component
import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
    render() {
        return (
            <div>
                <h1>App Component using class</h1>
            </div>
        )
    }

}

render(<App />, document.getElementById('root'));



//App Component using function
import React, { Component } from 'react';
import { render } from 'react-dom';

function App() {
    return (
        <div>
            <h1>App Component using function</h1>
        </div>
    )
}

render(<App />, document.getElementById('root'));


//App Component using arrow function
import React, { Component } from 'react';
import { render } from 'react-dom';

const App = () => {
    return (
        <div>
            <h1>App Component using function</h1>
        </div>
    )
}

render(<App />, document.getElementById('root'));

//Using props in class component
import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
    render() {
        return (
            <div>
                <h1>Hi my name is {this.props.name} and I'm {this.props.age}</h1>
            </div>
        )
    }

}

render(<App name="Sandeep" age={23} />, document.getElementById('root'));

//Using props in functional component
import React, { Component } from 'react';
import { render } from 'react-dom';

const App = (props) => {
    return (
        <div>
            <h1>Hi my name is {props.name} and I'm {props.age}</h1>
        </div>
    )
}

render(<App name="Sandeep" age={23} />, document.getElementById('root'));