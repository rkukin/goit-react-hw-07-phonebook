import React, { Component } from "react";

const themeConfig = {
    light: {
        fontColor: "black",
        bodybg: "#fff"
    },
    dark: {
        fontColor: "white",
        bodybg: "#333333"
    }
};

const Context = React.createContext();

export default class ThemeContext extends Component {
    static Consumer = Context.Consumer;

    toggleTheme = () => {
        this.setState(state => ({
            type: state.type === "dark" ? "light" : "dark"
        }));
    };

    state = {
        type: "light",
        toggleTheme: this.toggleTheme,
        config: themeConfig
    };

    render() {
        return (
          <Context.Provider value={this.state}>
              {this.props.children}
          </Context.Provider>
        );
    }
}