import logo from './logo.svg';
import './App.css';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Inventory from './Pages/Inventories/Inventories';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Header from './Pages/Home/Header/Header';
import Blogs from './Pages/Blogs/Blogs';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Reset from './Pages/SignUp/Reset';
import Footer from './Pages/Footer/Footer';
import MyItems from './Pages/MyItems/MyItems';
import AddItems from './Pages/AddItems/AddItems';
import ManageItems from './Pages/ManageItems/ManageItems';
import About from './Pages/About/About';
import SignUp from './Pages/SignUp/SignUp';
import InventoryItems from './Pages/InventoryItems/InventoryItems';
import Inventories from './Pages/Inventories/Inventories';
import Restock from './Pages/Restock/Restock';


function App() {
  return (
    <div>
      <Header></Header>
      
     <Routes>
     
     <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventoryitems/:inventoryId' element={ 
        <RequireAuth>
          <InventoryItems></InventoryItems>
        </RequireAuth>
        }></Route>
     <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventories' element={ 
        <RequireAuth>
          <Inventories></Inventories>
        </RequireAuth>
        }></Route>
        <Route path='/restock/:inventoryId' element={ 
        <RequireAuth>
          <Restock></Restock>
        </RequireAuth>
        }></Route>
        <Route path='/manageitems' element={ 
        <RequireAuth>
          <ManageItems></ManageItems>
        </RequireAuth>
        }></Route>
        <Route path='/myitems' element={ 
        <RequireAuth>
          <MyItems></MyItems>
        </RequireAuth>
        }></Route>
        <Route path='/additems' element={ 
        <RequireAuth>
          <AddItems></AddItems>
        </RequireAuth>
        }></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/reset' element={<Reset></Reset>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        
        <Route path='/*' element={<NotFound></NotFound>}></Route>
        

     </Routes>
     
    </div>
  );
}

export default App;
