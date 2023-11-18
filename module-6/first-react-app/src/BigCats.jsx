import { useState } from 'react';
import SingleCat from './SingleCat';
import AddCatForm from './AddCatForm';

const initialCats = [
  { name: 'Cheetah', latinName: 'Acinonyx jubatus' },
  { name: 'Cougar', latinName: 'Puma concolor' },
  { name: 'Jaguar', latinName: 'Panthera onca' },
  { name: 'Leopard', latinName: 'Panthera pardus' },
  { name: 'Lion', latinName: 'Panthera leo' },
  { name: 'Snow leopard', latinName: 'Panthera uncia' },
  { name: 'Tiger', latinName: 'Panthera tigris' },
];

const BigCats = () => {
  const [cats, setCats] = useState(initialCats);
  const [reversed, setReversed] = useState(false);

  const sortCatsAlphabetically = () => {
    const sortedCats = [...cats].sort((a, b) => a.name.localeCompare(b.name));
    setCats(sortedCats);
  };

  const reverseCats = () => {
    const reversedCats = [...cats].reverse();
    setCats(reversedCats);
    setReversed(!reversed);
  };

  const resetList = () => {
    setCats(initialCats);
    setReversed(false);
  };

  const deleteCat = (index) => {
    const updatedCats = cats.filter((_, i) => i !== index);
    setCats(updatedCats);
  };

  return (
    <div className="big-cats">
      <div className="buttons">
        <button onClick={sortCatsAlphabetically}>Sort Alphabetically</button>
        <button onClick={reverseCats}>{reversed ? 'Undo Reverse' : 'Reverse List'}</button>
        <button onClick={resetList}>Reset</button>
      </div>
      {cats.map((cat, index) => (
        <div key={index} className="cat-entry">
          <SingleCat cat={cat} />
          <button onClick={() => deleteCat(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default BigCats;
