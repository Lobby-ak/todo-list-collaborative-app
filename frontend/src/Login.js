// import { useNavigate } from 'react-router-dom';
// import React, { useState } from 'react'; 


// function Login({ onLoginSuccess }) {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch('http://localhost:8080/api/users/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       if (res.ok) {
//         const user = await res.json();
//         setMessage('✅ Login successful!');
//         onLoginSuccess(user);
//         navigate('/account'); // redirect to the account page
//       } else {
//         setMessage('❌ Invalid email or password.');
//       }
//     } catch (error) {
//       setMessage('❌ Network error. Try again later.');
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         /><br/>
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         /><br/>
//         <button type="submit">Login</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// }

// export default Login;


import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react'; 

function Login({ onLoginSuccess }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:8080/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const user = await res.json();
        setMessage('✅ Login successful!');
        onLoginSuccess(user);
        localStorage.setItem('user', JSON.stringify(user)); // Save user info
        navigate(`/account/${user.id}`); // ✅ Dynamic redirect based on user ID
      } else {
        setMessage('❌ Invalid email or password.');
      }
    } catch (error) {
      setMessage('❌ Network error. Try again later.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        /><br/>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        /><br/>
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Login;
