import { Component } from "react";
import styled from "styled-components";

import "./App.css";

const EmpItem = styled.div`
    padding: 20px;
    margin-bottom: 15px;
    border-radius: 5px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
    a {
        display: block;
        margin: 10px 0;
        color: ${props => props.active ? "orange" : "black"};
    }
    input {
        display: block;
        margin-top: 10px;
    }
`;

const Header = styled.h2`
    font-style: 22px;
`;

export const Button = styled.button`
    display: block;
    padding: 5px 15px;
    background-color: gold;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

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
            <EmpItem active>
                <Header>
                    My name is {name()}, surname - {surname.lastName}, age -{" "}
                    {years}, position - {position}
                </Header>
                <a href={link}>My profile</a>
                <Button onClick={this.nextYear}>{this.state.text}</Button>

                <form>
                    <span>Введите должность</span>
                    <input type="text" onChange={this.commitInputChanges} />
                </form>
            </EmpItem>
        );
    }
}

const Wrapper = styled.div`
    width: 600px;
    margin: 80px auto 0 auto;
`;

function App() {
    return (
        <Wrapper>
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
        </Wrapper>
    );
}

export default App;
