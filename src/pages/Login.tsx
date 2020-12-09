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
import React, { useState } from "react";
import { Route } from "react-router-dom";
import ExploreContainer from "../components/ExploreContainer";
import { pin, wifi, wine, warning, walk } from "ionicons/icons";
import "./Home.css";

const slideOpts = {
  initialSlide: 1,
  speed: 400,
};

const Home: React.FC = () => {
  const [email, setemail] = useState<string>();
  const [password, setpassword] = useState<string>();

  return (
    <IonPage>
      <IonContent class="background1" fullscreen>
        <IonHeader collapse="condense">
          <IonTitle class="text-login">Login</IonTitle>
        </IonHeader>
        <IonContent class="input">
          <IonItem>
            <IonInput value={email} placeholder="Email" class="input">
              {" "}
            </IonInput>
          </IonItem>
          <IonItem>
            <IonInput
              value={password}
              placeholder="Password"
              class="input1"
              type="password"
            >
              {" "}
            </IonInput>
          </IonItem>
          <section>
            <IonButton
              routerLink="Ac"
              class="button-login"
              fill="outline"
              color="tertiary"
              size="large"
            >
              Login
            </IonButton>
          </section>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Home;
