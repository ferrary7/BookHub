import React, { useState, useEffect } from 'react'
import API from './Api' 
import axios from 'axios'
import '../App.css'

const Body = () => {

    const [Books, setBooks] = useState([])
    const [Search, setSearch] = useState([])
 
    useEffect(() => {

        const config = {
            headers: {
                Authorization : "whatever-you-want"
            }
        }

        axios.get(API, config)
        .then((res) => {
            console.log(res.data.books)
            setBooks(res.data.books)
            setSearch(res.data.books)
        }).catch(err => console.log(err))
    }, [])


    function onChangeHandler(elt) {
        let letters = []
        Books.forEach((e) => {
            if(e.title.toLowerCase().search(elt.target.value.toLowerCase()) >= 0){
                letters.push(e)
            }
        })
        console.log(letters)
        if(elt.target.value !== ""){
            setSearch(letters)
            
        }
    }

    // window.addEventListener('beforeunload', () => {
    //     localStorage.clear();
    // });

  return (

    <div className='container'>

        <div className='Search'>
            <input type="text" placeholder="Search Your Books here 📖..." onChange={onChangeHandler} />
        </div>
        <div className='bookList'>
            {Search.map((book) => {
                return (
                        <div className='book'>
                            <div className='image'>
                                <img src={book.imageLinks.thumbnail} alt='Book' style={{cursor: "pointer"}} />
                            </div>
                            <div>
                                <h3 style={{color: "white"}}>{book.title}</h3>
                                <h4 style={{color: "white"}}>By- {book.authors}</h4>
                            </div>
                            <div className='description'>
                                <h4>Date Published: {book.publishedDate}</h4>
                                <h4 style={{color: "white",
                                            width: "50px",
                                            borderRadius: "5px",
                                            backgroundColor: "black",
                                            alignItems: "center"}}>Free</h4>
                            </div>
                        </div>  
                )
            })}
        </div>
            <h1 style={{textAlign: "center",
                        color: "white"
                        }}>Sorry, no more books here 😔</h1>
    </div>
  )
}

export default Body
