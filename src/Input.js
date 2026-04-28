// import { Component, useContext } from "react";
import { useContext } from "react";
import dataContext from "./context";

// const { Consumer } = dataContext;

// class InputComponent extends Component {
//     static contextType = dataContext;

//     render() {
//         return (
//             // <Consumer>
//             //     {(value) => {
//             //         return (
//             //             <input
//             //                 value={value.mail}
//             //                 type="email"
//             //                 className="form-control"
//             //                 id="exampleFormControlInput1"
//             //                 placeholder="name@example.com"
//             //             />
//             //         );
//             //     }}
//             // </Consumer>
//             <input
//                 value={this.context.mail}
//                 type="email"
//                 className="form-control"
//                 id="exampleFormControlInput1"
//                 placeholder="name@example.com"
//             />
//         );
//     }
// }

const InputComponent = () => {
    const context = useContext(dataContext);

    return (
        <input
            value={context.mail}
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            onFocus={context.forceChangeMail}
        />
    );
};

export default InputComponent;
