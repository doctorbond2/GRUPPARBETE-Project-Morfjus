import React from "react";
import { Offcanvas, Dropdown, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
const HabitsFilters = ({
  show,
  handleShow,
  setShow,
  handleClose,
  handleFilterPriority,
  handleSortPriority,
  filterOptions,
  dropDownSelectOptions,
}) => {
  return (
    <>
      <Offcanvas
        style={{ backgroundColor: "#b0bfcc" }}
        show={show}
        onHide={handleClose}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filter & sort</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {" "}
          <Dropdown className="mb-3">
            <Dropdown.Toggle
              style={{
                width: "366px",
                backgroundColor: "#D7E8F7",
                color: "black",
                border: "0px",
              }}
              variant="dark"
              id="dropdown-basic"
            >
              Filter by Priority
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ width: "366px", textAlign: "center" }}>
              {filterOptions.map((x, i) => (
                <Dropdown.Item
                  onClick={() => {
                    handleFilterPriority(x.value);
                  }}
                  value={x.value}
                >
                  {x.label}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mb-3">
            <Dropdown.Toggle
              style={{
                width: "366px",
                backgroundColor: "#D7E8F7",
                color: "black",
                border: "0px",
              }}
              variant="dark"
              id="dropdown-basic"
            >
              Sorting options
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ width: "366px", textAlign: "center" }}>
              {dropDownSelectOptions.map((x, i) => (
                <Dropdown.Item
                  onClick={() => {
                    handleSortPriority(x.value);
                  }}
                  value={x.value}
                >
                  {x.label}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default HabitsFilters;
