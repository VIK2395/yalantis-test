import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Month from './components/Month.jsx';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://yalantis-react-school-api.yalantis.com/api/task0/users')
    .then(response => response.json())
    .then(users => setUsers(users))
  }, []);

  const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

  const monthElemArray = months.map((month, index) => {
    const monthUsers = users.filter(user => new Date(user.dob).getMonth() === index);
    return (
      <Month key = {month} month = {month} users = {monthUsers} />
    )
  })

  return (
    <div className='container'>{monthElemArray}</div>
  );
}

export default App;
