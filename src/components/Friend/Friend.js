import React from 'react';

const Friend = (props) => {
    const {name, phone, website, email, address} = props.friend;
    return (
        <div>
            <h2>I am {name}</h2>
            <h5>Call me: {phone}</h5>
            <p>Visit me: {website}</p>
            <p><small>I live in: {address.city}</small></p>
        </div>
    );
};

export default Friend;