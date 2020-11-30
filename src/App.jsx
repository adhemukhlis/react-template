import React, { Component } from 'react';
import listReactFiles from 'list-react-files'
class App extends Component {
    componentDidMount(){
        listReactFiles(__dirname).then(files => console.log(files))
    }
    render( ) {
        return (
            <div></div>
        )
    }
}
export default App;