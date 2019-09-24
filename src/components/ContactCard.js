import React from 'react'

function ContactCard(props) {
    console.log(props);
    return (
        <div className="contact-card">
            <img align="center" src={props.contact.imgUrl}/>
            <h3><span color="#3AC1EF">{props.contact.name}</span></h3>
            <p>Phone: {props.contact.phone}</p>
            <p>Email: {props.contact.email}</p>
        </div>
    )
}

export default ContactCard