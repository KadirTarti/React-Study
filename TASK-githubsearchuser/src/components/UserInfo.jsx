import React from "react";
import { Col, Card, Button, Row } from "react-bootstrap";

const UserInfo = () => {

  return (
    <Row xs={2} md={3} lg={3} className="mt-4 justify-content-center">
      <Col>
        <Card>
          <Card.Img variant="top" src="" />
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
    </Row>
  );
};

export default UserInfo;
