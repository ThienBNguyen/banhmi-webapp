import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from "react-router-dom";
import NavBarView from './Component/CommonView/NavBar/NavBarView'
import HomeView from './Component/HomeView/HomeView'
import Footer from './Component/CommonView/Footer/FooterView'
// import HomeView from './Component/HomeView/HomeView'
function App() {
  return (
    <div className="App">
      <Router>
      <div>
       <NavBarView />
            
            <Switch>
          
          <Route path="/">
            <HomeView />
          </Route>
        </Switch>

    
        {/* <Footer /> */}
      </div>
    </Router>

    </div>
  );
}

export default App;
