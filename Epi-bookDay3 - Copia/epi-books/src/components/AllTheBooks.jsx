// src/components/AllTheBooks.jsx
import React from "react";
import { Tab, Tabs, Card } from "react-bootstrap";
import FantasyBooks from "../Books/fantasy.json";
import HistoryBooks from "../Books/history.json";
import HorrorBooks from "../Books/horror.json";
import RomanceBooks from "../Books/romance.json";
import ScifiBooks from "../Books/scifi.json";

const AllTheBooks = () => {
  return (
    <div className="mt-4">
      <h2>All Books</h2>
      <Tabs defaultActiveKey="tab1" id="tabs-example">
        <Tab eventKey="tab1" title="Fantasy">
          {FantasyBooks.map((book) => (
            <Card key={book.id} style={{ width: "18rem" }} className="m-2">
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.category}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Tab>
        <Tab eventKey="tab2" title="History">
          {HistoryBooks.map((book) => (
            <Card key={book.id} style={{ width: "18rem" }} className="m-2">
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.category}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Tab>
        <Tab eventKey="tab3" title="Horror">
          {HorrorBooks.map((book) => (
            <Card key={book.id} style={{ width: "18rem" }} className="m-2">
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.category}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Tab>
        <Tab eventKey="tab4" title="Romance">
          {RomanceBooks.map((book) => (
            <Card key={book.id} style={{ width: "18rem" }} className="m-2">
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.category}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Tab>
        <Tab eventKey="tab5" title="Scifi">
          {ScifiBooks.map((book) => (
            <Card key={book.id} style={{ width: "18rem" }} className="m-2">
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.category}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Tab>
      </Tabs>
    </div>
  );
};

export default AllTheBooks;
