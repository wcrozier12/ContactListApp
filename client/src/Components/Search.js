import React from 'react';
import './Search.css';

const Search = (props) => {
  return(
    <div className='row SearchDiv'>
      <h2> Search first or last name </h2>
      <div className='col-md-12'>
        <input className='Input' placeholder='First Name..' onChange={(event) => props.firstNameChange(event)}></input>
        <input className='Input'  placeholder='Last Name..' onChange={(event) => props.lastNameChange(event)}></input>
        <button style={{margin:'5px'}}  onClick={props.searchClick} className='btn btn-primary'>Search</button>
        <button style={{margin:'5px'}}  onClick={props.allContactsClick} className='btn btn-primary'>All Contacts</button>
      </div>
    </div>
  )
}

export default Search;