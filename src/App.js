import React from 'react';
import logo from './logo.svg';
import Homescreen from './screens/Homescreen';
import {connect} from 'react-redux';
function App(props) {
  console.log(props);
  return (
    <> 
      <button onClick={() => props.changename()}>Click</button>
      <h1>{props.myname}</h1>
      
      <Homescreen/> 
    </>
  );
}

const mapStateToProps = (state) =>{
    return {
      myname:state.musicselection.state.currenturl
    }
}

const mapDispatchToProps = (dispatch) =>{
 
  return {
       changename:(name) => dispatch({
         type:"CHANGE_SONG",
         payload:"demo url"
       })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
