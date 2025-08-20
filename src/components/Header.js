import { useState } from "react"
const Header = ()=>{
    const [btn,setbtn]=useState("login");
    return(
        <div className="header">
            <div className="logo container">
            <img className="logo" src="https://cdn.pixabay.com/photo/2022/08/07/22/19/pizza-7371507_1280.png"/>
        </div>
        <div className="navitems">
            <ul>
                <li>home</li>
                <li>about us</li>
                <li>cart</li>
                <li>contact</li>
                <li><button onClick={()=>{
                    btn==="login"? setbtn("logout"):setbtn("login");
                }}>
                    {btn}
                </button></li>
            </ul>
        </div>
        </div>
    )
}
export default Header