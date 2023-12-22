import React, { useEffect, useState } from "react";
import { Card, Button, ListGroup } from "react-bootstrap";

const FriendsList = ({ data }) => {
  // useEffect(() => {console.log(data.results)},[])

  const person = data.results[0];

  const [showFriends, setShowFriends] = useState(false);

  return (
    <>
      <Card className="d-inline-flex m-2 comp-color" style={{ width: "18rem" }}>
        <Card.Img
          className="comp-color"
          variant="top"
          src={person.picture.large}
        />
        <Card.Body>
          <Card.Title>
            {person.name.title} {person.name.first} {person.name.last}
          </Card.Title>
          {showFriends && <Card.Text>Gender: {person.gender}</Card.Text>}
          {showFriends && <Card.Text>Email: {person.email}</Card.Text>}
          {showFriends && <Card.Text>Age: {person.dob.age}</Card.Text>}
          {showFriends && <Card.Text>Born: {person.dob.date}</Card.Text>}
          <Button
            onClick={() => {
              setShowFriends(!showFriends);
            }}
          >
            {!showFriends ? "Show More" : "Show Less"}
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default FriendsList;
