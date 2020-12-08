import { IonSlide, IonSlides,  IonContent, 
    IonHeader, IonPage, IonTitle, 
    IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, 
    IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, 
    IonButton,IonInput, IonText, IonRouterOutlet, IonToggle } from '@ionic/react';
  import React from  'react';
  import { Route } from 'react-router-dom'
  import ExploreContainer from '../components/ExploreContainer';
  import { pin, wifi, wine, warning, walk, logoGoogle } from 'ionicons/icons';
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
           <IonContent>
             <IonToggle>asdasd</IonToggle>
           </IonContent>
          
  
  
            
          </IonHeader>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Home;
  