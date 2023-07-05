
import React from "react"
import ReactDOM from 'react-dom/client';
import App from "./App"
// ReactDOM is used to render components and elements on the web
// createRoot lets you create a root to display React components inside a browser DOM node. const root = createRoot(domNode, options?).


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)




