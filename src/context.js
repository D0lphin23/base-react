import { createContext } from "react";

const dataContext = createContext({
    mail: "second@example.com",
    text: "some text",
    forceChangeMail: () => {},
});

export default dataContext;
