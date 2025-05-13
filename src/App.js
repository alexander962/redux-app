import './App.css';
import {useDispatch, useSelector} from "react-redux";

function App() {
  // чтобы как то изменить состояние нужен dispatch
  const dispatch = useDispatch();
  // получаем состояние
  const cash = useSelector((state) => state.cash.cash);

  const addCash = (cash) => {
    dispatch({type: 'ADD_CASH', payload: cash});
  }

  const getCash = (cash) => {
    dispatch({type: 'GET_CASH', payload: cash});
  }

  return (
    <div className="App">
      <div style={{fontSize: '40px'}}>{cash}</div>
      <div className="buttons-block">
        <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
        <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
      </div>
    </div>
  );
}

export default App;
