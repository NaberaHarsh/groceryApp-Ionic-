import React from 'react';
import { IonApp, IonContent, IonCardHeader, IonCardContent, IonCardTitle, IonCard, IonGrid, IonRow, IonCol, IonHeader, IonToolbar, IonTitle, IonButtons, IonPage } from '@ionic/react';


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardItems: [
                {
                    title: "Total Products",
                    count: "15",
                    image: "https://previews.123rf.com/images/monticello/monticello1401/monticello140100062/25073631-composition-with-variety-of-grocery-products-isolated-on-white.jpg"
                },
                {
                    title: "Total Categories",
                    count: "5",
                    image: "https://pngimage.net/wp-content/uploads/2018/05/category-icon-png-9.png"
                },
                {
                    title: "Total Orders",
                    count: "100",
                    image: "https://cdn3.vectorstock.com/i/1000x1000/38/32/paper-shopping-bag-full-of-groceries-products-vector-15293832.jpg"
                },
                {
                    title: "Total Users",
                    count: "1",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png"
                },

            ],
            graphs: [
                {
                    title: "Monthly Orders",
                    image: "https://datavizproject.com/wp-content/uploads/2015/10/1-Line-Chart.png"
                },
                {
                    title: "Sales Report",
                    image: "https://www.mathsisfun.com/data/images/bar-graph-fruit.gif"
                },
                {
                    title: "Most Selling Product",
                    image: "https://www.spreadsheetweb.com/wp-content/uploads/2019/04/pie-chart-excel-1080x675.jpg"
                },

            ]
        }
    }
    render() {
        return (
            <IonPage>
                 <IonContent color="danger">
                 <br />
                <br />
                <br />
                    <IonGrid>
                        <IonRow>
                            {this.state.cardItems.map(p => {
                                return (
                                    <IonCol sizeMd="3" sizeLg="3" sizeSm="12" sizeXs="12">
                                        <IonCard>
                                            <IonGrid>
                                                <IonRow>
                                                    <IonCol >
                                                        <IonCardHeader>
                                                            <IonCardTitle>{p.title}</IonCardTitle>
                                                            <IonCardContent>
                                                                {p.count}
                                                            </IonCardContent>
                                                        </IonCardHeader>
                                                    </IonCol>
                                                    <IonCol>
                                                        <img src={p.image} height="130px" width="150px" />
                                                    </IonCol>
                                                </IonRow>
                                            </IonGrid>



                                        </IonCard>
                                    </IonCol>)
                            })}
                        </IonRow>
                    </IonGrid>

                    <IonCard>
                        <IonGrid>
                            <IonRow>
                                {this.state.graphs.map(e => {
                                    return (
                                        <IonCol sizeMd="4" sizeLg="4" sizeSm="12" sizeXs="12">
                                            <IonCard>
                                                <IonCardTitle style={{textAlign:"center"}} >{e.title}</IonCardTitle>
                                                <br ></br>
                                                <img src={e.image} height="350px" width="400px" />
                                            </IonCard>
                                        </IonCol>

                                    )
                                })}
                            </IonRow>
                        </IonGrid>
                    </IonCard>
                </IonContent>

            </IonPage>
        )
    }
}
export default Dashboard;