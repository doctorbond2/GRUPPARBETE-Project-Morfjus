import React from "react";
import {
  Offcanvas,
  Dropdown,
  Row,
  Col,
  Button,
  Accordion,
} from "react-bootstrap";
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
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [selectedSort, setSelectedSort] = useState(null);
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
          <Accordion defaultActiveKey="0" className="mb-3">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Filter by Priority</Accordion.Header>
              <Accordion.Body>
                {filterOptions.map((x) => (
                  <Button
                    key={x.value}
                    variant={
                      selectedFilter === x.value ? "primary" : "secondary"
                    }
                    onClick={() => {
                      handleFilterPriority(x.value);
                      setSelectedFilter(x.value);
                    }}
                    className="mb-2"
                  >
                    {x.label}
                  </Button>
                ))}
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Sorting options</Accordion.Header>
              <Accordion.Body>
                {dropDownSelectOptions.map((x) => (
                  <Button
                    key={x.value}
                    variant={selectedSort === x.value ? "primary" : "secondary"}
                    onClick={() => {
                      handleSortPriority(x.value);
                      setSelectedSort(x.value);
                    }}
                    className="mb-2"
                  >
                    {x.label}
                  </Button>
                ))}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default HabitsFilters;
