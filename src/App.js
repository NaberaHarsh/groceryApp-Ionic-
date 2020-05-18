import React from 'react';
import logo from './logo.svg';
import './App.css';
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
import { Redirect, Route } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import { IonRouterOutlet, IonApp, IonPage } from '@ionic/react';
import Menu from './components/Menu';

function App() {
  return (
    <IonPage>

      <IonReactRouter>
        <IonRouterOutlet>
          <Menu />
      
        </IonRouterOutlet>
      </IonReactRouter>
    </IonPage>
  );
}

export default App;
