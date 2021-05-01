import React, {Fragment} from 'react';

class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <header className="App-header">
                    <h1>Hello World</h1>
                    <ul>
                        <li>Link 1</li>
                        <li>Link 2</li>
                        <li>Link 3</li>
                    </ul>
                </header>
            </React.Fragment>
        )
    }
}
export default header