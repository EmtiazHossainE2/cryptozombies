import React from 'react'
import { Banner, Blogs, Brand, BuildZombieArmy,  CodingLesson, CourseFormat, Cta, ImportanceOfToken, NFTRewards, OverView, RoadMap, Token, Victory } from '../../components/Home'

const Home = () => {
  return (
    <main>
      <Banner />
      <OverView />
      <CodingLesson />
      <BuildZombieArmy />
      <CourseFormat />
      {/* <RoadMap /> */}
      <Token />
      <ImportanceOfToken />
      <NFTRewards />
      <Victory />
      <Brand />
      <Blogs />
      <Cta />
    </main>
  )
}

export default Home