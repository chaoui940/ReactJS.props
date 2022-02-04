import React from 'react';

function Hello (props)
{
return (
    <div>
        <h1>Hello {props.name} a.k.a {props.id}</h1>
        {props.children}
    </div>
)
}
export default Hello ;