import React from "react";
import FriendsList from "../compontents/compFriends/FriendsList";

const Friends = ({friends, setFriends}) => {
  return (
    <>
      <h1>Friends</h1>
      <ul>{friends.map((friendsObj, i) => {return(<FriendsList data={friendsObj} key={i}/>)})}</ul>
      </>
  );
};

export default Friends;
