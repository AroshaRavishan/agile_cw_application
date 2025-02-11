// Pages/Home.js
import React from 'react';
import PageLayout from '../Layouts/PageLayout';
import CarHero from '../components/CarHero';
import Filters from '../components/Filters';

const Cars = () => {




    return (
        <PageLayout>

            <CarHero />

            <Filters />

        </PageLayout>
    );
}

export default Cars;