import React from "react";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {books: []};}
      
    
  

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  componentDidMount = () => {
    axios
      .get("http://localhost:3010/books")
      .then((result) => {
        this.setState({ books: result.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    /* TODO: render all the books in a Carousel */
    return ( 
      <>
      {this.state.books.length > 0 ? (
        <Carousel >
          {this.state.books.map(item => {
            return (

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://cdn2.teebooks.com/3568-large_default/wall-bookshelves-45-x-15-cm-set-of-2.jpg"
                  alt="First slide"
                />
                <Carousel.Caption style={{ color: "black" }}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p>{item.status}</p>
                </Carousel.Caption>
              </Carousel.Item>

            )
          }
          )}


        </Carousel>

      ) : (
        <h3>the book collection is empty.</h3>
      )}



</>
        ) 
    }}

export default BestBooks;
