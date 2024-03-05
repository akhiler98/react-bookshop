import { useEffect, useState } from "react";


function BookList() {
    const [list,setList] = useState([])
    const [page,setPage] = useState(1)

    const loaddata =async()=>{
        const response = await fetch('https://classes.codingbootcamp.cz/assets/classes/books-api/latest-books.php?page='+page)
        const data = await response.json()
        setList(data);
       
   }
   

   useEffect(() => {
    loaddata();

    },[page]);


  return (
    <>
    <div>BookList</div>
    <button onClick={()=>{page>=1 ? setPage(page-1) : setPage(1)}}>previous page</button>
    <button onClick={()=>{setPage(page+1)}}>nextpage</button>
    
    {
        list.map(book=>{
            return(
                <>
                <li key={book.id}>{book.title}</li>
                <img src={book.image} alt="" /><br /><br />
                </>
            )
        })
    }

    </>
    
  )
}

export default BookList