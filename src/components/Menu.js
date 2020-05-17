import React from 'react';
import { IonButton,IonContent,IonIcon,IonLabel,IonButtons,IonMenuButton, IonApp, IonHeader, IonToolbar, IonTitle, IonMenu, IonItem, IonList } from '@ionic/react';
import { home, layers, list, cart, flame } from 'ionicons/icons'


class Menu extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return(
<IonApp>
   
    <IonMenu menuId="main-menu" side="start" contentId="main-content">
        <IonHeader>
            <IonToolbar>
                <IonTitle>
                    Grocery Dashboard
                </IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonList>
            <IonItem routerLink="/dashboard">
    <IonIcon icon={home} slot="start"></IonIcon>
<IonLabel>Home</IonLabel>
</IonItem>
      <IonItem routerLink="/product">
      <IonIcon icon={list} slot="start"></IonIcon>
      <IonLabel>Products</IonLabel>
      </IonItem>
      <IonItem routerLink="/category">
      <IonIcon icon={layers} slot="start"></IonIcon>
      <IonLabel>Category</IonLabel>
      </IonItem>
      <IonItem routerLink="/cart">
      <IonIcon icon={cart} slot="start"></IonIcon>
      <IonLabel>Cart</IonLabel>
      </IonItem>
      <IonItem routerLink="/offer">
      <IonIcon icon={flame} slot="start"></IonIcon>
      <IonLabel>Offer</IonLabel>
      </IonItem>
            </IonList>
        </IonContent>

    </IonMenu>

    <div id="main-content">
<IonHeader>
  <IonToolbar>
    <IonButtons slot="start">
      <IonMenuButton></IonMenuButton>
    </IonButtons>
<IonTitle>Product</IonTitle>
  </IonToolbar>
</IonHeader>

</div>
</IonApp>

        )
    }
}
export default Menu;