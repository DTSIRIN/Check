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
  const [showAlert1, setShowAlert1] = useState(false);
  const [SubN, setSubN] = useState<string>();
  const [SubID, setSubID] = useState<string>();

  return (
    <IonPage>
      <IonContent class="background1" fullscreen>
        <IonHeader>
          <IonCard class='add-card'>
            <section>
              <IonItem>
                <IonInput placeholder="Subjectname" value={SubN} />
              </IonItem>
            </section>
            <section>
              <IonItem>
                <IonInput placeholder="Subjectid" value={SubID}/>
              </IonItem>
            </section>
            <IonButton class="text-create" size="large" routerLink="Class">
                Create
          </IonButton>
          </IonCard>
          
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Home;
