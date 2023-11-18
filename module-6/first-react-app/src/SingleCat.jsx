
const SingleCat = ({ cat }) => {
  return (
    <div className="single-cat">

      <div className="cat-details">
        <h2>{cat.name}</h2>
        <p>Latin Name: {cat.latinName}</p>
      </div>
    </div>
  );
};

export default SingleCat;
