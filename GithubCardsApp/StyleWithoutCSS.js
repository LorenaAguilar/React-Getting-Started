
class Card extends React.Component{
    render(){
      return(
        //1 {} for dynamic and 1 {} for an object
        <div className="github-profile" style={{ margin: '1rem' }}>
          <img style={{width: 75}} src="https://img.r7.com/images/rosto-humano-irreal-inteligencia-artificial-19022019142839436"/>
          <div className="info" style={{display:'inline-block',marginLeft:10}}>
            <div className="name" style={{fontSize:'125%'}}>Name here... </div>
              <div className="company">Company here... </div>
          </div>
        </div>
      );
    }
  }
  
  //This makes your js component an official react component
  class App extends React.Component{
    //constructor
    //this
    
    //Every class of react HAVE TO has a render
    render(){
      //return a virtual dom
      return (
        <div>
        <div className="header">{this.props.title}</div>
        <Card/>
          </div>
        ); 
      
    }
  }
  
  // const App = ({title}) => (
  //   <div className="header">{title}</div>
  // );
  
  ReactDOM.render(
      <App title="The GitHub Cards App" />,
    mountNode,
  );