import React from 'react';
import { IonButton, IonContent, IonIcon, IonLabel, IonButtons, IonMenuButton, IonSearchbar, IonApp, IonHeader, IonToolbar, IonTitle, IonMenu, IonItem, IonList, IonRouterOutlet, IonMenuToggle } from '@ionic/react';
import { home, layers, list, cart, flame } from 'ionicons/icons'
import { Redirect, Route } from 'react-router-dom';
import Dashboard from './dashboard';
import Product from './Product'
import Category from './Category'
import Offer from './Offer';
import Cart from './Cart'

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <IonApp>
<IonRouterOutlet>
<Route path="/dashboard" component={Dashboard} />
          <Route path="/product" component={Product} />
          <Route path="/category" component={Category} />
          <Redirect exact from="/" to="/dashboard" />
          <Route path="/offer" component={Offer} />
          <Route path="/cart" component={Cart} />

          

</IonRouterOutlet>
                <IonMenu menuId="main-menu" side="start" contentId="main-content" swipeGesture={true} >
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle>
                                Grocery Dashboard
                </IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent>
                        <IonList>
                            <IonMenuToggle>
                            <IonItem routerLink="/dashboard" >
                                <IonIcon icon={home} slot="start"></IonIcon>
                                <IonLabel>Home</IonLabel>
                            </IonItem>
                            <IonItem routerLink="/product" >
                                <IonIcon icon={list} slot="start"></IonIcon>
                                <IonLabel>Products</IonLabel>
                            </IonItem>
                            <IonItem routerLink="/category" >
                                <IonIcon icon={layers} slot="start"></IonIcon>
                                <IonLabel>Category</IonLabel>
                            </IonItem>
                            <IonItem routerLink="/offer">
                                <IonIcon icon={flame} slot="start"></IonIcon>
                                <IonLabel>Offer</IonLabel>
                            </IonItem>
                            <IonItem routerLink="/cart">
                                <IonIcon icon={cart} slot="start"></IonIcon>
                                <IonLabel>Cart</IonLabel>
                            </IonItem>
                            
                            </IonMenuToggle>
                        </IonList>
                    </IonContent>

                </IonMenu>

                <div id="main-content">
                    <IonHeader>
                        <IonToolbar color="danger">
                            <IonButtons slot="start">
                                <IonMenuButton></IonMenuButton>
                            </IonButtons>
                            <IonTitle>Grocery Store</IonTitle>
                            <IonSearchbar slot="secondary" style={{ width: 200 }} showCancelButton="focus" cancelButtonText="Custom Cancel" animated={true}></IonSearchbar>
                        </IonToolbar>
                    </IonHeader>

                </div>
                
            </IonApp>

        )
    }
}
export default Menu;