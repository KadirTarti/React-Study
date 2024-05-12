import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";

const Card = ({ blog }) => {
  return (

    <div className="card">
      <img src={blog.image} alt={blog.title} />
      <h3>{blog.title}</h3>
      <p>{blog.content.substring(0, 100)}...</p>
      <button>Read More</button>
    </div>
  );
};

export default Card;