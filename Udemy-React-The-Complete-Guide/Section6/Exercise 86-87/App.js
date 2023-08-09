import Todo from './Todo';
import './styles.css';

const DUMMY_TODOS=[
    'Learn React',
    'Practice React',
    'Profit!'
];
export default function App(){
    return(
        <ul>
            {DUMMY_TODOS.map(todo => 
                <Todo text={todo}/>
            )}
        </ul>
    )
}