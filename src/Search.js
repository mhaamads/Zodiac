import React from 'react';
const Search= ({searchfield,onSearch})=>
{
	return(
<input type="text"
  placeholder="Search"
  className="tc pa2 br3 ba b--green bg-lightest-blue"
  onChange={onSearch}
/>
		);
}
export default Search;