import { useEffect, useState } from "react";
import FriendsList from "../components/compFriends/FriendsList";
import { Button, Dropdown, Offcanvas, Accordion } from "react-bootstrap";

const Friends = ({ friends, setFriends }) => {
  const [filteredFriends, setFilteredFriends] = useState(friends);

  const [selectedGender, setSelectedGender] = useState("all");
  const [selectedSort, setSelectedSort] = useState("high");
  const handleAdd = async () => {
    try {
      let response = await fetch("https://randomuser.me/api");
      let json = await response.json();
      let updatedFriends = [...friends, json];
      setFriends(updatedFriends);
      handleFilter(selectedGender, updatedFriends);
    } catch (error) {
      alert("Error Adding Friend", error);
    }
  };

  useEffect(() => {
    handleFilter(selectedGender, friends);
  }, [selectedGender, friends]);

  const handleFilter = (gender) => {
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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <h1 className="d-flex justify-content-around p-4">My Friends</h1>
      <div className="d-flex">
        <Button
          className="m-2"
          onClick={() => {
            handleAdd();
          }}
        >
          Add A Friend
        </Button>
        <Button variant="primary" className="m-2" onClick={handleShow}>
          Filter results <i className="bi bi-filter-right"></i>
        </Button>
        <Offcanvas
          style={{ backgroundColor: "#b0bfcc" }}
          show={show}
          onHide={handleClose}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Filter & sort</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Accordion defaultActiveKey="0" className="mb-3">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Sort By Age</Accordion.Header>
                <Accordion.Body>
                  <Button
                    variant={
                      selectedSort === "high" ? "primary" : "secondary"
                    }
                    onClick={() => {
                      setSelectedSort("high");
                      handleSortAge("high");
                    }}
                    className="mb-2"
                  >
                    High to Low
                  </Button>
                  <Button
                    variant={
                      selectedSort === "low" ? "primary" : "secondary"
                    }
                    onClick={() => {
                      setSelectedSort("low");
                      handleSortAge("low");
                    }}
                    className="mb-2"
                  >
                    Low to High
                  </Button>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>Filter By Gender</Accordion.Header>
                <Accordion.Body>
                  {["all", "male", "female"].map((gender) => (
                    <Button
                      key={gender}
                      variant={
                        selectedGender === gender
                          ? "primary"
                          : "secondary"
                      }
                      onClick={() => {
                        setSelectedGender(gender);
                        handleFilter(gender);
                      }}
                      className="mb-2"
                    >
                      {gender.charAt(0).toUpperCase() + gender.slice(1)}
                    </Button>
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Offcanvas.Body>
        </Offcanvas>
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
