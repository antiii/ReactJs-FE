import { Col, Container, Row, Button } from "react-bootstrap"
import React, { useState, useEffect } from 'react'

const Intro = () => {

  const url = 'https://61601920faa03600179fb8d2.mockapi.io/pegawai'

  const [pegawai, setUsers] = useState([])

  const getDataUsers = async () => {
    const response = await fetch('https://61601920faa03600179fb8d2.mockapi.io/pegawai')
    const dataku = await response.json()
    const pegawai = dataku.slice(0, 6)
    setUsers(pegawai)
  }

  useEffect(() => {
    getDataUsers()
  }, [])

  return (
      <div className="intro">
      <Container className="text-white text-center d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <div className="title">INFORMATION OF DATA EMPLOYEE</div>
            
      <h3>List Employee</h3>
      {pegawai.map((user) => {
        return (
          <p key={user.id}>
            {user.nama}, 

            {user.provinsi}
          </p>
        )
      })}
      </Col>
        </Row>
      </Container>
    </div>
  );

 
}

export default Intro
