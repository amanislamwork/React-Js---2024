import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Myapp(){
    return(
        
        <a href="https://google.com">click here</a>
        
    )
}
const anotherVariable = "Another Variable"
const reactElement = React.createElement(
    'a',
    {href:"http://google.com", target: '_blank'},
    'click me to visit google',
    anotherVariable
)

ReactDOM.createRoot(document.getElementById('root')).render(
<App />,
    
)
