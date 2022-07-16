import React from 'react'
import HeaderTopBar from '../../components/HeaderTopBar'
import Header from '../../components/Header'
import TechArea from "../../components/TechArea"
import Testing from "../../components/Testing"
import Footer from '../../components/Footer'

export default function tech() {
  return (
    <div>
      <HeaderTopBar/>
      <Header />
      <TechArea/>
      <Testing />
      <Footer/>
    </div>
  )
}
