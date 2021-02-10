import React from 'react';
import Card from './Card.js';
const Cardlist = ({zodiac}) =>
{
	return (
		<div ><div className="cardlist">
 {zodiac.map((name,i) => 
	{
		
		return (<Card key={i} id={zodiac[i].id} name={zodiac[i].name} />);
	})}
	</div>
    </div>
		);
}
export default Cardlist;