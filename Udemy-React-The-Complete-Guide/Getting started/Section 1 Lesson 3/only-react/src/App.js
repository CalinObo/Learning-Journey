import Todo from './components/Todo';

function App(){
    return(
        <div>
            <h1>My Todos</h1>
            <Todo text='Learn React'/>
            <Todo text='Push to git'/>
        </div>
    )
}

export default App;