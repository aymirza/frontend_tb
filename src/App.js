import React from "react";
import {Nav, Navbar, Container, Row, Col} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import StudentList from "./components/student-list";
import CreateStudent from "./components/create-student";
import CreateNarushenie from "./components/exmployee/create-narushenie";
import CreateEmployee from "./components/exmployee/create-employee";
import ListEmployees from "./components/exmployee/list-employees";
import Images from "./components/exmployee/images";
import EmplNarushenie from "./components/exmployee/empl-narushenie";

const App = () => {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <Navbar bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand>
                                <Link to={"/student-list"}
                                      className="nav-link">
                                    React Mern Stack App
                                </Link>
                            </Navbar.Brand>
                            <Nav className="justify-content-end">
                                <Nav>
                                    <Link to={"/create-student"}
                                          className="nav-link">
                                        CreateStudent
                                    </Link>
                                </Nav>
                                <Nav>
                                    <Link to={"/student-list"}
                                          className="nav-link">
                                        StudentList
                                    </Link>
                                </Nav>
                                <Nav>
                                    <Link to={"/create-narushenie"}
                                          className="nav-link">
                                        StudentList
                                    </Link>
                                </Nav>
                                 <Nav>
                                    <Link to={"/create-employee"}
                                          className="nav-link">
                                        Employee
                                    </Link>
                                </Nav>
                                 <Nav>
                                    <Link to={"/list-employees"}
                                          className="nav-link">
                                        ListEmployee
                                    </Link>
                                </Nav>
                                 <Nav>
                                    <Link to={"/images"}
                                          className="nav-link">
                                        Images
                                    </Link>
                                </Nav>
                                  <Nav>
                                    <Link to={"/empl-narushenie"}
                                          className="nav-link">
                                        EmplNarushenie
                                    </Link>
                                </Nav>

                            </Nav>
                        </Container>
                    </Navbar>
                </header>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className={"wrapper"}>
                                <Routes>
                                    <Route element={<CreateStudent/>} path="/create-student" component={CreateStudent}/>
                                    <Route element={<StudentList/>} path="/student-list" component={StudentList}/>
                                    <Route element={<CreateNarushenie/>} path="/create-narushenie" component={CreateNarushenie}/>
                                    <Route element={<CreateEmployee/>} path="/create-employee" component={CreateNarushenie}/>
                                    <Route element={<ListEmployees/>} path="/list-employees" component={CreateNarushenie}/>
                                    <Route element={<Images/>} path="/images" component={Images}/>
                                    <Route element={<EmplNarushenie/>} path="/empl-narushenie" component={EmplNarushenie}/>
                                </Routes>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Router>
    );
};

export default App;
