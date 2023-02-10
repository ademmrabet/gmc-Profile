import React from 'react'
import '../App.css'
function Profile(props) {
  return (
    <div className='t'>
        {console.log(props.data)}
        <div>
            {props.data.map(el=>{
                return(
                    <div className='test'>
                      <div className='container'>
                        <span className='intro'>
                          <img className='pfp' src={el.img} alt='pfp'/>
                          <h3>{el.FirstName}</h3>
                          <h3>{el.LastName}</h3>
                          <p>{el.Profession}</p>
                        </span>
                        <span className='info'>
                          <p>{el.Bio}</p>
                        </span>
                      </div>                      
                    </div>
                )
            })}
        </div>
        
    </div>
  )
}

export default Profile