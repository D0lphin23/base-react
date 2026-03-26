import { Component } from "react";
import "./App.css";

class WhoAmI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 31,
            text: "+++",
            position: "",
        };
    }

    nextYear = () => {
        this.setState((state) => ({
            years: state.years + 1,
        }));
    };

    commitInputChanges = (e) => {
        this.setState({
            position: e.target.value,
        });
    };

    render() {
        const { name, surname, link } = this.props;
        const { years, position } = this.state;
        return (
            <>
                <h1>
                    My name is {name()}, surname - {surname.lastName}, age -{" "}
                    {years}, position - {position}
                </h1>
                <a href={link}>My profile</a>
                <button onClick={this.nextYear}>{this.state.text}</button>

                <form>
                    <span>Введите должность</span>
                    <input type="text" onChange={this.commitInputChanges} />
                </form>
            </>
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
