import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/Header'
import Table from './components/Table'
import Footer from './components/Footer'
// import Santander from './components/Santander'
import Navbar from './components/Navbar'

function App() {
    return (
        <div>
            <Header />
            <Navbar />
            <Table />
            <Footer />
        </div>
    )
}

export default App
