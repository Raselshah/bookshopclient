import { useDeleteBookMutation, useSingleBookQuery } from "@/redux/feature/books/booksSlice";
import { useNavigate, useParams } from "react-router-dom";


export default function DetaiilsBook() {
const navigate = useNavigate()
  const {id} = useParams();
  const { data, isLoading } = useSingleBookQuery(id);
  const [deleteBook, {isSuccess}] = useDeleteBookMutation()

  if(isLoading) {
    return <p>Loading...</p>
  }
  const handleBookDelete = async (id: string) => {
    console.log(data)
    await deleteBook(id)

      navigate("/")
    
  }

  if(isSuccess){
    alert("Book deleted successfully")
  }

  

  return (
   

    <div>
       
     
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={data?.bookUrl}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="flex flex-col gap-y-[4px]">
            <h1 className="text-5xl font-bold">{data?.title}</h1>
            <p className="">
             {data?.author}
            </p>
            <p className="">
             {data?.genre}
            </p>
            <p className="">
             {data?.publicationDate}
            </p>
            <p className="">
             {data?.review}
            </p>

            <div className="flex gap-x-[4px] ">
            <button onClick={() => handleBookDelete(data?._id)} className="bg-btn-warning w-[100px] rounded-md text-bg-white">Delete</button>
              <button onClick={() => navigate(`/update-book/${data?._id}`)} className="bg-btn-primary w-[100px] rounded-md text-bg-white">Edit</button>
             
            </div>
            
          </div>
        </div>
      </div>
   
    </div>
  );
}
