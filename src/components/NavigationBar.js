import { Navbar, Container, Nav } from "react-bootstrap"

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="/">InfoEmplyee</Navbar.Brand>
          <Nav>
            <Nav.Link href="#trending"><b>TRENDING</b></Nav.Link>
            <Nav.Link href="#superhero"><b>SUPERHERO</b></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavigationBar
