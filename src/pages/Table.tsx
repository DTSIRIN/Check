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
  } from "ionicons/icons";
  import "./Home.css";
  
  const slideOpts = {
    initialSlide: 1,
    speed: 400,
  };
  
  const Home: React.FC = () => {
    
  
    return (
      <IonPage>
        <IonContent class="background1" fullscreen>
          <IonHeader>
          <IonToolbar class="background">
            <IonButton class="button-logout" routerLink="home">
              Logout
            </IonButton>
          </IonToolbar>
          <IonSearchbar></IonSearchbar>
            
          </IonHeader>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Home;
  