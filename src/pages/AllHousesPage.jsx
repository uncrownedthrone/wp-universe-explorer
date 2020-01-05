import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AllHousesPage = () => {
  const [houses, setHouses] = useState([])
  const [houseName, setHouseName] = useState('')
  const [houseColor, setHouseColor] = useState('')

  const getHouse = async () => {
    const resp = await axios.get(`https://localhost:5001/api/house`)
    setHouses(resp.data)
  }

  // const sendStudentToApi = async props => {
  //   const resp = await axios.post('https://localhost:5001/api/house', {
  //     houseColor: houseColor,
  //     houseName: houseName,
  //     houseId: props.match.params.id,
  //   })

  //   setHouses(prev => {
  //     return {
  //       ...prev,
  //       studentTables: [...prev.studentTables.concat(resp.data)],
  //     }
  //   })
  // }

  useEffect(() => {
    getHouse()
  }, [])

  return (
    <>
      <h2>All Houses</h2>
      <section>
        {houses.map(houses => {
          return (
            <>
              <h4>Name: {houses.houseName}</h4>
              <p>Color: {houses.houseColor}</p>
              <hr />
            </>
          )
        })}
      </section>
    </>
  )
}

export default AllHousesPage
