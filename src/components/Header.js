import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import { Navbar } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import axios from 'axios';



function Header() {
    const [city,setCity]=useState("")
    console.log(city,"dta___________")
   

  const getinfo =()=>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=17de51b2b6fb8b98a05912ba0faf98e6`)
    .then((response)=>{
      console.log(response,"data")
    })
    const getData =()=>{
      axios.get(` https://newsapi.org/v2/top-headlines?country=us&apiKey=a5ccc292beeb4dd69fba51e5ae122972
      `)
      .then((response)=>{
        
      })
      console.log()

    }

  }
  return (
    <div style={{backgroundColor:" #7a9bf7"}}>
         <Navbar  expand="lg">
      <Container>
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <div style={{display:"flex",justifyContent:"space-between",width:"80vw"}}>
        <NavDropdown title="Searchcity" id="basic-nav-dropdown">
            <div style={{display:"grid",gridTemplateColumns:"auto auto auto"}}>
              <NavDropdown.Item  >Agra</NavDropdown.Item>
              <NavDropdown.Item>Ahemdabad</NavDropdown.Item>
              <NavDropdown.Item>Banglore</NavDropdown.Item>
               <NavDropdown.Item>Bhopal</NavDropdown.Item>
               <NavDropdown.Item>Chennai</NavDropdown.Item>
                <NavDropdown.Item>Delhi</NavDropdown.Item>
                <NavDropdown.Item>Faridabad</NavDropdown.Item>
                <NavDropdown.Item>Ghaziabad</NavDropdown.Item>
                <NavDropdown.Item>Hyderabad</NavDropdown.Item>
                <NavDropdown.Item>Indore</NavDropdown.Item>
                <NavDropdown.Item>Jaipur</NavDropdown.Item>
                <NavDropdown.Item>Kalyan</NavDropdown.Item>
                <NavDropdown.Item>Kanpur</NavDropdown.Item>
                <NavDropdown.Item>kolkata</NavDropdown.Item>
                <NavDropdown.Item>Kanpur</NavDropdown.Item>
                <NavDropdown.Item>Lucknow</NavDropdown.Item>
                <NavDropdown.Item>ludhiana</NavDropdown.Item>
                <NavDropdown.Item>Meerut</NavDropdown.Item>
                <NavDropdown.Item>Mumbai</NavDropdown.Item>
                <NavDropdown.Item>Nagpur</NavDropdown.Item>
                <NavDropdown.Item>Nasik</NavDropdown.Item>
                <NavDropdown.Item>Patna</NavDropdown.Item>

                <NavDropdown.Item>Pune</NavDropdown.Item>

                <NavDropdown.Item>Rajkot</NavDropdown.Item>

                <NavDropdown.Item>Srinagar</NavDropdown.Item>

                <NavDropdown.Item>Surat</NavDropdown.Item>

                <NavDropdown.Item>Thane</NavDropdown.Item>

                <NavDropdown.Item>Varanasi</NavDropdown.Item>

                <NavDropdown.Item>Rajasthan</NavDropdown.Item>
                
                <NavDropdown.Item>Vadodara</NavDropdown.Item>



                <NavDropdown.Item>Telangana</NavDropdown.Item>
                






                         
                           
               </div>
             
             
            </NavDropdown>
            <div style={{displya:"flex"}}>
            <input type="search"onChange={(e)=>setCity(e.target.value)} style={{width:"60vw",borderRadius:"10px",borderTopRightRadius:"0px",borderBottomRightRadius:"0px"}}/><button onClick={getinfo} style={{borderTopRightRadius:"10px",borderBottomRightRadius:"10px"}}>Find Now</button>
            </div>
            </div>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header