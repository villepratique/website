import * as Yup from 'yup';
import { BdcModel } from './myDoc';

const isTesting = process.env.NODE_ENV =="development"
const getDefaultValue = (val : any) => isTesting ? val : "";
const initialValues : BdcModel = {
    // owner: null,
    // ownerName: '', 
    filename: '',
    date: null,
    numero: "8808008",
    autoNumerotation: "Non",
    nonReductibleCommand:  "Non",
    editionDomTom:  "Non",
    socialReason: getDefaultValue("raisonsocial"),
    representedBy: getDefaultValue("representepar"),
    adresse: getDefaultValue("addresse"),
    adresseComplement: getDefaultValue("adresseComplement"),
    postalCode: getDefaultValue("postal code"),
    city: getDefaultValue("cityval"),
    phoneOrFax: getDefaultValue("phoneOrFax"),
    portable: getDefaultValue("portable"),
    email: getDefaultValue("richar@gmail.com"),
    website: getDefaultValue("websiteeee"),
    firstDeploy: null,//
    nbDeployOrdered: getDefaultValue("6"),
    encart: getDefaultValue("encart"),
    bdcLocality: getDefaultValue("bdcLocalitycc"),
    sector: getDefaultValue("sectorval"),
    priceHT: getDefaultValue(10),
    tva: null,
    totalTTC: null,
    totalHT: null,
    commercialContact: getDefaultValue("commercialContact"),
    observations: getDefaultValue("observations")
}

const bonSchema = Yup.object<BdcModel>({
    // ownerName: Yup.string().required('Le nom du propriétaire est requis'),
    //   filename: Yup.string().required('Le nom du fichier est requis'),
      date: Yup.date().nullable(),
      socialReason: Yup.string().nullable(),
      representedBy: Yup.string().nullable(),
      adresse: Yup.string().nullable(),
      adresseComplement: Yup.string().nullable(),
      postalCode: Yup.string().nullable(),
      city: Yup.string().nullable(),
      phoneOrFax: Yup.string().nullable(),
      portable: Yup.string().nullable(),
      email: Yup.string().email('Email invalide').required('Email est requis'),
      website: Yup.string().nullable(),
      firstDeploy: Yup.string().nullable(),
      nbDeployOrdered: Yup.string().oneOf(['3', '6', '9', '12'], 'Sélection invalide').nullable(),
      encart: Yup.string().nullable(),
      bdcLocality: Yup.string().nullable(),
      sector: Yup.string().nullable(),
      priceHT: Yup.number().nullable(),
      tva: Yup.number().nullable(),
      totalTTC: Yup.number().nullable(),
      totalHT: Yup.number().nullable(),
      commercialContact: Yup.string().nullable(),
      observations: Yup.string().nullable(),
  });

  export {initialValues,bonSchema}