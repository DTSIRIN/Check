import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Ac from './pages/Ac';
import Class from './pages/Class';
import Add from './pages/Add';
import Check from './pages/Check';
import Table from './pages/Table';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';


const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/home" component={Home} exact={true} />
        <Route path="/Login" component={Login} exact={true}/>
        <Route path="/Signup" component={Signup} exact={true}/> 
        <Route path="/Ac" component={Ac} exact={true}/>
        <Route path="/Class" component={Class} excat={true}/>
        <Route path="/Add" component={Add} excat={true}/>
        <Route path="/Check" component={Check} excat={true}/>
        <Route path="/Table" component={Table} excat={true}/>
        <Route exact path="/" render={() => <Redirect to="/home" />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
