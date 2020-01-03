import React, { useEffect, useState } from 'react'
import axios from 'axios'

const HousePage = props => {
  const [houses, setHouses] = useState([])
  const [houseName, setHouseName] = useState('')
  const [houseColor, setHouseColor] = useState('')
  const [houseId, setHouseId] = useState('')
  const getHouse = async () => {
    const resp = await axios.get(`https://localhost:5001/api/House`)
    setHouses(resp.data)
  }

  const sendHouseToApi = async () => {
    const resp = await axios.post('https://localhost:5001/api/House', {
      houseName: houseName,
      houseColor: houseColor,
      houseId: props.match.params.id,
    })

    console.log(resp.data)
    setHouses(prev => {
      return {
        ...prev,
        houses: [...prev.houses.concat(resp.data)],
      }
    })
  }

  useEffect(() => {
    getHouse()
  }, [])

  return (
    <>
      <section>
        <header>New House</header>
        <input
          type="text"
          value={houseName}
          placeholder="Enter a House Name"
          onChange={e => setHouseName(e.target.value)}
        />
        <input
          type="text"
          value={houseColor}
          placeholder="Enter a House Color"
          onChange={e => setHouseColor(e.target.value)}
        />
        <input
          type="text"
          value={houseId}
          placeholder="Enter a House ID #"
          onChange={e => setHouseId(e.target.value)}
        />
        <button onClick={sendHouseToApi}>Create Hogwarts House</button>
      </section>
      <div>
        <header>All Houses</header>
        {houses.map(house => {
          return (
            <>
              <h1>{house.houseName}</h1>
              <h3>{house.houseColor}</h3>
            </>
          )
        })}
      </div>
    </>
  )
}

export default HousePage
