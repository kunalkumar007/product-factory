import React from 'react'
// import Navbar from './home/navbar/navbar'
import Banner from './home/banner/banner'
import About from './home/about/about'
import Category from './home/category/category'
import Questions from './home/faq/Questions'
import Footer from './footer/footer'
import Mailing from './home/mailing/mailing'

export default function Home() {
    return (
        <div className="header">
            {/* <Navbar /> */}
            <Banner/>
            <About/>
            <Category/>
            <Mailing/>
            <Questions/>
            <Footer/>
        </div>
    )
}
