import React, { useEffect, useState } from 'react'
import axios from 'axios'

const HousePage = props => {
  const [houses, setHouses] = useState({
    houseName: '',
    houseColor: '',
  })

  const getHouse = async () => {
    const resp = await axios.get(`https://localhost:5001/api/house`)
    setHouses(resp.data)
    console.log(resp.data)
  }

  // const sendHouseToApi = async () => {
  //   const resp = await axios.post('https://localhost:5001/api/house', {
  //     houseName: houseName,
  //     houseColor: houseColor,
  //     houseMotto: houseMotto,
  //     houseId: parseInt(props.match.params.id),
  //   })

  //   setHouses(prev => {
  //     return {
  //       ...prev,
  //       houses: [...prev.houses.concat(resp.data)],
  //     }
  //   })
  // }

  useEffect(() => {
    getHouse()
  }, [])

  return (
    <div>
      <h1>Name: {houses.houseName}</h1>
      <h2>Color: {houses.houseColor}</h2>
      <button>Create House</button>
    </div>
  )
}

export default HousePage
