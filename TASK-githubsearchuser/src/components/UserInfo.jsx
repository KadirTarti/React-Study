
import { Col, Card, Button, Row } from "react-bootstrap";
import { useUserContext } from "./UserContext";



const UserInfo = () => {


  const {userData} = useUserContext()


  return (
    <Row xs={2} md={3} lg={3} className="mt-4 justify-content-center">
      <Col>
        <Card>
          <Card.Img variant="top" src={userData.avatar_url} />
          <Card.Body>
            <Card.Text>UserName</Card.Text>
            <Button
              href="#"
              target="true"
              style={{ borderRadius: "50px" }}
              variant="primary"
            >
              VIEW PROFILE
            </Button>
          </Card.Body>
        </Card>
      </Col>

      {/* <Row className="justify-content-center h-25 w-100"><Image src={NotFound} className="h-25 w-50" alt="User not found" /></Row> */}


    </Row>
  );
};

export default UserInfo;
