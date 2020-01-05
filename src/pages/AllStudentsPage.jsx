import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AllStudentsPage = props => {
  const [students, setStudents] = useState([])
  const [name, setName] = useState('')
  const [houseId, setHouseId] = useState('')
  const getStudent = async () => {
    const resp = await axios.get(`https://localhost:5001/api/Student`)
    setStudents(resp.data)
  }

  const sendStudentsToApi = async () => {
    const resp = await axios.post('https://localhost:5001/api/Student', {
      name: name,
      houseId: props.match.params.id,
    })

    setStudents(prev => {
      return {
        ...prev,
        students: [...prev.students.concat(resp.data)],
      }
    })
  }

  useEffect(() => {
    getStudent()
  }, [])

  return (
    <>
      <section>
        <header>New Student</header>
        <ul>
          <li>Gryffindor ID is 11</li>
          <li>Slytherin ID is 22</li>
          <li>Ravenclaw ID is 33</li>
          <li>Hufflepuff ID is 44</li>
        </ul>
        <input
          type="text"
          value={name}
          placeholder="Enter Student Name"
          onChange={e => setName(e.target.value)}
        />
        <input
          type="text"
          value={houseId}
          placeholder="Enter a House ID #"
          onChange={e => setHouseId(e.target.value)}
        />
        <button onClick={sendStudentsToApi}>Create Student</button>
      </section>
      <div>
        <header>All Students</header>
        {students.map(student => {
          return (
            <>
              <h1>{student.name}</h1>
              <h3>{student.houseId}</h3>
            </>
          )
        })}
      </div>
    </>
  )
}

export default AllStudentsPage
