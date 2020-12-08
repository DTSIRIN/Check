import { IonSlide, IonSlides,  IonContent, 
    IonHeader, IonPage, IonTitle, 
    IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, 
    IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, 
    IonButton,IonInput, IonText, IonRouterOutlet } from '@ionic/react';
  import React, { useState } from  'react';
  import { Route } from 'react-router-dom'
  import ExploreContainer from '../components/ExploreContainer';
  import { pin, wifi, wine, warning, walk, } from 'ionicons/icons';
  import './Home.css';
  
  
  
  const slideOpts = {
    initialSlide: 1,
    speed: 400
    
  };
  

  const Home: React.FC = () => {

    const [email, setemail] = useState<string>();
    const [password, setpassword] = useState<string>();
    const [name, setname] = useState<string>();

    return (
      <IonPage>
        <IonContent class='background1' fullscreen>
          <IonHeader collapse="condense">
          <IonTitle class="text-signup">
                    Sign up
              </IonTitle>
              
          </IonHeader>
          <IonContent class="input">
              <IonItem>
            <IonInput value={email} placeholder="Email" class="input"> </IonInput>
            </IonItem>
            <IonItem>
            <IonInput value={password} placeholder="Password" class="input1" type="password"> </IonInput>
            </IonItem>
            <IonItem>
            <IonInput value={password} placeholder="Password Again" class="input1" type="password"> </IonInput>
            </IonItem>
            <IonItem>
            <IonInput value={password} placeholder="Name" class="input1" type="password"> </IonInput>
            </IonItem>
            <section>
            <IonButton routerLink=""  class="button-login" fill="outline" color="tertiary">Sign up</IonButton>
            </section>
          </IonContent>
              
          
        </IonContent>
      </IonPage>
    );
  };
  
  export default Home;
  