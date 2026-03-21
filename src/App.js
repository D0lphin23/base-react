import "./App.css";

const WhoAmI = ({ name, surname, link }) => {
    return (
        <div>
            <h1>
                My name is {name()}, surname - {surname.lastName}
            </h1>
            <a href={link}>My profile</a>
        </div>
    );
};

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
