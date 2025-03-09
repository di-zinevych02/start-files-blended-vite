import Text from '../components/Text/Text';
import Form from "../components/Form/Form";
import { nanoid } from 'nanoid';

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = text => {
    console.log("text", text);
    const addTodo = text => {
      const newTodo = {
        id: nanoid(5),
        text: text,
      };
      setTodos([...todos, newTodo]);
  };

  return (
    <>
      <Form onSubmit={addTodo}/>
      <Text textAlign="center">There are no any todos ...</Text>
    </>
  );
};

  export default Todos;
