import React from 'react'
import './sigup.scss'
import DataUserForm from '../components/form-data-user'
import Card from '../../../shared/components/UIElement/Card/Card'
const DataUser = () => {
  return (
    <div className="sigup-container">
        <Card className='sigup-card'>
            <h2 className='sigup-hearder'>Personal Data</h2>

            <DataUserForm />
        </Card>
    </div>

  )
}

export default DataUser
