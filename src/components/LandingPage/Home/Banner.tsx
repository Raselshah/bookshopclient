import { useNavigate } from "react-router-dom"


export default function Banner() {
  const navigate = useNavigate()
  return (
    <div className="mb-[30px] ">
     <div className="hero min-h-[500px] " style={{backgroundImage: 'url(https://images.unsplash.com/photo-1643250048998-7ffa83ae2c63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Paperback Perfection</h1>
      <p className="mb-5">A Bookworm's Paradise. Lose yourself in captivating stories and find your next literary treasure.</p>
      <button onClick={() => navigate('/add-book')} className="btn btn-bg-primary">Add new Book</button>
    </div>
  </div>
</div>
    </div>
  )
}
