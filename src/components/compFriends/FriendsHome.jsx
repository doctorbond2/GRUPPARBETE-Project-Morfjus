import React, { useEffect, useState } from "react";
import { Card, Button, ListGroup } from "react-bootstrap";

const FriendsHome = ({ data }) => {
  // useEffect(() => {console.log(data.results)},[])

  const person = data.results[0];

  return (
    <>
      <Card className="d-inline-flex flex-wrap m-1" style={{ width: "9rem" }}>
        <Card.Img variant="top" src={person.picture.medium} />
        <Card.Body>
          <Card.Title>
            {person.name.title} {person.name.first} {person.name.last}
          </Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default FriendsHome;
