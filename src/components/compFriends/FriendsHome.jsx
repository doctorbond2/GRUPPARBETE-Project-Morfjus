import React, { useEffect, useState } from "react";
import { Card, Button, ListGroup } from "react-bootstrap";

const FriendsHome = ({ data }) => {
  // useEffect(() => {console.log(data.results)},[])

  const person = data.results[0];

  return (
    <>
      <Card style={{ width: "6rem" }}>
        <Card.Img variant="top" src={person.picture.thumbnail} />
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
