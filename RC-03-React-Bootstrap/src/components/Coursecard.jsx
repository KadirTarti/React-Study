// import Row from 'react-bootstrap/Row';
// import Container from 'react-bootstrap/Container';

//* üstteki şekilde de import yapılabilir ama alttaki daha kısa ve hızlı  (destructing yöntemiyle)
import {Row, Container, Col, Card, Button} from 'react-bootstrap'

//! react alanında döngü olarak sadece map desteklenir,condition lardan da sadece ternary desteklenir 

const Coursecard = ({veri}) => {
    console.log(veri);


  return ( 
  
  <Container>
    <Row>
    {veri.map(({img, name, text, id}) =>{
      // süslü nedeniyle return yapmamız lazım. JS'de şart değil burada şart

      //^* arrow func,  süslü kullandığımızda return ister. süslü kullanılmama seçeneği var. o zaman return'e de ihtiyaç yok
      //! ayrıca ilk div'e key property'siyle uniqe bir key atanmalı. örn: key={id}

       return(
        <Col className='col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center'
//  xs={12} md={6} lg={4} -> bu tarz, üstteki col dağılımının reactbootstrap responsive yazımı
         key={id}>
          <Card style={{width:'18rem'}}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{text}</Card.Text>
              <Button variant='primary'>Primary</Button>
            </Card.Body>
          </Card>
        </Col>
       )


    })}

    </Row>

  </Container>
  )
}

export default Coursecard;