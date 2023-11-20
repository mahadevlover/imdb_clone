
import './App.css';
import Home from './pages/Home.jsx'
import CategoryMovies from './pages/CategoryMovies.jsx';

import { routhPath } from './constants/route.js';

import { BrowserRouter as Router , Route , Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      
      <Routes>
          <Route path = {routhPath.home} element ={ <Home />} />
          <Route path = {routhPath.categories} element = {<CategoryMovies />}  />
          <Route path= {routhPath.invalid}    element = { <Home />}  />
      </Routes>

    </Router>
  );
}

export default App;
