import { useEffect, useState } from 'react'
import { db } from '../firebase'
import { doc, getDoc } from 'firebase/firestore'
import './PlansScreen.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'

const PlansScreen = () => {

    // will have to hard code values for now, having a hard time getting data from firebase
    const [products, setProducts] = useState([
        {
            name: 'Premium',
            description: '4K + HDR'
        },
        {
            name: 'Standard',
            description: '1080p'
        },
        {
            name: 'Basic',
            description: '720p'
        }
    ])

    const user = useSelector(selectUser)

    const getPricingPlanInfoFromDatabase = async () => {
        const docRef = doc(db, "products");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }

    useEffect(() => {
        // getPricingPlanInfoFromDatabase()
    }, [])

    console.log(products)

    const loadCheckout = async (priceId) => {

    }

    return (
        <div className='plansScreen'>
            {Object.entries(products).map(([productId, productData]) => {
                // add some logic to check if the users subscription is active...
                return (
                    <div key={productId} className="plansScreen__plan">
                        <div className="plansScreen__info">
                            <h5>{productData.name}</h5>
                            <h6>{productData.description}</h6>
                        </div>
                        <button
                        // onClick={() => loadCheckout(productData.prices.priceId)}
                        >Subscribe</button>
                    </div>
                )
            })}
        </div>
    )
}

export default PlansScreen