import FriendsList from "../components/compFriends/FriendsList";
import { Button, DropdownButton, Dropdown, ButtonGroup } from "react-bootstrap";

const Friends = ({ friends, setFriends }) => {






  return (
    <div>
      <h1>Friends</h1>
      <Button as={ButtonGroup}
        onClick={async () => {
          let response = await fetch("https://randomuser.me/api");
          let json = await response.json();
          let updatedFriends = [...friends];
          updatedFriends.push(json);
          setFriends(updatedFriends);
        }}
      >
        Add A Friend
      </Button>
      <DropdownButton as={ButtonGroup} id="gender" title="Sort By Gender">
      <Dropdown.Item  value="All">All</Dropdown.Item>
        <Dropdown.Item value="Male">Male</Dropdown.Item>
        <Dropdown.Item value="Female">Female</Dropdown.Item>
      </DropdownButton>
      <ul>
        {friends.map((friendsObj, i) => {
          return <FriendsList data={friendsObj} key={i} />;
        })}
      </ul>
    </div>
  );
};

export default Friends;
