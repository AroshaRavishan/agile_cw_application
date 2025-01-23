// Pages/Home.js
import React from 'react';
import PageLayout from '../Layouts/PageLayout';
import HeroBanner from '../components/HeroBanner';
import Categories from '../components/Categories';
import New from '../components/New';
import Details from '../components/Details';

const HomePage = () => {

    const backgroundImage = "w";
    const heroText = "you can count on​"; // Replace this with the data you want to pass
    const heroDescription = "Live journey information";
    const heroDescription2 = 'Get clued in about where your train is and when it’ll arrive, in real time, so you can plan your journey better.';


    return (
        <PageLayout>

            <HeroBanner backgroundImage={backgroundImage} heroText={heroText} heroDescription={heroDescription} heroDescription2={heroDescription2} />

            <Details />

            <Categories />

            <New />

        </PageLayout>
    );
}

export default HomePage;