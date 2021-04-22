function Button(props) {
	
    const handleClick = () => props.onClickFunction(props.increment);
      
      //Nós usamos parenteses porque vai retornar uma função
        return( 
      <button onClick={handleClick}>
          +{props.increment}
        </button>
      );
    }
    
    //props é o que a função está recebendo lá do App
    function Display(props){
      return(
        <div>{props.message}</div>
      );
    }
    
    function App(){
      //O state precisa estar aqui para que seja acessado de qualquer outra função filha de App
      const [counter, setCounter] = useState(0);
      const incrementCounter = (incrementValue) => setCounter(counter+incrementValue);
      return(
        <div>
        <Button onClickFunction={incrementCounter} increment={1}/>
        <Button onClickFunction={incrementCounter} increment={5}/>
        <Button onClickFunction={incrementCounter} increment={10}/>
        <Button onClickFunction={incrementCounter} increment={100}/>
        <Display message ={counter} />
      </div>
      );
    }
    
    ReactDOM.render(
      <App/>, 
      document.getElementById('mountNode'),
    );