import React, { useEffect, useState } from "react";
import { Card, Button, ListGroup } from "react-bootstrap";

const FriendsHome = ({ data }) => {
  // useEffect(() => {console.log(data.results)},[])

  const person = data.results[0];

  return (
    <>
      <li className="friend-li comp-color text-color">
        <img className="thumbnail-pic" src={person.picture.thumbnail} />
        {person.name.title} {person.name.first} {person.name.last}
      </li>
    </>
  );
};

export default FriendsHome;
