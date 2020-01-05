import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const HomePage = () => {
  const [houses, setHouses] = useState([])

  const getHouses = async () => {
    const resp = await axios.get('https://localhost:5001/api/house')
    setHouses(resp.data)
  }
  useEffect(() => {
    getHouses()
  }, [])

  return <></>
}
export default HomePage
