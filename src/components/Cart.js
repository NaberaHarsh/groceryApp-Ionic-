import React from 'react';
import { IonPage, IonContent, IonCard,IonCardContent, IonIcon } from '@ionic/react';
import { cart } from 'ionicons/icons'

class Cart extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <IonPage>
                <IonContent color="danger">
    <br />
    <br />
    <br />
                    <IonCard style={{textAlign:"center", paddingTop:'180px', paddingBottom:'180px'}}>
                    <IonIcon icon={cart} style={{height:'60px', width:"60px"}}></IonIcon>
                        <IonCardContent style={{fontSize:"24px"}}>Your cart is empty</IonCardContent>
                    </IonCard>
                </IonContent>
            </IonPage>
        )
    }
} 
export default Cart;