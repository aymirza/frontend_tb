import React from "react";
import {Nav, Navbar, Container, Row, Col} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import ListEmplNarushenie from "./components/exmployee/working/list-empl-narushenie";
import CreateEmplNarushenie from "./components/exmployee/working/create-empl-narushenie";
import UchastkaFilter from "./components/exmployee/filter/uchastka-filter";
import EmplNerushenieFilter from "./components/exmployee/filter/empl_narushenie-filter";
import TsexFilter from "./components/exmployee/filter/tsex_filter";
import PravilaFilter from "./components/exmployee/filter/pravila-filter";
import NarushenieFilter from "./components/exmployee/filter/narushenie-filter";
import CreateNarushenie from "./components/exmployee/working/create-narushenie";

const App = () => {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <Navbar bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand>
                                <Link to={"/list-empl-narushenie"}
                                      className="nav-link">
                                    Texnika havfsizligi
                                </Link>
                            </Navbar.Brand>
                            <Nav className="justify-content-end">

                                <Nav>
                                    <Link to={"/create-narushenie"}
                                          className="nav-link">
                                        Create
                                    </Link>
                                </Nav>
                                <Nav>
                                    <Link to={"/narushenie-filter"}
                                          className="nav-link">
                                        NarushenieList
                                    </Link>
                                </Nav>

                                <Nav>
                                    <Link to={"/pravila-filter"}
                                          className="nav-link">
                                        PravilaList
                                    </Link>
                                </Nav>

                                <Nav>
                                    <Link to={"/tsex-filter"}
                                          className="nav-link">
                                        TsexList
                                    </Link>
                                </Nav>
                                <Nav>
                                    <Link to={"/uchastka-filter"}
                                          className="nav-link">
                                        UchastkaList
                                    </Link>
                                </Nav>
                                <Nav>
                                    <Link to={"/create-empl-narushenie"}
                                          className="nav-link">
                                        CreateNarushenie
                                    </Link>
                                </Nav>
                                <Nav>
                                    <Link to={"/list-empl-narushenie"}
                                          className="nav-link">
                                        EmplNarushenieList
                                    </Link>
                                </Nav>
                                <Nav>
                                    <Link to={"/empl-narushenie-filter"}
                                          className="nav-link">
                                        EmplNarushenieFilter
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

                                    <Route element={<CreateEmplNarushenie/>} path="/create-empl-narushenie"
                                           component={CreateEmplNarushenie}/>
                                    <Route element={<ListEmplNarushenie/>} path="/list-empl-narushenie"
                                           component={ListEmplNarushenie}/>
                                    <Route element={<UchastkaFilter/>} path="/uchastka-filter"
                                           component={UchastkaFilter}/>
                                    <Route element={<EmplNerushenieFilter/>} path="/empl-narushenie-filter"
                                           component={EmplNerushenieFilter}/>
                                    <Route element={<TsexFilter/>} path="/tsex-filter"
                                           component={TsexFilter}/>
                                    <Route element={<PravilaFilter/>} path="/pravila-filter"
                                           component={PravilaFilter}/>
                                    <Route element={<CreateNarushenie/>} path="/create-narushenie"
                                           component={CreateNarushenie}/>
                                    <Route element={<NarushenieFilter/>} path="/narushenie-filter"
                                           component={NarushenieFilter}/>
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
