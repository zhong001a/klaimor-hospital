import React from 'react'
import './sigup.scss'
import FormSigup from '../components/FormSiup'
import Card from '../../../shared/components/UIElement/Card/Card'
const Sigup = () => {
    return (
        <div className="sigup-container">
            <Card className='sigup-card'>
                <h2 className='sigup-hearder'>SIG UP</h2>

                <FormSigup />
            </Card>
        </div>
            
        
    )
}

export default Sigup
