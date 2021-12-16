import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Nav from "react-bootstrap/Nav";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Modal from "react-bootstrap/Modal";
import ProgressBar from "react-bootstrap/ProgressBar";
import Spinner from "react-bootstrap/Spinner";
import Toast from "react-bootstrap/Toast";
import { Icon } from "../../components/Icon/Icon";
import { samples } from "../../theme/utils";
import { useState } from "react";

const Sample = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Col xs='auto'>
        <Card>
          <Card.Header>
            Card Header
            <Card.Subtitle>Card Subtitle</Card.Subtitle>
          </Card.Header>
          <Card.Body>
            <Table striped bordered hover>
              <thead>
                <tr>
                  {samples.map((sample) => (
                    <th key={sample}>{sample}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {samples.map((sample) => (
                    <td key={sample}>
                      <Button variant={sample}>{sample}</Button>
                    </td>
                  ))}
                </tr>
                <tr>
                  {samples.map((sample) => (
                    <td key={sample}>
                      <Button variant={"outline-" + sample}>{sample}</Button>
                    </td>
                  ))}
                </tr>
                <tr>
                  {samples.map((sample) => (
                    <td key={sample}>
                      <Button variant={sample} disabled>
                        {sample}
                      </Button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </Table>
            {samples.map((sample) => (
              <Alert key={sample} variant={sample}>
                This is a {sample} alert—check it out!
              </Alert>
            ))}
          </Card.Body>
        </Card>
      </Col>

      <Col xs='auto'>
        <Card>
          <Card.Header>
            Badges
            <Card.Subtitle>Hey Jacobo!</Card.Subtitle>
          </Card.Header>
          <Card.Body>
            <Table striped bordered hover>
              <tbody>
                <tr>
                  {samples.map((sample) => (
                    <td key={sample}>
                      <Badge bg={sample}>{sample}</Badge>
                    </td>
                  ))}
                </tr>
              </tbody>
            </Table>
            <div>
              <h1>
                Example heading <Badge bg='secondary'>New</Badge>
              </h1>
              <h2>
                Example heading <Badge bg='secondary'>New</Badge>
              </h2>
              <h3>
                Example heading <Badge bg='secondary'>New</Badge>
              </h3>
              <h4>
                Example heading <Badge bg='secondary'>New</Badge>
              </h4>
              <h5>
                Example heading <Badge bg='secondary'>New</Badge>
              </h5>
              <h6>
                Example heading <Badge bg='secondary'>New</Badge>
              </h6>
            </div>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card>
          <Card.Header>
            <Nav variant='pills' defaultActiveKey='#first'>
              <Nav.Item>
                <Nav.Link href='#first'>Active</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href='#link'>Link</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href='#disabled' disabled>
                  Disabled
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            <Card.Title>Card With Tabs</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Button variant='primary' onClick={handleShow}>
              View Modal
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Woohoo, you're reading this text in a modal!
              </Modal.Body>
              <Modal.Footer>
                <Button variant='secondary' onClick={handleClose}>
                  Close
                </Button>
                <Button variant='primary' onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </Card.Body>
        </Card>
      </Col>

      <Col xs='auto'>
        <Card>
          <Card.Header className='m-0 p-0'>
            <Icon icon='placeholder' width='286' height='180' />
          </Card.Header>
          <Card.Body>
            <Placeholder as={Card.Title} animation='glow'>
              <Placeholder xs={6} />
            </Placeholder>
            <Placeholder as={Card.Text} animation='glow'>
              <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
              <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
              <Placeholder xs={8} />
            </Placeholder>
            <Placeholder.Button variant='primary' xs={6} />
          </Card.Body>
        </Card>
      </Col>

      <Col xs='auto'>
        <Card>
          <Card.Header>Form / Inputs</Card.Header>
          <Card.Body>
            <InputGroup className='mb-3'>
              <InputGroup.Text id='basic-addon1'>@</InputGroup.Text>
              <FormControl
                placeholder='Username'
                aria-label='Username'
                aria-describedby='basic-addon1'
              />
            </InputGroup>

            <InputGroup className='mb-3'>
              <FormControl
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby='basic-addon2'
              />
              <InputGroup.Text id='basic-addon2'>@example.com</InputGroup.Text>
            </InputGroup>

            <Form.Label htmlFor='basic-url'>Your vanity URL</Form.Label>
            <InputGroup className='mb-3'>
              <InputGroup.Text id='basic-addon3'>
                https://example.com/users/
              </InputGroup.Text>
              <FormControl id='basic-url' aria-describedby='basic-addon3' />
            </InputGroup>

            <InputGroup className='mb-3'>
              <InputGroup.Text>$</InputGroup.Text>
              <FormControl aria-label='Amount (to the nearest dollar)' />
              <InputGroup.Text>.00</InputGroup.Text>
            </InputGroup>

            <InputGroup>
              <InputGroup.Text>With textarea</InputGroup.Text>
              <FormControl as='textarea' aria-label='With textarea' />
            </InputGroup>
          </Card.Body>
        </Card>
      </Col>

      <Col xs='auto'>
        <Card>
          <Card.Header>Progress Bars</Card.Header>
          <Card.Body>
            <div>
              <ProgressBar now={40} />
              <ProgressBar variant='success' now={40} />
              <ProgressBar variant='info' now={20} />
              <ProgressBar variant='warning' now={60} />
              <ProgressBar variant='danger' now={80} />
            </div>
          </Card.Body>
        </Card>
      </Col>

      <Col xs='auto'>
        <Card>
          <Card.Header>
            Card Header
            <Card.Subtitle>Card Subtitle</Card.Subtitle>
          </Card.Header>
          <Card.Body>
            <Table striped bordered hover>
              <thead>
                <tr>
                  {samples.map((sample) => (
                    <th key={sample}>{sample}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {samples.map((sample) => (
                    <td key={sample}>
                      <Spinner animation='border' variant={sample} />
                    </td>
                  ))}
                </tr>
                <tr>
                  {samples.map((sample) => (
                    <td key={sample}>
                      <Spinner animation='grow' variant={sample} />
                    </td>
                  ))}
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Col>

      <Col xs='auto'>
        <Card>
          <Card.Header>
            Card Header
            <Card.Subtitle>Card Subtitle</Card.Subtitle>
          </Card.Header>
          <Card.Body>
            {samples.map((variant, idx) => (
              <Toast
                className='d-inline-block m-1'
                bg={variant.toLowerCase()}
                key={idx}
              >
                <Toast.Header>
                  <strong className='me-auto'>Bootstrap</strong>
                  <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body className={variant === "Dark" && "text-white"}>
                  Hello, world! This is a toast message.
                </Toast.Body>
              </Toast>
            ))}
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Sample;
