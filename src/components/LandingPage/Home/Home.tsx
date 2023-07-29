import { useGetBookQuery } from "@/redux/feature/books/booksSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Banner from "./Banner";

type IBook = {
  _id: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  bookUrl: string;
  review: string;
};

export default function Home() {
  const navigate = useNavigate()
  const handleNavigate = (id: string) => {
    navigate(`/details/${id}`)
  }
   
      const [search, setSearch] = useState<string>("")
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const { data, isLoading } = useGetBookQuery(search);
      
      if(isLoading) {
        return <p>Loading...</p>
      }


  return (
    <>
      <Navbar />
    <Banner/>
    <div className="flex justify-start items-center gap-x-[20px] xl:max-w-[1100px] md:max-w-[736px] max-w-[343px] mx-auto mb-[20px]">
      <div className="w-[200px] flex justify-center items-center bg-bg-secondary h-[48px] rounded-full">
        <p className="text-base24 text-bg-white">Categories</p>
      </div>
    <div className="form-control w-[500px]">
    <label className="relative block">
  <span className="sr-only">Search</span>
  
  <input onChange={(e) => setSearch(e.target.value)} className=" placeholder:text-txt-secondary block bg-bg-bg_light_secondary w-full border-none border-bg-semiBlue rounded-full h-[48px] pl-9 pr-3 shadow-sm focus:outline-none focus:border-none focus:ring-none text-base14" placeholder="Search product..." type="text" name="search"/>
  <span className="absolute inset-y-0 right-[20px] flex items-center pl-2">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[20px] h-[20px]">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>

  </span>
</label>
    </div>
    </div>
<div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 xl:grid-cols-3 xl:max-w-[1100px] md:max-w-[736px] max-w-[343px] mx-auto">

  {
    data?.length  === 0 && <p>No data.....</p>
  }
  {
    isLoading && <p>Loading...</p>
  }
        {
            data?.slice(0,6)?.map((book:IBook) => ( <div  className="card w-[346.67px] bg-base-100 shadow-xl image-full">
            <figure><img src={book?.bookUrl} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">{book?.title?.slice(0,20)}</h2>
              <p>{book?.author}</p>
              <p>{book?.genre}</p>
              <p>{book?.publicationDate}</p>
              <div className="card-actions justify-center">
                <button onClick={() => handleNavigate(book?._id)} className="bg-bg-white text-txt-primary w-[100px] py-[4px] rounded-sm btn-bg-primary">Details</button>
              </div>
            </div>
          </div>))
        }
     
    </div>
    </>
   
  )
}
