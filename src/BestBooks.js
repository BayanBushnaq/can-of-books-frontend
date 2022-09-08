import React from "react";
import Button from 'react-bootstrap/Button';
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import FormModal from './FormModal';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      books: []
    };
  }
      
  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  componentDidMount = () => {
    console.log("test") ;
    axios
      .get("http://localhost:3010/books")
      .then((result) => {
        this.setState({ books: result.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleClose = ()=>{
    this.setState({
      show : false
    })
  }

  addBook = (event)=>{
    event.preventDefault();
    this.setState({
      show:true
    })}

  

  handleSubmit=(event)=>{
    event.preventDefault()
    console.log(event.target)
    console.log("123456789")
   alert('1')
   
    const obj={
        title :event.target.title.value,
        description :event.target.description.value,
        status: event.target.status.value
       
    }
    
    axios 
    .post('http://localhost:3010/addBooks',obj)
    .then((result) =>{
      console.log("123456789dtfgjklhikujyhtrewetyuiu")
       this.setState ({
        books : result.data
      })

    })
    .catch(err=>{
      console.log(err);
    })
  }

  render(){
    /* TODO: render all the books in a Carousel */
    return ( 
      <>
      <Button variant="primary" onClick={this.addBook}> Click Here to Add a book</Button>
      <FormModal show={this.state.show} close={this.handleClose} handleSubmit={this.handleSubmit}/>
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
              </Carousel.Item>)} )}

        </Carousel>

      ) : (
        <h3>the book collection is empty.</h3>
      )}
</>
        ) 
      } }

export default BestBooks;
