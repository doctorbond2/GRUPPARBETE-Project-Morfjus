import { useEffect, useState } from "react";
import FriendsList from "../components/compFriends/FriendsList";
import { Button, Dropdown } from "react-bootstrap";

const Friends = ({ friends, setFriends }) => {
  const [filteredFriends, setFilteredFriends] = useState(friends);

  const [selectedGender, setSelectedGender] = useState("all");

  const handleAdd = async () => {
    try {
      let response = await fetch("https://randomuser.me/api");
      let json = await response.json();
      let updatedFriends = [...friends, json];
      await setFriends(updatedFriends);
      await handleFilter(selectedGender, updatedFriends);
    } catch (error) {
      alert("Error Adding Friend", error);
    }
  };

  const handleFilter = (gender, friends) => {
    let updatedFilteredFriends = [...friends];
    gender === "all"
      ? (updatedFilteredFriends = [...friends])
      : (updatedFilteredFriends = friends.filter(
          (friend) => friend.results[0].gender === gender
        ));
    setFilteredFriends(updatedFilteredFriends);
  };

  const handleSortAge = (order) => {
    const sortedFriends = [...filteredFriends].sort((a, b) => {
      const ageA = a.results[0].dob.age;
      const ageB = b.results[0].dob.age;
      return order === "high" ? ageB - ageA : ageA - ageB;
    });
    setFilteredFriends(sortedFriends);
  };
  return (
    <div>
      <h1 className="d-flex justify-content-around p-4">My Friends</h1>
      <div className="d-flex justify-content-around">
        <Button
          onClick={() => {
            handleAdd();
          }}
        >
          Add A Friend
        </Button>
        <Dropdown>
          <Dropdown.Toggle>Sort By Age</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item
              onClick={() => {
                handleSortAge("high");
              }}
            >
              High to Low
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                handleSortAge("low");
              }}
            >
              Low to High
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle>Filter By Gender</Dropdown.Toggle>
          <Dropdown.Menu title="Sort By Gender">
            {" "}
            <Dropdown.Item
              onClick={() => {
                setSelectedGender("all");
                handleFilter("all");
              }}
            >
              All
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setSelectedGender("male");
                handleFilter("male");
              }}
            >
              Male
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setSelectedGender("female");
                handleFilter("female");
              }}
            >
              Female
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <ul>
        {filteredFriends.map((friendsObj, i) => {
          return <FriendsList data={friendsObj} key={i} />;
        })}
      </ul>
    </div>
  );
};

export default Friends;
