import { useSingleBookQuery, useUpdateBookMutation } from "@/redux/feature/books/booksSlice";
import { useState } from "react";
import { useParams } from "react-router-dom";


export default function UpdateBook() {
  const {id} = useParams();
  const { data } = useSingleBookQuery(id);
    const [updateBook, {  isSuccess }] =
    useUpdateBookMutation();

    const [postData, setPostData] = useState({
        title:"",
        author:"",
        genre:"",
        publicationDate:"",
        bookUrl:""
    })
    const options = {
        id: data?._id,
        postData
      };
const handleSubmit = async (e: { preventDefault: () => void; })  => {
    e.preventDefault();
    try {
        await updateBook(options);
        // Handle success, e.g., show a success message or redirect to another page
      } catch (error) {
        // Handle error, e.g., show an error message
      }
    }
if(isSuccess){
    alert("Successfully update book");
    
}
  return (
    <div>
      
        <form onSubmit={handleSubmit} className="flex gap-y-[12px] flex-col mx-auto max-w-[343px] justify-center items-center h-screen">
     <input defaultValue={data?.title} onChange={(e) => setPostData(prev => ({ ...prev, title: e.target.value }))}
type="text" placeholder="Title" className="input input-bordered input-accent w-full max-w-xs" />
     <input defaultValue={data?.author} onChange={(e) => setPostData(prev => ({ ...prev, author: e.target.value }))} type="text" placeholder="Author" className="input input-bordered input-accent w-full max-w-xs" />
     <input defaultValue={data?.genre}  onChange={(e) => setPostData(prev => ({ ...prev, genre: e.target.value }))}  type="text" placeholder="Genre" className="input input-bordered input-accent w-full max-w-xs" />
     <input defaultValue={data?.publicationDate}  onChange={(e) => setPostData(prev => ({ ...prev, publicationDate: e.target.value }))}  type="text" placeholder="Publication Date" className="input input-bordered input-accent w-full max-w-xs" />
     <input defaultValue={data?.bookUrl}  onChange={(e) => setPostData(prev => ({ ...prev, bookUrl: e.target.value }))}  type="text" placeholder="Book Url" className="input input-bordered input-accent w-full max-w-xs" />

   
       
     <input  className="w-[200px] h-[40px] text-center rounded-md cursor-pointer text-bg-primary bg-btn-primary" value="Submit" type="submit" />
  
    </form>
    </div>
  )
}
