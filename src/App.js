import {Routes, Route} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Dashboard from './pages/Dashboard/Dashboard';
import Users from './pages/Users/Users';
import Products from './pages/Products/Products';
import Orders from './pages/Orders/Orders';

function App() {
	return (
		<Routes>
			{/* Renders the Navbar on every route */}
			<Route path='/' element={<Navbar />}>
				{/* index renders Dashboard on path='/' */}
				<Route index element={<Dashboard />} />
				<Route path='/users' element={<Users />} />
				<Route path='/products' element={<Products />} />
				<Route path='/orders' element={<Orders />} />
			</Route>
		</Routes>
	);
}

export default App;
