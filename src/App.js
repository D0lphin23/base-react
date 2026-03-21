import { Component } from "react";
import "./App.css";

class WhoAmI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 31,
            text: "+++",
        };
    }

    nextYear = () => {
        this.setState((state) => ({
            years: state.years + 1,
        }));
    };

    render() {
        const { name, surname, link } = this.props;
        return (
            <div>
                <h1>
                    My name is {name()}, surname - {surname.lastName}, age -{" "}
                    {this.state.years}
                </h1>
                <a href={link}>My profile</a>
                <button onClick={this.nextYear}>{this.state.text}</button>
            </div>
        );
    }
}

function App() {
    return (
        <div className="App">
            <WhoAmI
                name={() => {
                    return "Egor";
                }}
                surname={{ lastName: "Gorelik" }}
                link="facebook.com"
            />
            <WhoAmI
                name={() => {
                    return "John";
                }}
                surname={{ lastName: "Shepard" }}
                link="vk.com"
            />
        </div>
    );
}

export default App;
