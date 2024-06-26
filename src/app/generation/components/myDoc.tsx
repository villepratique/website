"use client"
import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer, Image } from '@react-pdf/renderer';
import { CONDITIONS } from '../constants';
import { Font } from "@react-pdf/renderer";

// noelline.landry5@gmail.com
// lafon.villepratique@gmail.com

// villepratique.jlafon@gmail.com
// villepratique

// Font.register({
//   family: 'Inter',
//   src: '/Inter/ourfont.ttf'
// });
Font.register({
  family: 'Roboto-Bold',
  src: '/Roboto/Roboto-Bold.ttf',
});


function formatDate(date : Date) {
  return date.toLocaleDateString('fr-FR');
}

  
// Create styles
const styles = StyleSheet.create({
  side : {
    display : "flex",
    flexDirection: 'row',
    maxWidth : "70%",
    margin : "0 auto"
  },
  firstbox : {
    width : "60%"
  },
  secondbox : {
    width : "40%",
    fontSize : 6,

  },
  page: {
   marginTop : 20,
   
    backgroundColor: 'white',
    padding:"20 0px",
    // font-family: "Inter", sans-serif;
  },
  section: {
    marginTop : 10
    // margin: 10,
    // padding: 10,
    // flexGrow: 1,
  },
  title: {
    fontSize: 14,
    marginBottom: 20,
    textDecoration :"underline",
    fontFamily : "Roboto-Bold",
  },
  minlabel: {
    fontSize: 5,
    fontWeight: 'bold',
  }, minvalue: {
    fontSize: 5,
    fontWeight: 'bold',
    marginLeft : 20,
  },
  label: {
    fontSize: 5,
    fontWeight: 'bold',
  },
  grosTitre: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom : 4
  },
  titre: {
    fontSize: 8,
    marginBottom : 4,
   

  },
  value: {
    fontSize: 6,
    marginLeft: 10,
    fontWeight : "bold",
    // borderBottomWidth : 0.4,
    // borderStyle : "dotted",
  },
  row : {
    display: "flex",
    flexDirection : "row",
    alignItems: "center",
    margin : "2px 0"
  },
  rond:{
    width : 5,
    height : 5,
    borderRadius : "50%",
    // border : "solid black 2px",
    borderWidth : 0.4,
    borderColor : "black",
    marginRight : "3px"
  }
});




