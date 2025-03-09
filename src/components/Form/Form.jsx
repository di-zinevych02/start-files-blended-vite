import { FiSearch } from 'react-icons/fi';

// const Form = ({ onSubmit }) => {
//   const handleSubmit = (ev) => {
//     ev.preventDefault();
//     const value = ev.target.elements.search.value;
//     if (!value) {
//       alert('empty')
//       return;
//     }
//     onSubmit(value);
//     ev.target.reset();


//   };
//   return (
//   <form className={style.form}>
//     <button className={style.button} type="submit">
//       <FiSearch size="16px" />
//     </button>

//     <input
//       className={style.input}
//       placeholder="What do you want to write?"
//       name="search"
//       required
//       autoFocus
//     />
//   </form>
//   );
// };

// export default Form;
const Form = ({ onSubmit }) => {
  const[value, setValue] = useState('');
  const handleSubmit = (ev) => {
    ev.preventDefault();
    onSubmit(value);
    if (!value.trim()) {
      alert("Empty value")
    }
    


  };
  const handleChange = (ev) => {
    setValue(ev.target.value);
  }
  return (
  <form className={style.form}>
    <button className={style.button} type="submit">
      <FiSearch size="16px" />
    </button>

    <input
      className={style.input}
      placeholder="What do you want to write?"
        name="search"
        value={value}
        onChange={handleChange}
      autoFocus
    />
  </form>
  );
};

export default Form;
