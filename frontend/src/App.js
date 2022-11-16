import logo from './logo.svg';
import NavBar from './components/navBar/NavBar';
import Login from './pages/login/Login';
import AddUsers from './pages/addUsers/AddUsers';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Login />
      {/* <AddUsers /> */}
    </div>
  );
}

export default App;
