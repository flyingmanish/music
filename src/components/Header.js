import React from 'react';
import '../assets/header.css';
class Header  extends React.Component{
   render(){
        return(
            <>
              <header class="main-b-clr">
                <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">
                    <a class="navbar-brand main-f-clr" href="#">WebSiteName</a>
                    </div>
                    <div class="search">
                    <div class="search-wrap">
                        <button><i class="fa fa-search" aria-hidden="true"></i></button>	
                        <input type="text" placeholder="Search song , Artists ,Albums"/>
                    </div>
                    </div>
                </div>
                </nav> 
             </header>
            </>
        );
   }
}
export default Header;