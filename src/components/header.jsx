import React from "react";
import Clock from "react-live-clock";

class Header extends React.Component{
    render() {
        return(
            <header id="header">
                  <h1 id="headerTitle">ToCal</h1>
                  <div id="nowTime">
                    <h1 id="headerClock"><Clock format={"HH:mm:ss"} ticking={true}/></h1>
                    <h3 id="nowDate"><Clock format={"ll"} /></h3>
                  </div>
                  
            </header>
        );
    }

}

export default Header;