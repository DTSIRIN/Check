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
        <IonContent class='background1' fullscreen>
          <IonHeader collapse="condense">
          </IonHeader>
          
              <IonTitle class="text-login">
                    Login
              </IonTitle>
          
        </IonContent>
      </IonPage>
    );
  };
  
  export default Home;
  