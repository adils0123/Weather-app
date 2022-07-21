import React from "react";
import SunnyIcon from '@material-ui/icons/WbSunny';
function Header()
{
    return(
        <div className="Header">
            <h1><SunnyIcon/><span>weather</span></h1>
        </div>
    )
}
export default Header;