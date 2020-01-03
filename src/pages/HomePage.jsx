import React, { useEffect, useState } from 'react'
import axios from 'axios'

const HomePage = () => {
  const [houses, setHouses] = useState([])
  const getHousesData = async () => {
    const resp = await axios.get('https://localhost:5001/api/House')
    setHouses(resp.data)
  }
  useEffect(() => {
    getHousesData()
  }, [])

  return (
    <>
      <header>All Hogwarts Houses</header>
      {houses.map(house => {
        return (
          <>
            <h3>{house.HouseName}</h3>
          </>
        )
      })}
    </>
  )
}

export default HomePage
