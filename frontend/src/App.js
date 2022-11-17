import logo from './logo.svg';
import NavBar from './components/navBar/NavBar';
import Login from './pages/login/Login';
import { ToastProvider } from "react-toast-notifications";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { ROLES } from './constants/Constants';
import Register from './pages/addUsers/AddUsers';
import AddFiles from './pages/fileUpload'
import { Layout } from 'antd';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastProvider>
          <Layout>
            <NavBar />
            <Switch>
              <Route path={"/"} exact component={Login}></Route>
              <ProtectedRoute
                path={"/register"}
                exact
                roles={[ROLES.ADMIN]}
                component={Register}
              ></ProtectedRoute>
              <ProtectedRoute
                path={"/files"}
                exact
                roles={[ROLES.MANAGER, ROLES.WORKER]}
                component={AddFiles}
              ></ProtectedRoute>

            </Switch>

          </Layout>

        </ToastProvider>
      </BrowserRouter>
      {/* <AddUsers /> */}
    </div>
  );
}

export default App;
