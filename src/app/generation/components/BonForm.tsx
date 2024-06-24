import React from 'react'
import { useFormik } from "formik";
import AppInput, { AppSelect } from '@/components/ui/Myself/AppInput';
import { bonSchema, initialValues } from './logic';

import "./s.css"
import { useRouter } from 'next/navigation';


const BonForm = () => {
  const router = useRouter()
  const formik = useFormik({
    initialValues : initialValues,
    validationSchema: bonSchema,
    onSubmit: async (values) => {
      console.log(values);
      // const data = {
      //   param1: 'valeur1',
      //   param2: 'valeur2',
      // };
  
      // Utilisation de router.push pour naviguer vers PageB avec les données
      // router.push({
      //   pathname: '/dame/generation', // Chemin de la page destination
      //   query: JSON.stringify(values), // Les données à passer en tant que paramètres de requête
      // });
      router.push("/dame/generation?bonvalues="+JSON.stringify(values))
      // router.push("" , values)


      // handle form submission, e.g., send to API
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="mt-6">
     {/* <AppInput label="Nom du propriétaire" name="ownerName" formik={formik} /> */}
      {/* <AppInput label="Nom du fichier" name="filename" formik={formik} /> */}
      {/* <AppInput label="Date" name="date" type="date" formik={formik} /> */}

      <div className='madiv'>
        <h2 className='text-xl'>Informations entête</h2>
        <AppSelect options={['Oui','Non']} label="Numérotation automatique" name="autoNumerotation" formik={formik} type={''} className={''} />
        <AppSelect options={['Oui', 'Non']} label="Commande non reconductible" name="nonReductibleCommand" formik={formik} type={''} className={''} />
        <AppSelect options={['Oui', 'Non']} label="Edition DOM/TOM" name="editionDomTom" formik={formik} type={''} className={''} />
      </div>
      <div className="madiv">
        <h2 className='text-xl'>Informations client</h2>
        <AppInput label="Raison sociale" name="socialReason" formik={formik} />
        <AppInput label="Représentée par" name="representedBy" formik={formik} />
        <AppInput label="Adresse" name="adresse" formik={formik} />
        <AppInput label="Complément d'adresse" name="adresseComplement" formik={formik} />
        <AppInput label="Code postal" name="postalCode" formik={formik} />
        <AppInput label="Ville" name="city" formik={formik} />
        <AppInput label="Téléphone / Fax" name="phoneOrFax" formik={formik} />
        <AppInput label="Portable" name="portable" formik={formik} />
        <AppInput label="Email" name="email" type="email" formik={formik} />
        <AppInput label="Site web" name="website" formik={formik} />
      </div>


       <div className='madiv'>
        <h2 className='text-xl'>Mise en ligne</h2>
        <AppInput label="Première mise en ligne programmée le" name="firstDeploy" formik={formik} />
        <AppSelect label="Nombre de mise en ligne commandées" name="nbDeployOrdered" formik={formik} options={['3', '6', '9', '12']} type={''} className={''} />
       </div>

      <div className='madiv'>
        <h2 className='text-xl'>Bon de commande</h2>
        <AppInput label="Encart" name="encart" formik={formik} />
        <AppInput label="Localité / Ville" name="bdcLocality" formik={formik} />
        <AppInput label="Secteur d'activité" name="sector" formik={formik} />
        <AppInput ourOnChange={(e : any) => {
console.log(e.target.value) 
            const v  = parseInt(e.target.value);

            const tva = v*0.2
            const montantTotal = tva + v
            formik.setValues({...formik.values, tva : tva , totalTTC : montantTotal})
        }} label="Montant H.T. (par mise en ligne)" name="priceHT" type="number" formik={formik} />
        <AppInput disabled  label="TVA" name="tva" type="number" formik={formik} />
        <AppInput disabled label="Total T.T.C. (par mise en ligne)" name="totalTTC" type="number" formik={formik} />
        <AppInput disabled label="Total H.T. (de la campagne)" name="totalHT" type="number" formik={formik} />
        <AppInput label="Contact commercial" name="commercialContact" formik={formik} />
        <AppInput label="Observations" name="observations" formik={formik} />
      </div>

      <div className="mt-6">

        <h1>Formil {JSON.stringify(formik.errors)}</h1>
        <button
          className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
          disabled={formik.isSubmitting}
          type="submit">
          Valider
        </button>
      </div>
    </form>
  );
};

export default BonForm