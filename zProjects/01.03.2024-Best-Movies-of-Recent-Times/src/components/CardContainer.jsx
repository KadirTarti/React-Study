import React, { useState } from "react";
import { data } from "../helpers/data";
import { Col, Container, Form, Row } from "react-bootstrap";
import PlayerCard from "./PlayerCard";

const CardContainer = () => {
    const [search, setSearch] = useState('')
    // let dizi=data;

    //& 1.yol
    // dizi=dizi.filter((a)=>a.name.includes(search))

  return (
    <>
      <Form.Control className='w-50 m-auto' type="search" placeholder="Search Movie" 
        onChange={(e)=>setSearch(e.target.value)}

      />

      <Container className="card-container p-3 rounded-4 my-4">
        <Row className="g-3">

        {/* search e isim girince filtreleme: */}
          {data.filter((a)=>a.name.toLowerCase().includes(search.trim().toLowerCase())).map((player, index) => {
            return (
              <Col className='h6' key={index} md={6} lg={4} xl={3}>
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
