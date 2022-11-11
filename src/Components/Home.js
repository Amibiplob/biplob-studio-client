import React from 'react';
import Card from './Card';
import Bannar from './Header/Bannar';
import Subscribe from './Subscribe';


const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Card></Card>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;