import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  
    console.log(blog)
  
  return (
    <div className="
    max-w-sm w-full lg:max-w-full lg:flex
     "
     >
      <div className="
      lg:h-auto lg:w-2.5 lg:rounded-t-none lg:rounded-l text-center overflow-hidden
      "
      style={{ backgroundImage: "url('/img/card-left.jpg')", title: "Woman holding a mug" }}>
      </div>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 rounded lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal m-2 bg-orange-100 bg-opacity-80">
        <div className="mb-8">
          <p className="text-sm text-gray-600 flex items-center">
            <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
            </svg>
            Members only
          </p>
          <Link to={`/dashboard/${blog._id}`}>
          <img src={blog.image} className="max-w-s lg:max-w-lg xl:max-w-xl w-80" alt="Blog Image" />
        </Link>
          
          <div className="text-gray-900 font-bold text-xl mb-2">{blog.title}</div>
          <p className="text-gray-700 text-base max-w-s lg:max-w-lg xl:max-w-xl w-80">{blog.content.substring(0, 100)}...</p>
        </div>
        <div className="flex items-center">
          <img className="w-10 h-10 rounded-full mr-4" src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2QYwLJsJgc8srsbncqE7mBGwwOcTe4_fe5SRc-fVAVQ&s" alt={blog.title} />
          <div className="text-sm">
            <p className="text-gray-900 leading-none">Jonathan Reinink</p>
            <p className="text-gray-600">Aug 18</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;


{/* 
    <div className="card">
      <img src={blog.image} alt={blog.title} />
      <h3>{blog.title}</h3>
      <p>{blog.content.substring(0, 100)}...</p>
      <button>Read More</button>
    </div> */}

