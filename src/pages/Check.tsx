import {
    IonSlide,
    IonSlides,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonIcon,
    IonLabel,
    IonButton,
    IonInput,
    IonText,
    IonRouterOutlet,
    IonTab,
    IonBackButton,
    IonSearchbar,
    IonGrid,
    IonAlert,
    IonMenu,
  } from "@ionic/react";
  import React, { useState } from "react";
  import { Route } from "react-router-dom";
  import ExploreContainer from "../components/ExploreContainer";
  import {
    pin,
    wifi,
    wine,
    warning,
    walk,
    logoGoogle,
    star,
    add,
    chevronBack
  } from "ionicons/icons";
  import "./Home.css";
  
  const slideOpts = {
    initialSlide: 1,
    speed: 400,
  };
  
  const Home: React.FC = () => {
    const [showAlert1, setShowAlert1] = useState(false);
    return (
      <IonPage>
        <IonContent class="background1" fullscreen>
          <IonHeader>
          <IonToolbar class="background">
            <IonButton class="button-logout1" routerLink="home" slot="end">
              Logout
            </IonButton>
            <IonButton slot="start" class="button-back" routerLink="class">
            <IonIcon  icon={chevronBack} />
            </IonButton>
          </IonToolbar>
          <IonSearchbar></IonSearchbar>
          <IonTitle class="text-check1">Check in Today</IonTitle>
          <IonButton class="button-check1" fill="outline" size="large" onClick={() => setShowAlert1(true)}>
                Check
          </IonButton>
          <IonAlert
          isOpen={showAlert1}
          onDidDismiss={() => setShowAlert1(false)}
          header={'Complete Check In'}
        />
          </IonHeader>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Home;
  