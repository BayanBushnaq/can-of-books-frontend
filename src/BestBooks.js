import React from "react";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import FormModal from "./FormModal";
import UpdateBook from "./UpdateBook";

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      showUpdate : false,
      books: [],
      currentBook : {}
    };
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  componentDidMount = () => {
    axios
      .get(`${process.env.REACT_APP_url}books`)
      .then((result) => {
        this.setState({ books: result.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  addBook = (event) => {
    event.preventDefault();
    this.setState({
      show: true,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);

    const obj = {
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.value,
    };

    axios
      .post(`${process.env.REACT_APP_url}addBooks`, obj)
      .then((result) => {
        console.log("123456789dtfgjklhikujyhtrewetyuiu");
        this.setState({
          books: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

 deleteBook = (id) => {
    console.log(id);
    axios
      .delete(`${process.env.REACT_APP_url}deleteBook/${id}`)
      .then((result) => {
        this.setState({
          books: result.data
        });
        window.location.reload(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  openUpdatehandler = (item)=>{
    this.setState({
      showUpdate : true,
      currentBook : item
    })
    console.log(item)
    
  }

  closeUpdatehandler=()=>{
    this.setState({
      showUpdate : false
    })
  }

  UpdeteBookHandler=(event)=>{
    event.preventDefault();
    let obj = {
      title : event.target.title.value,
      description : event.target.description.value,
      status : event.target.status.value
    }
    const id = this.state.currentBook._id;
    axios
    .put(`http://localhost:3010/updateBook/${id}`, obj)
    .then(result=>{
      this.setState({
        books : result.data
      })
      this.closeUpdatehandler();
    })
    .catch(err=>{
      console.log(err);
    })
    
  }
  

  render() {
    /* TODO: render all the books in a Carousel */
    return (
      <>
      
        <Button variant="primary" onClick={this.addBook}>
          {" "}
          Click Here to Add a book
        </Button>
        <FormModal
          show={this.state.show}
          close={this.handleClose}
          handleSubmit={this.handleSubmit}
        />
        <UpdateBook
          showupdate={this.state.showUpdate} 
          closeUpdate={this.closeUpdatehandler}
          currentBook={this.state.currentBook}
          UpdeteBookHandler={this.UpdeteBookHandler}
          
        
        />
        {this.state.books.length > 0 ? (
          <Carousel>
            {this.state.books.map((item) => {
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
                    <Button onClick={() => this.deleteBook(item._id)}>
                      Delete This Book
                    </Button>{" "}
                    <span> </span>
                    <Button onClick={()=>this.openUpdatehandler(item)}>Update This Book</Button>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
          
        ) : (
          <h3>the book collection is empty.</h3>
        )}
      </>
    );
  }
}

export default BestBooks;
