import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addCustomerAction, removeCustomerAction} from "./store/customerReducer";

function App() {
  // чтобы как то изменить состояние нужен dispatch
  const dispatch = useDispatch();
  // получаем состояние
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  const addCash = (cash) => {
    dispatch({type: 'ADD_CASH', payload: cash});
  }

  const getCash = (cash) => {
    dispatch({type: 'GET_CASH', payload: cash});
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now()
    }
    dispatch(addCustomerAction(customer));
  }

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  }

  return (
    <div className="App">
      <div style={{fontSize: '40px'}}>{cash}</div>
      <div className="buttons-block">
        <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
        <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
        <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
      </div>

      {
        customers.length > 0 ? (
          <div>
            {customers.map((customer) => (
              <div
                key={customer?.id}
                style={{fontSize: '20px', border: '1px solid black', padding: '10px', marginTop: 5}}
                onClick={() => removeCustomer(customer)}
              >
                {customer?.name}
              </div>
            ))}
          </div>
        ) : (
          <div style={{fontSize: '2rem', marginTop: 20}}>Клиенты отсутствуют</div>
        )
      }
    </div>
  );
}

export default App;
