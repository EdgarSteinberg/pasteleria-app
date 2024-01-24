import 'bootstrap/dist/css/bootstrap.min.css';
import { StoreProvider } from './utils/store';
import CartListContainer from './cartListContainer/cartListContainer';

function App() {

  return (
    <>
      <StoreProvider>
        <CartListContainer />
      </StoreProvider>
    </>
  )
}

export default App
