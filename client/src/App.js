import {Route, BrowserRouter, Routes} from 'react-router-dom';

import Home from "./views/home/home.component";
import Detail from "./views/detail/detail.component";
import Create from "./views/create/create.component";
//import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>  
           <Route exact path="/home" component={ <Home />}/>
           <Route path="/home/:id" component={ <Detail />}/>
           <Route path="/create" component={ <Create />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;