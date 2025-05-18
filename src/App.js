import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {asyncDecrementCreator, asyncIncrementCreator} from "./store/countReducer";
import {fetchUsers} from "./store/userReducer";

function App() {
  const count = useSelector((state) => state.countReducer.count);
  const users = useSelector((state) => state.userReducer.users);
  const dispatch = useDispatch();

  console.log(users)

  return (
    <div className="App">
      <div style={{fontSize: '40px'}}>{count}</div>
      <div className="buttons-block">
        <button onClick={() => dispatch(asyncIncrementCreator())}>Инкремент++</button>
        <button onClick={() => dispatch(asyncDecrementCreator())}>Декремент--</button>
        <button onClick={() => dispatch(fetchUsers())}>Получить юзеров--</button>
      </div>
      <div className='users'>
        {users?.map(user =>
            <div className='user'>
              {user?.name}
            </div>
        )}
      </div>
    </div>
  );
}

export default App;
