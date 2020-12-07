import { IonSlide, IonSlides,  IonContent, 
  IonHeader, IonPage, IonTitle, 
  IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, 
  IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, 
  IonButton,IonInput, IonText, IonRouterOutlet } from '@ionic/react';
import React from  'react';
import { Route } from 'react-router-dom'
import ExploreContainer from '../components/ExploreContainer';
import { pin, wifi, wine, warning, walk, } from 'ionicons/icons';
import './Home.css';

const slideOpts = {
  initialSlide: 1,
  speed: 400
  
};


const Home: React.FC = () => {

  return (
    <IonPage>
      <IonContent class='background' fullscreen>
        <IonHeader>
         
        <IonCard class='card-check'>
          <IonCardHeader>
            <IonCardSubtitle></IonCardSubtitle>
            <IonCardTitle class="text-title"> 
              CHECK!

            </IonCardTitle>
          </IonCardHeader>

        
        </IonCard>
        <IonLabel >
            <section>
              <IonButton routerLink='Login' expand="block"  class="button-home">AS</IonButton>
            </section>
            <section>
              <IonButton routerLink="" expand="block" class="button-home">asd</IonButton>
            </section>
            <section>
              <IonButton routerLink="" expand="block" class="button-home">SignUp</IonButton>
            </section>
        </IonLabel>


          
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Home;
