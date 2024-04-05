
import { Col, Card, Button, Row, Image } from "react-bootstrap";
import { useUserContext } from "./UserContext";
import NotFound from '../assets/404.gif'



const UserInfo = () => {


  const {userData, isUserExist} = useUserContext()
  console.log(userData);

  // viewprofil'i kaldırmak için
  const isUserDataEmpty = Object.keys(userData).length === 0  

  if (!isUserExist) {
    return (
    <Row className="justify-content-center h-25 w-100"><Image src={NotFound} className="h-25 w-50" alt="User not found" /></Row>
    )
  }


  if (isUserDataEmpty) return null;

  return (
    <Row xs={2} md={3} lg={3} className="mt-4 justify-content-center">
      <Col>
        <Card>
          <Card.Img variant="top" src={userData.avatar_url} />
          <Card.Body>
            <Card.Text>{userData.login}</Card.Text>
            <Button
              href={userData.html_url}
              target="true"
              style={{ borderRadius: "50px" }}
              variant="primary"
            >
             VIEW PROFILE
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default UserInfo;
