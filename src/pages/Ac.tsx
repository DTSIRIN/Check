import { IonSlide, IonSlides,  IonContent, 
    IonHeader, IonPage, IonTitle, 
    IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, 
    IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, 
    IonButton,IonInput, IonText, IonRouterOutlet, IonToggle, IonCheckbox } from '@ionic/react';
  import React, { useState } from  'react';
  import { Route } from 'react-router-dom'
  import ExploreContainer from '../components/ExploreContainer';
  import { pin, wifi, wine, warning, walk, logoGoogle } from 'ionicons/icons';
  import './Home.css';
  
  const slideOpts = {
    initialSlide: 1,
    speed: 400
    
  };
  
  
  const Ac: React.FC = () => {
  
    const [checked, setChecked] = useState(false);
    return (
      <IonPage>
        <IonContent class='background' fullscreen>
          <IonHeader>
            <IonButton class="button-logout" routerLink="home">
              Logout
            </IonButton>
            <section>
            <IonItem class="item-Ac">
            <IonCheckbox ></IonCheckbox>
              <IonLabel>Allow to access your location</IonLabel>
              </IonItem>
              <IonItem class="item-Ac1">
              <IonCheckbox ></IonCheckbox>
              <IonLabel>Allow to access your Camera</IonLabel>
              </IonItem>
            </section>
            <section>
           <IonButton class="button-start" size="large" >
            Get Start
           </IonButton>
           </section>
  
  
            
          </IonHeader>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Ac;
  