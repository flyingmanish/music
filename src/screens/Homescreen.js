import React from 'react';
import Header from '../components/Header';

import Sidebar from '../components/Sidebar';
import Content from '../components/Content'; 
class Homescreen  extends React.Component{
   render(){
        return(
            <>
              <Header/>
              <Sidebar/>
              <Content/>
            </>
        );
   }
}
export default Homescreen;