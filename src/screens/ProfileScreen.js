import React from 'react'
import './ProfileScreen.css'
import Nav from '../Nav'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'
import PlansScreen from './PlansScreen'
import { useNavigate } from 'react-router-dom'

const ProfileScreen = () => {
    const user = useSelector(selectUser)
    const navigate = useNavigate()
    return (
        <div className='profileScreen'>
            <Nav />
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg" alt="" />
                    <div className='profileScreen__details'>
                        <h2>{user.email}</h2>
                        <div className="profileScreen__plans">
                            <h3>Plans (Current Plan: )</h3>
                            <PlansScreen />
                            <button onClick={() => {
                                auth.signOut()
                                navigate('/')
                            }} className='profileScreen__signOut'>Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen