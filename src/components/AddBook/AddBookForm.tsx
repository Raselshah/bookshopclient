import { usePostBookMutation } from "@/redux/feature/books/booksSlice";
import { useState } from "react";

export default function AddBookForm() {
    const [postBook, { isSuccess }] =
    usePostBookMutation();

    const [postData, setPostData] = useState({
        title:"",
        author:"",
        genre:"",
        publicationDate:"",
        bookUrl:""
    })

const handleSubmit = async (e: { preventDefault: () => void; })  => {
    e.preventDefault();
    try {
        await postBook({
          title: postData.title,
          author: postData.author,
          genre: postData.genre,
          publicationDate: postData.publicationDate,
          bookUrl: postData.bookUrl,
        });
        // Handle success, e.g., show a success message or redirect to another page
      } catch (error) {
        // Handle error, e.g., show an error message
      }
    }
if(isSuccess){
    alert("Successfully added book");
    
}


  return (
    <form onSubmit={handleSubmit} className="flex gap-y-[12px] flex-col mx-auto max-w-[343px] justify-center items-center h-screen">
     <input onChange={(e) => setPostData(prev => ({ ...prev, title: e.target.value }))}
type="text" placeholder="Title" className="input input-bordered input-accent w-full max-w-xs" />
     <input onChange={(e) => setPostData(prev => ({ ...prev, author: e.target.value }))} type="text" placeholder="Author" className="input input-bordered input-accent w-full max-w-xs" />
     <input  onChange={(e) => setPostData(prev => ({ ...prev, genre: e.target.value }))}  type="text" placeholder="Genre" className="input input-bordered input-accent w-full max-w-xs" />
     <input  onChange={(e) => setPostData(prev => ({ ...prev, publicationDate: e.target.value }))}  type="text" placeholder="Publication Date" className="input input-bordered input-accent w-full max-w-xs" />
     <input  onChange={(e) => setPostData(prev => ({ ...prev, bookUrl: e.target.value }))}  type="text" placeholder="Book Url" className="input input-bordered input-accent w-full max-w-xs" />

     <input  className="w-[200px] h-[40px] text-center rounded-md cursor-pointer text-bg-primary bg-btn-primary" value="Submit" type="submit" />
    </form>
  )
}
