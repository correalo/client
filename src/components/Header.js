import React from 'react'

function Header() {
    return (
        <header>
            <div className="titulo" style={{ backgroundColor: 'black' }}>
                <h1 style={{ color: 'yellow' }}>
                    {' '}
                    Cirurgias com Dr Eduardo Yassushi{' '}
                </h1>
                <span style={{ color: 'yellow' }}> CRM 90.784 </span>
            </div>
        </header>
    )
}

export default Header
