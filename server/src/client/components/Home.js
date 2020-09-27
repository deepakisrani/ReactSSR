import React from 'react';

const Home = () => {
    return (
        <div>
            <div>I'm the new home component</div>
            <button onClick={() => console.log('Button Click!')}>Click!</button>
        </div>
    );
};

export default Home;