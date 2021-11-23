import { Link } from '@material-ui/core'
import React from 'react'
// import { Box } from './FooterStyles'
// import Santander from './Santander'

const Footer = () => {
    return (
        <div style={{
            backgroundColor: "black", Height:'70px',textAlign: 'center',
            marginTop: '2px',
            maxWidth: '100%',
            minHeight:'100px',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'columm'
        }}>
            <span
                style={{
                    color: 'blue',
                    backgroundColor: 'yellow',
                    textAlign: 'center',
                    marginTop: '2px',
                    maxWidth: '40%',
                    minHeight:'70px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                }}
            >
                <Link to={"href=wwww.santander.com.br"} >
                santander
                </Link>
            </span>
        </div>
    )
}
export default Footer
