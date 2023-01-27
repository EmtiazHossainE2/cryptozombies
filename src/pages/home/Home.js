import React from 'react'
import { Banner, Blogs, Brand, BuildZombieArmy, CodingLesson, CourseFormat, Cta, ImportanceOfToken,  OverView, Reward, RoadMap, Token } from '../../components/Home'
import './Home.css'

const Home = () => {
  return (
    <main>
      <Banner />
      <OverView />
      <CodingLesson />
      <BuildZombieArmy />
      <CourseFormat />
      <RoadMap />
      <Token />
      <ImportanceOfToken />
      <Reward/>
      <Brand />
      <Blogs />
      <Cta />
    </main>
  )
}

export default Home