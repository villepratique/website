"use client"
// pages/index.js
import React from 'react';
import axios from 'axios';
import BonDeCommandeForm from './generation/components/BonForm';

const Home = () => {

  return (
    <div className=''>
        <div className='max-w-lg mx-auto '>
            <h1 className='text-3xl text-center mt-10'>Générer un Bon de Commande</h1>
            <BonDeCommandeForm  />
        </div>
    </div>
  );
};

export default Home;
