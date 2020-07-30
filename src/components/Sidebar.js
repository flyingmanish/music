import React from 'react';
import '../assets/sidebar.css';
class Header  extends React.Component{
   render(){
        return(
            <>
              <aside>
                <ul class="sidenav">
                    <li><i class="fa fa-home" aria-hidden="true"></i><a href="#">Home</a></li>
                    <li class="active"><i class="fa fa-music" aria-hidden="true"></i> <a href="#">All songs</a></li>
                    <li><a href="#">Albums</a></li>
                    <li><a href="#">Artist</a></li>
                </ul>	  
              </aside>
            </>
        );
   }
}
export default Header;
