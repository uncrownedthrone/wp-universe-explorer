import React, { useEffect, useState } from 'react'
import axios from 'axios'

const HousePage = props => {
  const [houses, setHouses] = useState([])
  const [houseName, setHouseName] = useState('')
  const [houseColor, setHouseColor] = useState('')
  const [houseMotto, setHouseMotto] = useState('')
  const getHouse = async () => {
    const resp = await axios.get(
      `https://localhost:5001/api/house/${props.match.params.id}`
    )
    setHouses(resp.data)
  }

  const sendStudentToApi = async () => {
    const resp = await axios.post('https://localhost:5001/api/student', {
      houseName: houseName,
      houseColor: houseColor,
      houseMotto: houseMotto,
      houseId: parseInt(props.match.params.id),
    })

    setHouses(prev => {
      return {
        ...prev,
        students: [...prev.students.concat(resp.data)],
      }
    })
  }

  useEffect(() => {
    getHouse()
  }, [])

  return (
    <div>
      <h1>Name: {houses.houseName}</h1>
      <h2>Color: {houses.houseColor}</h2>
      <button onClick={sendStudentToApi}>Create Student</button>
    </div>
  )
}

export default HousePage
