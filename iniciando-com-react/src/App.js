import Routas from "./routes";

import Navbar from "./components/navbar";
import Home from "./views/Home";

import history from './services/history'
import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer} from 'react-toastify'


export default function App() {
  return (
    <div >
              <ToastContainer autoClose={3000}/>

        <Routas/>
    </div>
  );
}

