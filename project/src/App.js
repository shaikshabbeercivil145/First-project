import logo from './logo.svg';
import './App.css';

function App() {
  return <div>
      <h1>Users: </h1>

   < section className="container">
    <User  name="shabeena" job="ElectricalEngineering" location="Vallur"/> 
    <User name="sameer" job="MechatronicsEngineering" location="Delhi"/>
    <User name="mahabasha" job="PetroleumEngineering" location="Chennai"/>
    <User  name="mahabasha" job="PetroleumEngineering" location="Chennai"/>
    <User name="shakeer"/>

    </section>
  </div>
}

function User(props){
  return<div className="user">
    <h1>{props.name}</h1>
    <p>Job: {props.job}</p>
    <p>Location: {props.location}</p>
  </div>
}

export default App;
