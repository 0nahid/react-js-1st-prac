import logo from './logo.svg';
import './App.css';

function App() {
  var person = {
    name: `Nahid`,
    job: "Developer" 
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
        <Product name="Adobe Lightroom" price="$69.99"></Product>
        <Product name="DreamWaver" price="$36.96"></Product>
        <Product name="Adobe Reader " price="$63.23"></Product>
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
    <h3>My Name : {props.name} </h3>
    <p>My job : {props.job}</p>
  </div>
 );
}

function Product(props) {
  const productStyle ={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'350px',
    width:'350px',
    float:'left',
    marginTop:'20px'
  }
  return(
    <div style={productStyle}>
      <h4>{props.name}</h4>
      <h2>{props.price}</h2>
      <p>Lorem ipsum dolor, sit </p>
      <button>Buy Now</button>
    </div>
  )
}
export default App;
