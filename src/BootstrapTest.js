import { Container, Row, Col, Carousel, Form } from "react-bootstrap";

const BootstrapTest = () => {
    return (
        <Container className={"mt-5 mb-5"}>
            <Row>
                <Col>
                    <Form>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Col>
                <Col>
                    <Carousel data-bs-theme="dark">
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSByaHVrAK_LZz8G12q8kn6S14y0S9-6g_Rog&s"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h5>First slide label</h5>
                                <p>
                                    Nulla vitae elit libero, a pharetra augue
                                    mollis interdum.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqLvmh6agHY7W8_0VHDbmAilLxsJGQWcP3Dw&s"
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h5>Second slide label</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9gL7zliNfgHelUaLOT13QyoCaE_JS3g1Ckg&s"
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h5>Third slide label</h5>
                                <p>
                                    Praesent commodo cursus magna, vel
                                    scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    );
};

export default BootstrapTest;
