import logo from './logo.svg';
import './App.css';

function App() {
  var person = {
    name: `Nahid`,
    job: "Singer" 
}
var style = {
  color:'red',
  backgroundColor:'darkBlue'
}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="" style ={style} >My first React Web Application</h1>
        <Person name="John" job="Dev"></Person>
        <Person name="Doe" job="Designer"></Person>
        <Person name="Smith" job="Developer"></Person>
      </header>
    </div>
  );
}

function Person(props){
  const style ={
    width:'500px',
    margin:'10px auto',
    border: '1px solid red'
  }
 return(
    <div style={style}>
    <h1>My Name : {props.name} </h1>
    <p>My job : {props.job}</p>
  </div>
 )
}
export default App;
