import React, { useState } from "react";
import { data } from "../helpers/data";
import { Col, Container, Form, Row } from "react-bootstrap";
import PlayerCard from "./PlayerCard";

const CardContainer = () => {
    const [search, setSearch] = useState('')
    let dizi=data;
    dizi=dizi.filter((a)=>a.name.includes(search))

  return (
    <>
      <Form.Control className='w-50 m-auto' type="search" placeholder="Search Player" 
        onChange={(e)=>setSearch(e.target.value)}

      />

      <Container className="card-container p-3 rounded-4 my-4">
        <Row className="g-3">
          {dizi.map((player, index) => {
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
