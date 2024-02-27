import React from 'react'

const profile= (props) => {
    console.log(props)
  return (
    <div>
        {props.children}
        <p>
            <strong>Full Name:</strong>{props.data.fullName}
            <br/>
            <strong>Bio : </strong> {props.data.bio}
            <br/>
            <strong> Profession: </strong>{ props.data.profession}
        </p>
    </div>
  )
}
export default profile
