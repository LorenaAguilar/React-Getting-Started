function Button() {
    //To make our button work, we need to play with the state
    const [counter, setCounter] = useState(5); //useState return 2 values, one getter and one setter, we are getting this 2 values into an array
    //onClick always receivs a function
      return <button onClick= {()=> setCounter(counter*2)}>{counter}</button>;
  }
  
  ReactDOM.render(
    <Button />, 
    document.getElementById('mountNode'),
  );