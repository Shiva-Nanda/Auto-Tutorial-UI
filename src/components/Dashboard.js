import React, { useState} from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { useAuth, getEmail } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const email = getEmail()
    // console.log("email" + email)
    const navigateTo = useNavigate()

    async function handleLogout() {
        setError('')

        try {
            await logout()
            // console.log("dashnoard " + currentUser)
            navigateTo('/login')
        } catch {
            // console.log("failed to logout dashboard")
            setError("Failed to logout")
        }
    }

  return (
    <>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'> Profile</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                <strong>Email:</strong> {currentUser.email}
            </Card.Body>
        </Card>
        {/* <div className='w-100 text-center mt-2'>
            <Button variant='link' onClick={handleLogout}>
                Log Out
            </Button>
        </div> */}
    </>
  )
}
