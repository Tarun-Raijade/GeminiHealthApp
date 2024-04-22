import Header from './components/Header/Header';
import { Outlet} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';

const AppLayout = () => {
	return (
	  <div className="app">
		<Header />
		<Outlet />
		<Footer />
	  </div>
	);
  };


export default AppLayout;