import React from 'react';

const HomePage = () => {
    return (
        <div>
            <div>I'm the new home component</div>
            <button onClick={() => console.log('Button Click!')}>Click!</button>
        </div>
    );
};

export default {
    component: HomePage
};