import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Datapreview from './components/Datapreview';
import Headers from './components/Headers';
import Sidecolumn from './components/Sidecolumn';
import Pagination from './components/Pagination';

function App() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [val, setVal] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users')
      console.log(res);
      setData(res.data)
      setFilter(res.data);
    }
    fetchData();
  }, []);



  const sortNameHandler = (vall) => {
    //immutability and mutability of state
    let sortArray = [...data];
    if (vall === 'name') {
      sortArray.sort((a, b) => a.name.localeCompare(b.name));
    } else if (vall === 'username') {
      sortArray.sort((a, b) => a.username.localeCompare(b.name));
    } else if (vall === 'email') {
      sortArray.sort((a, b) => a.email.localeCompare(b.name));
    } else if (vall === 'phone') {
      sortArray.sort((a, b) => a.phone.localeCompare(b.name));
    }
    console.log(sortArray);
    setFilter(sortArray);
  }
  const valfunction = (vall) => {
    console.log(vall);
    setVal(vall);
    sortNameHandler(vall);
  }
  const pageOne = (pageno) => {

  }
  return (


    <div>
      <div>
        <Headers />
      </div>
      <div className='app-container'>
        <Sidecolumn sortValue={valfunction} />
        <Datapreview data={filter} />
      </div>
      <Pagination />
    </div>

  );
}

export default App;
