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
import { pin, wifi, wine, warning, walk, logIn } from "ionicons/icons";
import "./Home.css";
import { loginUser} from '../firebaseconfig'

const slideOpts = {
  initialSlide: 1,
  speed: 400,
};

const Home: React.FC = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  async function login() {
   const res = await loginUser(username, password);
   console.log(`${res ? 'Login success' : 'Longin failed'}`)
  }
  return (
    <IonPage>
      <IonContent class="background1" fullscreen>
        <IonHeader collapse="condense">
          <IonTitle class="text-login">Login</IonTitle>
        </IonHeader>
        <IonContent class="input">
          <IonItem>
            <IonInput
              placeholder="Email"
              class="input"
              onIonChange={(e: any) => setUsername(e.target.value)}
            />
          </IonItem>
          <IonItem>
            <IonInput
              placeholder="Password"
              class="input1"
              type="password"
              onIonChange={(e: any) => setPassword(e.target.value)}
            />
          </IonItem>
          <section>
            <IonButton
              routerLink="Ac"
              class="button-login"
              fill="outline"
              color="tertiary"
              size="large"
              onClick={login}
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
