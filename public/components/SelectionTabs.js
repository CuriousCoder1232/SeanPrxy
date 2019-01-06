import React from "react";
import {
  Grid,
  Row,
  Col,
  Tabs,
  Tab,
  TabContainer,
  TabContent,
  TabPane,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarHeader,
  NavbarToggle,
  NavItem,
  NavDropdown,
  MenuItem
} from "react-bootstrap/lib";

const SelectionTabs = props => {
  return (
    <div>
      <TabContainer id="Pet-Selection">
        <Navbar>
          <Row>
            <Col>
              <Nav bsStyle="tabs" onSelect={props.handleSelect.bind(this)}>
                <NavDropdown eventKey="mammal" title="Mammal">
                  <MenuItem eventKey="1111">Felidae</MenuItem>
                  <MenuItem eventKey="1218">Canidae</MenuItem>
                  <MenuItem eventKey="13121">Balaenopteridae</MenuItem>
                  <MenuItem eventKey="14129">Equidae</MenuItem>
                  <MenuItem eventKey="19358">Ursidae</MenuItem>
                  <MenuItem eventKey="15131">Hippopotamidae</MenuItem>
                  <MenuItem eventKey="16133">Camelidae</MenuItem>
                  <MenuItem eventKey="17139">Suidae</MenuItem>
                  <MenuItem eventKey="18148">Hominidae</MenuItem>
                  <MenuItem eventKey="19357">Phascolarctidae</MenuItem>
                  <MenuItem eventKey="10163">Odobenidae</MenuItem>
                  <MenuItem eventKey="10164">Monodontidae</MenuItem>
                  <MenuItem eventKey="10165">Cervidae</MenuItem>
                  <MenuItem eventKey="10166">Giraffidae</MenuItem>
                  <MenuItem eventKey="10168">Bovidae</MenuItem>
                </NavDropdown>
              </Nav>
            </Col>
            <Col>
              <Nav bsStyle="tabs">
                <NavDropdown
                  eventKey="Reptilia"
                  title="Reptilia"
                  onSelect={props.handleSelect}
                >
                  <MenuItem eventKey="4111">Crocodylidae</MenuItem>
                  <MenuItem eventKey="4215">Alligatoridae</MenuItem>
                  <MenuItem eventKey="43112">Gavialidae</MenuItem>
                  <MenuItem eventKey="44113">Pythonidae</MenuItem>
                  <MenuItem eventKey="45114">Boidae</MenuItem>
                  <MenuItem eventKey="46117">Viperidae</MenuItem>
                </NavDropdown>
              </Nav>
            </Col>
            <Col>
              <Nav bsStyle="tabs">
                <NavDropdown
                  eventKey="Aves"
                  title="Aves"
                  onSelect={props.handleSelect}
                >
                  <MenuItem eventKey="2111">Struthionidae</MenuItem>
                  <MenuItem eventKey="2222">Apterygidae</MenuItem>
                  <MenuItem eventKey="2333">Anatidae</MenuItem>
                  <MenuItem eventKey="24110">Sulidae</MenuItem>
                </NavDropdown>
              </Nav>
            </Col>
            <Col>
              <Nav bsStyle="tabs">
                <NavDropdown
                  eventKey="Actinopterygii"
                  title="Actinopterygii"
                  onSelect={props.handleSelect}
                >
                  <MenuItem eventKey="3111">Melanocetidae</MenuItem>
                  <MenuItem eventKey="3212">Stomiidae</MenuItem>
                </NavDropdown>
              </Nav>
            </Col>
          </Row>
        </Navbar>
      </TabContainer>
    </div>
  );
};

export default SelectionTabs;
