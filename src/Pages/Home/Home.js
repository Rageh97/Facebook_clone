import React from 'react'
import Header from '../../Components/Header/Header'
import HomeLeftSide from '../../Components/HomeLeftSide/HomeLeftSide'
import HomeMid from '../../Components/HomeMid/HomeMid'
import HomeRightSide from '../../Components/HomeRightSide/HomeRightSide'

const Home = () => {
  return (
    <>
    
    <div className="container-fluid">
      <div className="row">
        <HomeLeftSide/>
        <HomeMid/>
        <HomeRightSide/>
      </div>
    </div>
    </>
  )
}

export default Home