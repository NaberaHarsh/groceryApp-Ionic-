import React from 'react';
import { IonApp, IonCard, IonContent, IonGrid, IonRow, IonCol, IonPage } from '@ionic/react';


class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                {
                    id: "1",
                    image: "https://images-na.ssl-images-amazon.com/images/I/71fIsa4qnpL._SL1500_.jpg",
                    title: "Breakfast Items",
                    desc: "Healthy breakfast is what makes the day great",
                    discount: "10",
                    stock: "yes"
                },
                {
                    id: "2",
                    image: "https://i2.wp.com/ceklog.kindel.com/wp-content/uploads/2013/02/firefox_2018-07-10_07-50-11.png",
                    title: "Fruits",
                    desc: "Fresh fruits for your daily vitamin and mineral needs",
                    discount: "5",
                    stock: "yes"

                },
                {
                    id: '3',
                    image: "https://5.imimg.com/data5/BH/PL/MY-7778582/maggi-noodles-500x500.jpg",
                    title: "Ready to Eat",
                    desc: "Ready to eat food for those hungry times",
                    discount: "10",
                    stock: "no"

                },
                {
                    id: "4",
                    image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1543342866-41I7mOaXS8L.jpg",
                    title: "Toiletries",
                    desc: "All your hygiene and bathroom products",
                    discount: "20",
                    stock: "yes"

                },
                {
                    id: "5",
                    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITERUQEhAWFRUWEBIVEhUTFxcSFhUYFRUXFhUVFRUZHCggGBooGxoVITEhJSkrLi4yFx81ODMtNygtLisBCgoKDg0OGxAQGy0lICUtLSstKy8tLS0tLS0vLS0tLSstLS0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQEDBAYHAgj/xABEEAACAQIDBAcDBwoFBQAAAAAAAQIDEQQhMQUGEkETIlFhcYGhUpHBBxQjMkJysSQ0YnOSs9Hh8PEVQ1NjshYlM4Oi/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAQFAQIDBgf/xAAyEQEAAgEDAwEHAgcAAwEAAAAAAQIDBBEhBRIxQRMiMlFhcYGR4RQjM0LB0fA0obEk/9oADAMBAAIRAxEAPwDuIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAo2BYqY2nF2lUgn2OSv7jSb1j1NinjacnaNSLfYpK/uEZKz4lnZkG7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAzE+BAbei5z6LiaXAm7aPibWfboUvV818UVis8Tu64oid2vLcxXb6d5u6vd2tmtW8+8qY1+1fEOnbC7T3Y4Fniakks7X/AIt5Gtuo7/DEM9radgybpK7btKSz17kek6bknJgibTy4XjaUkT2gAAAAAAAAAAAAAAAAAAAAAAAAAAFGYkQm15rpornwJ+rt8Tz3Xrbdn5dsXqvU3kecms+XZaxTyMbTEci9u9O8JLsqP8Eew6Nbu0/5lHyxtZKls5gAAAAAAAAAAAAAAAAAAAAAAAAAAUYGq76QlSXzyFXhklGDhJcUZ9ZtW7GrsquqaWmWnfM8wk6ad7dsteob4Yjh/wDFB+dl46lBGkia7/6TJw1iVnF724hxVowjdezfwzb7jNtLWKwzXDTduG5WHXQKu5uc6tpTb5NXSilytmel6fipjwx2+vKBqJ9+Y+TYic4AAAAAAAAAAAAAAAAAAAAAAAAAAAUk8gOXb5bb+c1VCD+ip34f0pPWXh2efaee6jqvaW7K+IWukw9le6fKOw+IiqFSk6KlKcotVH9aCVsllzt6kTHmiuK1O3mfV1tSZvFjHY6VWFOEoxSpx4U0mm1y4s8+fvYzai2WsVmNohnHjrSZmPVLbm7eeHn0NR/QzevsSfPwfMndP1U0n2dvDhqsEXjujzDpcWXqrejIAAAAAAAAAAAAAAAAAAAAAAAAFGBpm/W8CjGWEpy67S6SS0ir5w8Wte5lfrtTWlZpHlL0uCbT3T4aJRPORbnlaz9F+2Whnfjhr6qxh3d5msbQxK21rfsNq32lttu3XcXeJzfzWq7tJ9FLm0vsvvtoXmg1ftI7LefRW6rT9vv1/LdblmhKgAAAAAAAAAAAAAAAAAAAAAAAEFvdt1YWhxazm+Cku+17+CWfuOGozRipvLrgxTkts5TFttybbcpNtvN3ebbZ5fNkm8zaV3SsRG0ejIijhvvBK8kbc+jGyrRt6wxDzUhn/axtt7zMMabcXxRyas01k009VY6Y77cxwbb+XVd09rfOMPGcn149Sp4rnbvWZ6TTZoy44sps+Ocd5hNEhxAAAAAAAAAAAAAAAAAAAAAAKMDknyjY2VTGOF+rSUYxXY2ryf8AXYUfUMkzk7fSFxoscRi7vWUTQ0KW3lLZlKORmsbxLSZZU8PwpZ68Sfc4uz+HvO98PZEcucW3mVi+Zxi0zLfZew+EdSahFq7vr2pN2O+LFOS3bSWlrdtd2DUStfvz/saR9XSEruTj3SxcYfZqPga5XavF+9epZ9Pzdtu30lF1ePupv8nVUXqpVAAAAAAAAAAAAAAAAAAAAAAowOL73Z43EfrX+CPPa2f59vwu9L/Rqx8FoVl45SJbFgcFCNSMZtOFSLipaKPHFulPuvmvFMscOnrS8b+Jjb9fEol72tXePMf48vGMmlDo5RaqRceNdk4pQldezKKi01zRz1F6xj7LeY/++P0ltSJ7t48f4/ZYwVOEneXFlqoqKuu+UmoxXezjp647zy2v3RxDIrUuD6dRcUuHoZJ6STurydnUdr/VVu8lZMfZ/Mnjbx9/r8/w5xPd7u+/z/70Re0MRxzlNxUXJ3airK/alyIOXL327pjbd3pSKxtEsTBVGq9Jx1VWFv2kd9HM+1qxmj+XLt56pQqgAAAAAAAAAAAAAAAAAAAAAUYHIt96HDjqv6XDL3pHnuocZpXWjnfDCzsyvGF4zhxQnHhmllJK91KL5STzIOPNWlp7o3iY2l2vS07TE7TDM6bhi6bfHGzUJaKUW75p52vmuad+132nNGOs0nmvpP8Atp2bz3eJY86sm7tuTsld55LRESctt955dIrERtC5hazjJNOMf0pRUuHvSadvLM6Yc1624mI+rW9ImOeWXVrQlKy6TE1mrKVS6hHvjDX9p2JvtKWn3d72+c+I/DjFbR8qx9ELiZO74nd3trfTLXmQ58zFuZSYiNuGTujhHVx1JJZQl0kvCH87E7p2PuzRPycNXftxT9XYUelUioAAAAAAAAAAAAAAAAAAAAAFGBzD5RsWpYiEYwXVTjKfOTX2fBX/ABKHqWWl7dnrC00ETtM7/hAUWUlo2WWzJic5mWNntiZ3Y2eRE7Sy9VsTNrhvaN78K6sfcjvOe9o234/RpFIhgVpGKumyc+Tvajp4roXBNVVbit1otZpX9nXLtaLvp2eKz2fNX67FvXudVReKlUAAAAAAAAAAAAAAAAAAAAACjEjQdr0acsRWpyV10l8+1pPJ8mrniesRbFq5tWfO0p2C0xWJhgS3aWtOp5TV/VFdGsn+6P0Ta6qf7oUhsCtH/LjNd0nH4olYs9PM13/E/wCGZ1NJ9dlqrsmtyoyXhLiMXzYpnjhvXPT5vNPZVbnQlLz4fiKZ8Nfi2knNT5vVXYld2tQUV97Xxbkze+ek8xXaPyxGopHq8f8AT0/tyjH/AOmc/wCKpHiGJ1MejO2BgYU8TSjG7bqK8nr1U5WXuJXTsk5tVTfwiajJa1Z3dIR7RWqmQAAAAAAAAAAAAAAAAAAAABRgcv3z2qsPtPhbbhUpU3UXKH2Yzj7nfu8Ci6rofbxNo8x4+v0ZjUxjtET6pnDPsZ4i0TCw3SNCvNaTZ2w6rLijalpj7NJrWfMLk603q7mcuqy5fjnf9IIrEKRrTWmRpi1GXFPuzt+CYiVnEYmcsnNs6ZdXnyxte8zBFYhG4hrvbOVYmfLpDH2Pd4yh9+Tt/wCuZd9G2/iaueb4HQ0e1QVTIAAAAAAAAAAAAAAAAAAAAAAci+VCnF49KSyeHp6ZS1nmu15LX+a0siaiImdpSO6uJc6Eb/WinTl4wyT/AGeE+f8AVMHsdTaPSef1WWlyd+KJn04T6SK+Jn0SGM6XSOpwXTpuMZu8UruKksnrk1zWpd6LpmbUYu+u2314ccueaTtCmDjwqfFN3jJqfFlw2SftNWs1miDrMF8eX2UxyYre7vMvM8bFpWu7z4F1WutndXfYk35GP4HNWs3tXiGa5qzO0IqrWnKVOcValKKcZXzbaq36q+4tdFbm8rWemTg0Vst43me3b6cw0rk77xt4ZOxvzzD/AKyX7uZr0bnUw7ZfhdER7NCVMgAAAAAAAAAAAAAAAAAAAAAwOS/Ka/8AuEba/N6WWf8AqTtp3287c9dJRM/xLu5kX0Lk1bjrVJLwTUL5Jc4vkjxHXLxbVTt6REJ2hiYw8+sy2aJTTG0JiJdaiqG0HiIOdL55SjOMcm10WHUXqtJWfke66R2RoI7vHKuz/FLLxdCi3DDqjdLA9LOcW4zVOH1YRS1lJ3V+wsMmDBfaJr6efVziZ8brOJoSqzhiJ06jpypYdQw3Fw9FPEO1RyceyN2+13M5NPTLMTfmvy/2R892Fjm+mpxUbx6KEuJWUVGnGtSSte925x9zIXXb1rpvZ+s7bfiYlJ00e9uvbH/PMP8ArJfuplF0aP8A9MJOX4XRkexQ1TIAAAAAAAAAAAAAAAAAAAAAMDmPyjYGNbGRi5ODjQhacVfqylJSi/HLzKTX6q+lzd1ed48f5bTgjLXafLL2ZTUYxhHSMVGPgu3vPG5rze82t5lMisVjaEpE5csorGbGnUdSEa6hRryhKvDg4pOcFFKVOd7R+rG909C60fVLY8E4Jrv8pRsuCLy8vAYyE4YmOJpzqU4Kkozg6VOdFXvGpJOTU7/aStloWmDrNpvF7U8ccOc6fnfdhSqY1Vp1Y4zC3rWjVg+JxpcLaj0PtNRbzdrt6E6Op5drW9nPPj92vso8bveH2XCheMZTley4qsuOSirtRTsko3cnZc5M8zrdVlz2jv8ATwl4qRWOGRsd/luH/WT/AHciX0X/AMmPtLOX4XR0ewhDVMgAAAAAAAAAAAAAAAAAAAAABzvfq6xkZW1owj3PrTyPO9Zje9fskYfDG2HOTbi75LK/u+B5nU1iNph2TyI0CK2jvNhqEuCpO0lyScnr2RTfvseh0PSL3iuS8xETz+7ja3pCHqb0YetObhNVZXXQ0ZQqKEEs+J3g06jd+s9Eklzb9Lp9PgwRM8bzP2cZ75a7vBvTj+F05wdNO2dnmr6KWmehJ9v3eJj8EY9vCY3M2i62Flf/ACq7prnlwRml5cTXkeW6zgit4vEeUjHZPbF/PaH35/u5HLov9ePtLOX4XR0evRFTIAAAAAAAAAAAAAAAAAAAAAAc/wB/E/nULK/0Kuu20m8u8871r4q/ZIweGNs2unK1uV0+3xR5bLjmK7u6aicqxyxLWt4Ny4Va0cRx8MZS+mgm7vLJwfJN5Ncr3T5HsLau2HR93G8bRG3y+v1caRvbtTGEpRpQ6KjTjTiuUFZfxfmedvq8uSd7ylxirHK3jaTlBqTyas/M0x57RzEt4mvjZDbFT6OpKTu3Omm9LuNOyb73Hgfmek6zM2w0vMbTtG/3mEKkRF5iElsNfltD70/+D1IPQ/6/4ltm+F0ZHr0RUAAAAAAAAAAAAAAAAAAAAAABz7f786gv9n14nZp8mee61xNfskYfDH2VO7zSvzayvyzWqfoeWzx6w7pqBinmGsrG0pWUZdiatotU8v0vgmX+PD/E6WaRxMTH/cOdbdt1mniP0Xm8s48/MrJ0E2nbvrx9/wDSRe3HMLWOrtpxys1yd79sW9F5XuTNP0+tIi9p35+0fpPLj3+9sxMHhYUsPGMVa8pNpdrdvRJLwRJ1+SMmkrfffef2Jr25Jhe2Cvy2j4z/AODOXQ/6/wCDN4dFR69EVAAAAAAAAAAAAAAAAAAAAAAAaDvxH8rh+pyXtdZ3X9dh5zrc81+yTg8MXZ8I5NZtJq/NX5M8vlmeYd0zAxRpK5KKkuFvJtebTulbmXXTdTFJmJ8eHHJXdG1NlyislCUbaqLv4dxZ6jJfHaMsWtNZ+UVmPq2pNLRtaI3W8RGbSVm3yy08EtConJOaZphjm3nnedvlPyhJpWlebSx5x4fo73cc5NaXedl6HPWzWla44nfbzP1c/ae0vNlzYMH89ou+S47rtcou34epM6HP86fs0zfC6Ij1yIqAAAAAAAAAAAAAAAAAAAAABRgcp322m/8AEZQk+pCnCCvom1xNvzdig6rXvnaPRPwYt8e8MvZju1K/J3u+svBr60fH3nlc8bRt/wB+0s+PKcizhHPDWVvHLqeZIx90fFLnkjeGF/i1WLSumn9Vt2byz5Fpg1OTHG1LePp80SZn1hax206k48MZJXefDm7HTJqstqe9bj8QzEzvwsYahKEW5O1+3XxfeVeXJ6R4lKxU2R+A224Y6jGnnHpUpv2nPq28rl30jF7O8Xt5nh3vj/lzMuuI9SrlQAAAAAAAAAAAAAAAAAAAAAKMDh+9tdS2hiGtOl4fOKSfqUGutvkldaWNscK7OxMqduCWS5S0V9bdhV5cVMnl1vjrLZdn7YvlO0e95r0I1emxadosjZMMxzCQntGKV2427rv0sYy9NyR8p/LlGOZ9Fqe06cnrGP3oS9LxM00+W+SbzG0T+jE6eXmtiOreEuLPLhSgvOUrEy3TslqeYa0xxFuUHtSpLhvOpGN1lGDblLtztl6HSnT6YI7r23+STjiJniPy1mGK4K1GXKNWEvJSTJWnt78S7Za70mH0HFnoVEqZAAAAAAAAAAAAAAAAAAAAAHitPhi5dkW/crmJ8EPnl1nUlKq9ZzlN+Mnf4nm8872mXoMcbREJHDPqvyIfiJdvVI4PESpu8ZNeDt/c2pe1J3iXO1It5ZFfaFSWsvSP4pGcuoyW43YrhpHOyk8ZU4FDjaVnkrLt52uZnPlmIiZY9lTeZ2eNoY6ckouTaWVr9ncvxNs2e8xFd2ceOIndF1XfXsyOUT38y32iPCIx8LZkrD8mlne92sQ6mEoVHrKhTb8eFXPSUneIlQXja0wkzZqAAAAAAAAAAAAAAAAAAAAA8zV1YDgG0sL0OIq0PYqyivC/V9LHnNTSa3mF9htvSJZVFZECfDuyrGk8SzD3TTYiN2Zl7kstdGbbbx5aLFaFzPb3M7seay+JtEccNZnlHYim5uMFrKUYrnnJ2JWn5vEOeSdo3d/wGFVKnClHSEIwXhFWPSxG0bKGZ3ndkGWAAAAAAAAAAAAAAAAAAAAAFGBofyi7r9InjKSbqRiukilfjiuaXtL8EQNZpu+O6PKbpNR2+7bw5/h66cVZ8/gUF67Qt/VJxaY7az5Y8LslG/Vd1lqrW8c2YtWm/uyxEytyay8X8DntEcM8qYqSvZZaXztkd7TXfaGtfG8sDEYhJNaL+d/4GYnfhmKts+TjdrjksdWTsm3Qi+b/ANR93Z7y40Ol7Y77K3WajffHX8umJFmr1QAAAAAAAAAAAAAAAAAAAAAAFGgNS3k3FoYhupStRqPNuKvGbftRTWfeiHn0VMvMcSl4NZfHxPMNTrbnY+l9lVF/tSUvSfCytv07LXwn11uK30YNbZ+KhnLDVV405W9MiNbS5on4Z/R2jPin1j9VmGDxEnZUKrfdTm/gc66PNP8AbLac2KI+KGfht1cdVdlRlBe1Vagvcm5ehKx9PzT5/wDbjbW4a+u7adg/J7RpvjxLVaVvq2+jT/GXn7izwaGmPmeZV+bW2vxXhukYJZJWXYTtkN6AAAAAAAAAAAAAAAAAAAAAAAAAFGBRms+WPQNmfRVmLeGIeTWGz2jaGAyAAAAAAAAAAAAAf//Z",
                    title: "Fresh to Drink",
                    desc: "Fresh and jiucy",
                    discount: "20",
                    stock: "no"

                }
            ]
        }
    }

    render() {
        return (
            <IonPage>
                <IonContent >
                    <IonCard color="danger" style={{ color: 'black', fontSize: '16px', fontWeight: "bold" }}>
                        <IonGrid>
                            <IonRow>
                                <IonCol size="1">Id</IonCol>
                                <IonCol size="3">Image</IonCol>
                                <IonCol size="2">Name</IonCol>
                                <IonCol size="3">Description</IonCol>
                                <IonCol size="1">Discount</IonCol>
                                <IonCol size="2">In Stock</IonCol>

                            </IonRow>
                        </IonGrid>
                        {this.state.categories.map(p => {
                            return (
                                <IonCard style={p.id % 2 ? { backgroundColor: "white" } : { backgroundColor: "ghostwhite" }}>
                                    <IonGrid>
                                        <IonRow>
                                            <IonCol size="1">{p.id}</IonCol>
                                            <IonCol size="3"><img src={p.image} width="80" height="80" /></IonCol>
                                            <IonCol size="2">{p.title}</IonCol>
                                            <IonCol size="3" >{p.desc}</IonCol>
                                            <IonCol size="1" >{p.discount}</IonCol>
                                            <IonCol size="2" >{p.stock}</IonCol>


                                        </IonRow>
                                    </IonGrid>

                                </IonCard>)
                        })}
                    </IonCard>
                </IonContent>
            </IonPage>
        )
    }
}
export default Category;