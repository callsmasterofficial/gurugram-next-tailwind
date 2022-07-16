import React from 'react'
import HeaderTopBar from '../../components/HeaderTopBar'
import Header from '../../components/Header'
import TechArea from '../../components/TechArea'
import Footer from '../../components/Footer'
import TechAreaTile from '../../components/TechAreaTile'

export default function tech() {
  return (
    <div>
      <HeaderTopBar/>
      <Header />
      <TechArea/>
      <TechAreaTile/>
      <Footer/>
    </div>
  )
}
