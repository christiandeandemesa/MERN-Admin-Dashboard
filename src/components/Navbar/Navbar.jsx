// Top navbar for admin profile and light/dark mode

import {useState} from 'react';
import {Outlet} from 'react-router-dom';
import {FaRegMoon} from 'react-icons/fa';
import {BsSun} from 'react-icons/bs';

import styles from './Navbar.module.scss';

function Navbar() {
	const [mode, setMode] = useState(true);

	return (
		<>
			<div className={styles.container}>
				<h1 className={styles.logo}>DYSLECIX ADMIN</h1>
				<div className={styles.links}>
					{/* todo Light/Dark mode with useContext */}
					{mode ? (
						<FaRegMoon onClick={() => setMode(false)} className={styles.moon} />
					) : (
						<BsSun onClick={() => setMode(true)} className={styles.sun} />
					)}
					<h2 className={styles.avatar}>CD</h2>
				</div>
			</div>
			{/* Outlet renders other components (look at App.js) */}
			<Outlet />
		</>
	);
}

export default Navbar;
