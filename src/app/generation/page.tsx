"use client"
import { PDFViewer } from '@react-pdf/renderer';
import { useSearchParams } from 'next/navigation'
import React, { Suspense } from 'react'
import MyDocument from './components/myDoc';

function Page() {
  return (
    <Suspense>
      <Component />
    </Suspense>
  )
}

function Component() {
    // Récupération des données passées depuis PageA
    // const { data } = router.query;
    const searchParams = useSearchParams()
    const search = searchParams.get('bonvalues')
    console.log(search)
    if(!search){
        return <p>No params</p>
    }
    // Convertir la chaîne JSON en objet JavaScript
    let parsedData = null;
    try {
      parsedData = JSON.parse(search);
    } catch (error) {
      console.error('Erreur lors de la conversion JSON :', error);
    }
    
  
  return (
        <div className='border w-full'>
        <PDFViewer className='w-full h-[100vh]'>
          <MyDocument data={parsedData} />
        </PDFViewer>
    </div>
  )
}

export default Page