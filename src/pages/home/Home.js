import React from 'react'
import Footer from '../../components/Common/Footer/Footer'
import Navbar from '../../components/Common/Navbar/Navbar'
import { Banner, Blogs, Brand, BuildZombieArmy,  CodingLesson, CourseFormat, Cta, ImportanceOfToken, NFTRewards, OverView, RoadMap, Token, Victory } from '../../components/Home'

const Home = () => {
  return (
    <main>
      <Navbar />
      <Banner />
      <OverView />
      <CodingLesson />
      <BuildZombieArmy />
      <CourseFormat />
      <RoadMap />
      <Token />
      <ImportanceOfToken />
      <NFTRewards />
      <Victory />
      <Brand />
      <Blogs />
      <Cta />
      <Footer />
    </main>
  )
}

export default Home