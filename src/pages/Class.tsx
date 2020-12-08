import { IonSlide, IonSlides,  IonContent, 
    IonHeader, IonPage, IonTitle, 
    IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, 
    IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, 
    IonButton,IonInput, IonText, IonRouterOutlet, IonTab, IonBackButton } from '@ionic/react';
  import React from  'react';
  import { Route } from 'react-router-dom'
  import ExploreContainer from '../components/ExploreContainer';
  import { pin, wifi, wine, warning, walk, logoGoogle,star } from 'ionicons/icons';
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
          <IonToolbar>
    <IonButton slot="start">
      <IonBackButton defaultHref="/" />
    </IonButton>
    
  </IonToolbar>
            
          </IonHeader>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Home;
  