  import {useState} from 'react';



    function AddCatForm({onAddCat}) {
      const [name, setName] = useState('')
      const [latinName, setLatinName] = useState('')
      
      const handleNameChange = (event) => {
        setName(event.target.value);
      };
      
    
      const handleLatinNameChange = (event) => {
        setLatinName(event.target.value);
      };
      
  
      const handleSubmit = (event) => {
        event.preventDefault();
        if (name && latinName) {
          const newCat = {name, latinName};
          onAddCat(newCat);
          setName('');
          setLatinName('');
        }
      };
    

return(
    <form onSubmit={handleSubmit}>
      <label> Cat Name:
     <input
     type='text'
     placeholder='Name'
     value={name}
     onChange={handleNameChange}
     />
     </label>

     <label> Latin Name:
     <input
     type='text'
     placeholder=' Latin Name'
     value={latinName}
     onChange={handleLatinNameChange}
     />
     </label>
     <button type='submit'> Add Cat</button>
    </form>
   );
    }

   export default AddCatForm;