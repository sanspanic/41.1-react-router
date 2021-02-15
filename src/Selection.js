import React, { useState } from "react";
import { ListGroup, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Selection() {
  return (
    <div className="Selection">
      <Container>
        <Row className="justify-content-center">
          <Col s md="6">
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Link to="/jelly">Jelly</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link to="/beer">Beer</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link to="/nougat">Nougat</Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Selection;
