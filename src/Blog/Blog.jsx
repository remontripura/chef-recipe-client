import React from 'react';
import { Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container>
            <div>
                <h2>the differences between uncontrolled and controlled components</h2>
                <p>
                    In the context of a software application, uncontrolled components and controlled components refer to two different approaches to managing the state of user interface elements.
                    <br></br>
                    Uncontrolled Components:
                    An uncontrolled component is a form element that manages its own state internally. In other words, the value of the element is not controlled by React, but rather by the browser. Examples of uncontrolled components include text inputs, checkboxes, and radio buttons.
                    <br></br>
                    Controlled Components:
                    In contrast, a controlled component is a form element whose value is controlled by React. This means that the value of the element is stored in the component's state and updated through React's event handling system. This allows React to manage and manipulate the state of the component, allowing for more predictable behavior and easier debugging. Examples of controlled components include select boxes and text areas.
                </p>
            </div>
            <div>
                <h2>How to validate React props using PropTypes</h2>
                <p>
                    React is a popular JavaScript library used for building user interfaces. One of the key features of React is the ability to pass data between components using props. PropTypes is a library that allows developers to validate the data passed through props in a React application.
                </p>
            </div>
            <div>
                <h2>the difference between nodejs and express js</h2>
                <p>

                    Node.js and Express.js are two different technologies that are often used together in web development, but they serve different purposes.
                    <br></br>
                    Node.js is a runtime environment that allows developers to run JavaScript code outside of a web browser. It provides a way for developers to build server-side applications using JavaScript. Node.js is built on top of the V8 JavaScript engine, the same engine that powers Google Chrome, and it provides a powerful set of APIs for building networked and scalable applications.
                    <br></br>
                    Express.js, on the other hand, is a web application framework that is built on top of Node.js. It provides a set of features and utilities that make it easier to build web applications and APIs using Node.js. Express.js provides a simple and flexible way to handle HTTP requests and responses, manage routing, and handle middleware.
                </p>
            </div>
            <div>
                <h2>What is a custom hook, and why will you create a custom hook?</h2>
                <p>
                    In React, a custom hook is a reusable function that encapsulates logic and stateful behavior that can be shared between different components. Custom hooks allow developers to extract complex logic into reusable and composable functions, improving code reusability and reducing code duplication.
                    <br></br>
                    Developers create custom hooks to encapsulate specific functionality that is used in multiple places within their application. For example, a custom hook could be created to handle data fetching, authentication, or handling certain user interactions. By creating a custom hook, developers can abstract away the implementation details and use the hook in multiple components, simplifying their code and reducing the likelihood of introducing bugs.
                </p>
            </div>
        </Container>
    );
};

export default Blog;