
const render =() =>{

    document.getElementById('mountNode').innerHTML = `
        <div>
        Hello HTML
        <input/>
        <pre>${(new Date).toLocaleTimeString()}</pre>
      </div>
    `;
    
    ReactDOM.render(
      React.createElement(
        'div', 
        null, 
        'Hello React',
        React.createElement('input',null),
        React.createElement('pre', null, (new Date).toLocaleTimeString())
      ),
      document.getElementById('mountNode2'),
    );
    }
    
    //React: renderiza somente a data novamente
    //HTML: renderiza tudo novamente
    
    
    setInterval(render, 1000);
    
    
    