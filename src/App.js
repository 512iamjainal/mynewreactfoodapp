import { useState, useEffect } from 'react';
import firebase from './firebase';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
// import Login from './components/Login/Login';

function App() {

  const ref = firebase.firestore().collection("developers")
  // console.log(ref);

  const [data, setData] = useState([])
  const [loader, setLoader] = useState(true)

  function getData(){
    ref.onSnapshot((querySnapshot) => {
      const items = []
      querySnapshot.forEach((doc) => {
        items.push(doc.data())
      })
      setData(items)
      setLoader(false)
    })
  }

  useEffect(() => {
    getData()
  }, [])

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <>
    {/* <div className="app">
      {loader === false && (data.map((dev) => {
        <div key={dev.id}>
          <h2>{dev.name}</h2>
          <p>{dev.skill}</p>
        </div>
    }))
  }
    </div> */}
    {/* <Login /> */}
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
    </>
  );
}

export default App;
