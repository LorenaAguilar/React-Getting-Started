//Github usernames: gaearon, sophiebits, sebmarkbage, bvaughn
//Each component must have its own responsability


//Function
const CardList = (props) => (
  
    <div>
    
    {props.profiles.map(profile => <Card key={profile.id} {...profile}/>)}
    </div>
    );
    
    //Class
    //Each time we use a component, we get diferent information, this is why the "props" on line 20 get diferent cards each time
    class Card extends React.Component {
    render() {
    const profile = this.props;
      return (
        <div className="github-profile">
          <img src={profile.avatar_url} />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
        </div>
    );
    }
    }
    
    class Form extends React.Component{
      state = {userName: ''};
      
      handleSubmit = async (event) =>{
        event.preventDefault(); //Avoids the page of refresh when the submit is executed
        const response = await axios.get(`https://api.github.com/users/${this.state.userName}`);
        this.props.onSubmit(response.data);
        this.setState({userName: ''});
      };
      
      render(){
        return(
        <form onSubmit={this.handleSubmit}>
            <input
              type="text" 
              value={this.state.userName}
              //When we use value, we can't change the input anymore, this is why we put the down line 
              //This line will change the value to the target (new) value
              //We could change the next lines and separate then in functions
              onChange={event => this.setState({userName: event.target.value})}
              placeholder="GitHub username" 
              required
              />
              <button>
                Add card
              </button>
          </form>
        );
      }
    }
    
    class App extends React.Component {
      //To access the state of each class, we need to create a constructor
      //constructor(props){
        //super(props); //Js pattern, allow us to access the states of React.Component
        //this.state={
          //profiles: testData,
        //};
      //}
      
      //we can change the lines above, and use just:
      state={
        profiles:[],
      };
      
      addNewProfile = (profileData) => {
       this.setState(prevState => ({
         profiles: [...prevState.profiles, profileData]
       }))
      };
      
    render() {
      return (
        <div>
          <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile}/>
          <CardList profiles={this.state.profiles} />
          {/*Cardlist profiles={testData} />*/}
        </div>
    );
    }	
    }
    
    ReactDOM.render(
    <App title="The GitHub Cards App" />,
    mountNode,
    );