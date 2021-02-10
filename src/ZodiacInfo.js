import React from 'react'
import "./ZodiacInfo.css"
import { useHistory,useLocation } from "react-router-dom";
import { AllZodiac } from './AllZodiac';
const ZodiacInfo = (props) => {
    const history = useHistory();
    const location = useLocation();
    const id=location.state.id-1;
    return (
        <div className="ZodiacInfo shadow-2">
            <ul className="listZodiac">
            <h1 className="logo" onClick={()=>history.push("/")}>g</h1>
               <span className="datarow">
                   <li className="listitem">start Date </li>
                   <span className="listitem">{AllZodiac.astrology[id].startDate}</span>
                   </span>
               <span className="datarow">
                   <li className="listitem ">end Date </li>
                   <span className="listitem">{AllZodiac.astrology[id].endDate}</span>
                   </span>
               <span className="datarow"> 
               <li className="listitem">name </li>
               <span className="listitem">{AllZodiac.astrology[id].name}</span>

               </span>
               <span className="datarow">
                   <li className="listitem">sign </li>
                   <span className="listitem">{AllZodiac.astrology[id].sign}</span>

                   </span>
               <span className="datarow">
                   <li className="listitem">spirit Color </li>
                   <span className="listitem">{AllZodiac.astrology[id].spiritColor}</span>
                   </span>
               <span className="datarow">
                   <li className="listitem">lucky Numbers </li>
                   <span className="listitem">{AllZodiac.astrology[id].luckyNumbers}</span>

                   </span>
               <span className="datarow">
                   <li className="listitem">lucky Day </li>
                   <span className="listitem">{AllZodiac.astrology[id].luckyDay}</span>

                   </span>
               <span className="datarow">
                    <li className="listitem">ruling Planet </li>
                    <span className="listitem">{AllZodiac.astrology[id].rulingPlanet}</span>

                    </span>
               <span className="datarow">
                    <li className="listitem textpos">qualities </li>
                    <span className="listitem">
                    {AllZodiac.astrology[id].qualities.map((name,i) => {	
		return (<li style={{"textAlign":"left","padding":"5px"}}>{i+1 + "- "+ AllZodiac.astrology[id].qualities[i]}</li>);
	})}
                        </span>

                    </span>
               <span className="datarow">
                   <li className="listitem">emojis </li>
                   <span className="listitem">
                       
                 <li className="emojis">  {AllZodiac.astrology[id].emojis["name"]}</li>
                 <li className="emojis"> {AllZodiac.astrology[id].emojis["symbol"]}</li>
                 <li className="emojis"> {AllZodiac.astrology[id].emojis["planet"]}</li>


                        </span>
                   </span>
                   <div className="gobackbtn" onClick={()=>history.push("/")}>Go Back</div>

            </ul>
        </div>
    )
}

export default ZodiacInfo