// Create Document Component
const MyDocument = ({ data } : {data : BdcModel}) =>{
  const SignaturePart = <View style={{
    padding : 10,
    display : "flex",
    flexDirection : "row",
    backgroundColor : "green",
    marginTop : 20,
  }}>
    <View style={{
      width :"100%",
      height: "100%",
      backgroundColor : "white",
    padding : 10,

    }}>
        <Text style={{
          fontSize : 8,
          fontWeight : "bold"
        }}>Vu , LE DÉLÉGUÉ</Text>
  
        <View style={styles.row}>
          <Text style={styles.label}>Nom: </Text>
          <Text style={styles.value}>{data.commercialContact}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Date: </Text>
          <Text style={styles.value}>{formatDate(new Date())}</Text>
        </View>

        <Image style={{
      width: 50, // Définir la largeur souhaitée
      height: 'auto', 
      margin:"0 auto"
      }} src="/dame/sign.jpg" />


  
    </View>
     <View style={{
      width :"100px",
      height: 100,
      backgroundColor : "green",
      
    }}></View>

    <View style={{
      width :"100%",
      height: "100%",
      backgroundColor : "white",
      padding : 10,
      display : "flex",
      justifyContent : "space-between"
    }}>
          <View>
              <Text style={{
              fontSize : 8,
              fontWeight : "bold"
            }}>L'ANNONCEUR LOCATAIRE</Text>
            
            <Text style={{
              fontSize : 8,
              fontWeight : "bold"
            }}>Signature et cachet d'entreprise</Text>
          </View>
          
          <View style={{display : "flex", flexDirection : "row",alignItems : "center"}}>
            <View style={{width : 4,height : 4, borderWidth : 0.4,marginRight : 4}}></View>
            <Text style={{fontSize : 5,}}>Lu et approuvé</Text>
          </View>

    </View>
  </View>

  return (
  
  <Document>
    <Page size="A4" style={styles.page}>

      <View style={styles.side}>
          <View style={styles.firstbox}>
      <Image style={{
      width: 140, // Définir la largeur souhaitée
      height: 'auto', 
      }} src="/dame/logo.png" />


            <View style={styles.section}>
              <Text style={{...styles.titre,textTransform :"uppercase",marginTop: 20, fontFamily : "Roboto-Bold"}}>Informations Locataire d'espace:</Text>

              <View style={styles.row}>
                <Text style={styles.label}>Société : </Text>
                <Text style={styles.value}>{data.socialReason}</Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.label}>Représentée par : </Text>
                <Text style={styles.value}>{data.representedBy}</Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.label}>Adresse : </Text>
                <Text style={styles.value}>{data.adresse}</Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.label}>CP - Ville : </Text>
                <Text style={styles.value}>{data.postalCode} - {data.city}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Tél : </Text>
                <Text style={styles.value}>{data.phoneOrFax}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Portable : </Text>
                <Text style={styles.value}>{data.portable}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Email : </Text>
                <Text style={styles.value}>{data.email}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Site web : </Text>
                <Text style={styles.value}>{data.website}</Text>
              </View>

            </View>
            <View style={styles.section}>
              <Text style={styles.titre}>COMMANDE PAR MISE EN LIGNE:</Text>

              <View style={styles.row}>
                <Text style={styles.label}>Secteur d'activité : </Text>
                <Text style={styles.value}>{data.sector}</Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.label}>Ville: </Text>
                <Text style={styles.value}>{data.city}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Format de location sélectionné: </Text>
                <Text style={styles.value}>{data.city}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Tarif H.T: </Text>
                <Text style={styles.value}>{data.priceHT} euros</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>TVA (20%): </Text>
                <Text style={styles.value}>{data.priceHT!*0.2} euros</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Tarif T.T.C: </Text>
                <Text style={styles.value}>{data.priceHT!*0.2 + data.priceHT!} euros</Text>
              </View>



            </View>

            <View style={{...styles.section,margin : "10px 0"}}>
              <Text style={{...styles.titre, fontFamily : "Roboto-Bold"}}>COMMENTAIRES</Text>
                <Text style={{fontSize : 6,marginTop : 10,}}>{data.observations}</Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.titre}>FORMATS D'INSERTION PUBLICITAIRE</Text>

              <View style={styles.row}>
                <Text style={styles.label}>TARIFS H.T ANNUEL (HORS MISE EN  LIGNE) </Text>
              </View>

              {[
                {label : "1 écran 625 x 625" , value : "5500 euros"},
                {label : "1/2 écran 500 x 500" , value : "4500 euros"},
                {label : "1/4 écran 525 x 525" , value : "3250 euros"},
                {label : "1/8 écran 350 x 350" , value : "2800 euros"},
                {label : "Ville supplémentaire" , value : "1140 euros"},
                {label : "Activité supplementaire" , value : "1140 euros"},
                {label : "Montant annuel H.T (campagne)" , value : `  ${data.priceHT! * parseInt(data.nbDeployOrdered!)!} euros`},
              ].map((v) => <View style={{...styles.row, width : 140,justifyContent :"space-between"}}>
                  <Text style={styles.minlabel}>{v.label} </Text>
                  <Text style={styles.minvalue}> <span className='w-2'></span> {v.value}</Text>
                </View>)}

                  <View style={{...styles.row,marginBottom : 10}}>
                    <Text style={{...styles.minlabel,marginRight : 0}}>Nb de mises en ligne souscrites: </Text>
                    {["3","6","9","12"].map((v,index) => {
                      return  <View style={{display : "flex",flexDirection : "row"}}> 
                              <Text style={{...styles.minlabel,marginRight : 2}}> {v}</Text>
                                <View style={{...styles.rond,backgroundColor: data.nbDeployOrdered == v ? "black" :"white"}}> 
                                </View>

                            </View>
                    })} 
                  </View>
            </View>

    <View style={{
      width : 180,
      height: 20,
      backgroundColor: "green",
      color : "white",
      padding : "4px 30px",
      fontSize : 6,
      display : "flex",
      flexDirection : "column",
      alignItems : "center",
      justifyContent : "center",
      textAlign : "center"
    }}>
      <Text>Règlement par chèque à l'ordre de </Text>
      <Text>FRANCE MEDIA COMMUNICATION</Text>

    </View>

          </View>

          <View style={styles.secondbox}>
        <Text style={{...styles.title,marginTop : 40}}>Bon de Commande </Text>
        <View style={{...styles.row,marginBottom : 10}}>
          <Text style={{fontSize : 8,fontWeight : "bold",marginTop : 4}}>N° - {data.numero} </Text>
          <Text style={{fontSize : 8,fontWeight : "bold",marginTop : 4,marginLeft : 10,}}>{formatDate(new Date())}</Text>

        </View> 

            {data.nonReductibleCommand == "Oui" && <Text style={{color : "red",fontSize : 12,fontWeight : "bold",marginBottom : 10,fontFamily : "Roboto-Bold"}}>Campagne non reconductible  </Text>}
            <Text style={{fontSize : 8,fontWeight : "bold",marginTop : 4}}>CONDITIONS GÉNÉRALES DE LOCATION POUR MISE EN LIGNE.</Text>
            <Text style={{fontSize : 4,lineHeight : 1.5,marginBottom : 10}} >{CONDITIONS}</Text>
            
          </View>

      </View>
      <View style={{maxWidth : "80%",margin : "0 auto"}}>
      {SignaturePart}
      </View>
     

      <View style={{
        textAlign :"center"
      }}>
        <Text style={{fontSize : 5,marginTop : 10,}}>Guide ma ville pratique - France Média communication 9 rue de l'église - 93800 Epinay Sur Seine</Text>
        <Text style={{fontSize : 5,marginTop : 4,}}>Mail: contact@mavillepratique.fr</Text>
      </View>


      


    </Page>
  </Document>
)};

export default MyDocument;

export interface BdcModel {
    // owner: string | null;
    // ownerName: string;
    numero:string;
    filename: string;
    date: string | null;
    autoNumerotation: string | null;
    nonReductibleCommand: string | null;
    editionDomTom: string | null;
    socialReason: string | null;
    representedBy: string | null;
    adresse: string | null;
    adresseComplement: string | null;
    postalCode: string | null;
    city: string | null;
    phoneOrFax: string | null;
    portable: string | null;
    email: string | null;
    website: string | null;
    firstDeploy: string | null;
    nbDeployOrdered: string | null;
    encart: string | null;
    bdcLocality: string | null;
    sector: string | null;
    priceHT: number | null;
    tva: number | null;
    totalTTC: number | null;
    totalHT: number | null;
    commercialContact: string | null;
    observations: string | null;
  }
  