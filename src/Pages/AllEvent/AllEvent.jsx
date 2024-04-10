import { Link } from "react-router-dom";

const AllEvent = ({ event }) => {
  const { id, title, img, description } = event;

  const desc = description.slice(0, 50);
  console.log(title);
  console.log(img);

  return (
    <div>
      <Link to={`/allevent/${id}`}>
        {" "}
        <div className="card w-60 bg-base-100 shadow-xl mb-8 cursor-pointer">
          <figure>
            <img className="h-52 w-60" src={img} alt={title} />
          </figure>
          <div className="card-body">
            <h2 className="text-lg font-bold">{title}</h2>
            <p>
              {desc}.....{" "}
              <span className="text-sm cursor-pointer text-green-500">
                read more
              </span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AllEvent;
