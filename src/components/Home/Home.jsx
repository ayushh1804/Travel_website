import React from 'react'
import video from "../../assets/Blue.mp4"
const Home = () => {
  return (
    <section className="home">
      <div className="overlay"></div>
    <video src={video} muted autoPlay loop type="video/mp4" height='300'></video>
    </section>
  )
}

export default Home