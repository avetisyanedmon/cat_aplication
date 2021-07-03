import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';
import { useState, useEffect } from 'react';

function App() {

  const [categoryOfCat, setCategoryOfCat] = useState('');


  const changeCategory = (item) => {
   return setCategoryOfCat(item);
    
  }

  console.log(categoryOfCat)

  return (
    <div className="App">
        <Sidebar change={changeCategory}/>
        <Content category={categoryOfCat}/>
    </div>
  );
}

export default App;
