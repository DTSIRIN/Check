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
} from "@ionic/react";
import React from "react";
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
} from "ionicons/icons";
import "./Home.css";

const slideOpts = {
  initialSlide: 1,
  speed: 400,
};

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent class="background" fullscreen>
        <IonHeader>
          <IonCard class="card-check">
            <IonCardHeader>
              <IonCardSubtitle></IonCardSubtitle>
              <IonCardTitle class="text-check">CHECK!</IonCardTitle>
            </IonCardHeader>
          </IonCard>
          <IonLabel class="label">
            <section>
              <IonButton routerLink="Login" expand="block" class="button-home">
                Login
              </IonButton>
            </section>
            <section>
              <IonButton routerLink="Signup" expand="block" class="button-home">
                Sign Up
              </IonButton>
            </section>
          </IonLabel>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Home;
