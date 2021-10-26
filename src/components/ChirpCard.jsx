import React from 'react';

let ChirpCard =({chirp}) => {
return (
<>
<h1>{chirp.username}</h1>
<h1>{chirp.message}</h1>
<h1>{chirp.timestamp}</h1>
</>
)

}

export default ChirpCard;

