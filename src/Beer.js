import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const Beer = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={6} md={4}>
          <Image
            width="300"
            src="https://images.unsplash.com/photo-1559818454-1b46997bfe30?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            roundedCircle
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Beer;
