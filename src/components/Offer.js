import React from 'react';
import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardTitle, IonCardContent } from '@ionic/react'

class Offer extends React.Component{
    constructor(props){
        super(props);
        this.state={
           offer:[ 
               {
                title:"New User Offer",
                image:"",
                minVal:"1000",
                desc:"Offer only on your first purchase",
                code:"1234",
                discount:"Rs. 200"
            },
            {
                title:"Monthly Subscription Offer",
                image:"",
                minVal:"500",
                desc:"Subscription available monthly and annually",
                code:"1234",
                discount:"15 %"
            },
            {
                title:"Special Offer",
                image:"",
                minVal:"1000",
                desc:"For those whop shop every week",
                discount:"Rs. 300"
            },
            {
                title:"Diwali Offer",
                image:"",
                minVal:"2500",
                desc:"Get best deals this diwali",
                code:"DIWALI2020",
                discount:"Rs. 500"
            },
            {
                title:"Holi Offer",
                image:"",
                minVal:"2500",
                desc:"Get best deals this festival of colours",
                code:"HOLI2020",
                discount:"Rs. 500"
            },
            {
                title:"Flash Sale",
                image:"",
                minVal:"5000",
                desc:"30% Off on all the products",
                code:"1234",
                discount:"Rs. 500"
            },
            {
                title:"New Year sale",
                image:"",
                minVal:"3000",
                desc:"Get best products this new year",
                code:"NYE2020",
                discount:"Rs. 300 "
            },
            {
                title:"Christmas Offer",
                image:"",
                minVal:"2000",
                desc:"Get best products this christmas",
                code:"CH2020",
                discount:"Rs. 200"
            },
        ]
        }
    }
    render(){
        return(
<IonPage>
<IonContent color="danger">
    <br />
    <br />
    <br />
    <br />
    <IonGrid>
        <IonRow>
            {this.state.offer.map(p=>{
return(
    <IonCol sizeMd="3" sizeLg="3" sizeSm="12" sizeXs="12">
        <IonCard style={{textAlign:"center"}}><br />
<IonCardTitle >{p.title}</IonCardTitle>
<IonCardContent>{p.desc}</IonCardContent>
<IonCardContent>On minimum Purchase of Rs.{p.minVal}</IonCardContent>
<IonCardContent>Get discount upto {p.discount}</IonCardContent>
<IonCardContent style={{fontWeight:"bold"}}>Coupon code: {p.code}</IonCardContent>


        </IonCard>
    </IonCol>
)
            
            })}
        </IonRow>
    </IonGrid>

</IonContent>
</IonPage>
        )
    }
}
export default Offer;