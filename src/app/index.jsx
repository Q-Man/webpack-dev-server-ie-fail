import React from "react";
import ReactDOM from "react-dom";

export class Main extends React.Component {
    render() {
        return <div>Hello world!</div>
    }
}

ReactDOM.render(
    <Main/>,
    document.getElementById('app')
);