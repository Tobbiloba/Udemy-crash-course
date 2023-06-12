// 1 Import react nd reactdom Library

import React from 'react';
import ReactDOM from 'react-dom/client'
// 2 Get a reference to the div with id root
const el = document.getElementById('root')
// 3 Tell react to take control of that Element
const root = ReactDOM.createRoot(el)
// 4 Create a component
function App() {
    return <h1 >Hi there</h1>
}
// 5 Show component on the screen
root.render(<App />)
