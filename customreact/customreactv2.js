

function customRender(element, container ){
    const domElement = document.createElement(element.type)
    domElement.innerHTML = element.children
     
    for (const prop in element.props) {
        console.log(`${prop} => ${element.props[prop]}`)
      if(prop === 'children') continue;
      domElement.setAttribute(prop,element.props[prop])
    }

    container.appendChild(domElement)
}

const reactElement = {
    type : "a",
    props : {
        href : "https://google.com",
        target : "_blank"
    },
    children : "click me to google"
}

const mainContainer = document.querySelector('#root')


customRender(reactElement,mainContainer)
