import React from "react";

function Footer()
{
    let year=new Date().getFullYear();
    return(
        <div className="Footer">
        <p>© {year} | Made By Aadarsh Srivastav</p>
        </div>
    )
}

export default Footer;