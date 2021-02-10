import React from 'react';
import { useHistory } from "react-router-dom";
const Card = (props) => {
	const history = useHistory();
	return(
<div className="card dib br3 pa3 bw2 shadow-5 grow" onClick={()=> history.push({
           pathname: '/info',
           state: { id: props.id }
       })}>
<img alt='cardimg'  src={require(`./img/${props.name}.png`)} />
<div className='zodn'>
		<h2 className='nem' >{props.name}</h2>
</div>
</div>
		);
}

export default Card;