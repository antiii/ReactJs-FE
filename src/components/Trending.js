import { Card, Container, Row, Col, Image } from "react-bootstrap"
import duneImage from "../assets/images/trending/prof.jpg"
import everythingImage from "../assets/images/trending/prof.jpg"
import infiniteImage from "../assets/images/trending/prof.jpg"


const Trending = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">TRENDING EMPLOYEE</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="trending">
            <Card className="movieImage">
              <Image src={duneImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Agam Sitorus</Card.Title>
                  <Card.Text className="text-left">
                  provinsi:Sumatera Utara, kabupaten:Kabupaten Deli Serdang, kecamatan:Galang, kelurahan:Galang Kota
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={everythingImage}
                alt="Dune Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">
                  Asmuni
                  </Card.Title>
                  <Card.Text className="text-left">
                  provinsi:Aceh, kabupaten:Kabupaten Bireuen, kecamatan:Jangka, kelurahan:Bada Barat
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={infiniteImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Tesi</Card.Title>
                  <Card.Text className="text-left">
                  provinsi:Riau, kabupaten:Kabupaten Bengkalis, kecamatan:Talang Muandau, kelurahan:Beringin
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          
        </Row>
      </Container>
    </div>
  )
}

export default Trending
