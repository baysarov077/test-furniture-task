import { BrowserRouter, Route, Routes } from "react-router-dom";
import OneSofa from "./components/oneSofa/index.jsx";
import Main from "./Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/sofas/:id' element={<OneSofa />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
