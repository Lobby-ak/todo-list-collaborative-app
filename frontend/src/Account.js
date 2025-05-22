import { useNavigate } from 'react-router-dom';

function Account() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div>
      <h2>Welcome to your account, {user?.name} </h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Account;
