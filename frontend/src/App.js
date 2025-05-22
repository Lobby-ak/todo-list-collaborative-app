// import { Routes, Route } from 'react-router-dom';
// import Register from './Register';
// import Login from './Login';
// import Account from './Account';

// function App() {
//   const handleLoginSuccess = (user) => {
//     console.log('Logged in user:', user);
//     localStorage.setItem('user', JSON.stringify(user));
//   };

//   return (
//     <Routes>
//       <Route path="/" element={
//         <>
//           <Register />
//           <Login onLoginSuccess={handleLoginSuccess} />
//         </>
//       } />
//       <Route path="/Account" element={<Account />} />
//     </Routes>
//   );
// }

// export default App;


import { Routes, Route, useNavigate } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Account from './Account';

function App() {
  const navigate = useNavigate();

  const handleLoginSuccess = (user) => {
    console.log('Logged in user:', user);
    localStorage.setItem('user', JSON.stringify(user));
    navigate(`/account/${user.id}`); // 👈 redirect to user-specific page
  };

  return (
    <Routes>
      <Route path="/" element={
        <>
          <Register />
          <Login onLoginSuccess={handleLoginSuccess} />
        </>
      } />
      <Route path="/account/:id" element={<Account />} />
    </Routes>
  );
}

export default App;
