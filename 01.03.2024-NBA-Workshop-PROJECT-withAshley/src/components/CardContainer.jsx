import React from "react";
import { data } from "../helpers/data";
import { Col, Container, Form, Row } from "react-bootstrap";
import PlayerCard from "./PlayerCard";

const CardContainer = () => {
  return (
    <>
      <Form.Control type="search" placeholder="Search Player" />
      <Container className="card-container p-3 rounded-4 my-4">
        <Row className="g-3">
          {data.map((player, index) => {
            return (
              <Col key={index} md={6} lg={4} xl={3}>
                {/* <PlayerCard player = {player}></PlayerCard> */}
                <PlayerCard {...player}></PlayerCard>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default CardContainer;
