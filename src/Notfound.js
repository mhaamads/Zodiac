import React from 'react'
import "./Notfound.css";
import { useHistory } from "react-router-dom";

const Notfound = () => {
    const history = useHistory();
    return (
        <div>
            <span className="notfoundtxt">Page Not Found
            <div className="gobackbtn" onClick={()=>history.push("/")}>Go Back</div>
            </span>
        </div>
    )
}

export default Notfound
