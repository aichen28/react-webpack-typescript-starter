import * as React from "react";
import "./../assets/scss/App.scss";
import Hello from "./Hello";

const reactLogo = require("./../assets/img/react_logo.svg");

export interface AppProps {
}

export default class App extends React.Component<AppProps, undefined> {
    render() {
        return (
            <div className="app">
                <h1>Hello World!</h1>
                <p>Foo to the barz sldklsd</p>
                <img src={reactLogo} height="480"/>
                <Hello/>
            </div>
        );
    }
}
