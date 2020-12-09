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
  IonRow,
  IonCol
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
  const [showAlert1, setShowAlert1] = useState(false);

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
    <IonRow>
      <IonCol>
          <IonButton class="add" routerLink="add">
            <IonIcon icon={add} size="large"/>
          </IonButton>

          </IonCol>
          <IonCol>
          <IonButton class="add" routerLink="check">
            977-341
          </IonButton>
          </IonCol>
          <IonCol>

          </IonCol>
          </IonRow>

        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Home;
