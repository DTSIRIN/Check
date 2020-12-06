import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton,IonInput } from '@ionic/react';
import React from  'react';

import ExploreContainer from '../components/ExploreContainer';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import './Home.css';


const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
            <IonCardTitle>PEWPEW</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in awhile,
            and climb a mountain or spend a week in the woods. Wash your spirit clean.
      </IonCardContent>
        </IonCard>

        <IonCard>
          <IonItem>
            <IonIcon icon={pin} slot="start" />
            <IonLabel>ion-item in a card, icon left, button right</IonLabel>
            <IonButton fill="outline" slot="end">View</IonButton>
          </IonItem>

          <IonCardContent>
            This is content, without any paragraph or header tags,
            within an ion-cardContent element.
           </IonCardContent>

          <IonItem>
            <IonLabel position="stacked">Email</IonLabel>
            <IonInput placeholder="Email"> </IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Password</IonLabel>
            <IonInput placeholder="Password" type="password"> </IonInput>
          </IonItem>
        </IonCard>
        </IonHeader>
       
      </IonContent>z
    </IonPage>
  );
};

export default Home;
