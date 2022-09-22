// Side navbar for admin navigation

import {Outlet, Link} from 'react-router-dom';
import {MdOutlineSpaceDashboard, MdStorefront} from 'react-icons/md';
import {TbUsers} from 'react-icons/tb';
import {HiOutlineClipboardList} from 'react-icons/hi';

import styles from './Sidebar.module.scss';

function Sidebar() {
	return (
		<>
			<div className={styles.container}>
				<ul className={styles.list}>
					{/* Inline styling to avoid giving Link a className */}
					<Link to='/' style={{width: '100%', textDecoration: 'none'}}>
						<li className={styles.listItem}>
							<MdOutlineSpaceDashboard className={styles.icon} />
							<h2 className={styles.text}>Dashboard</h2>
						</li>
					</Link>
					<Link to='/users' style={{width: '100%', textDecoration: 'none'}}>
						<li className={styles.listItem}>
							<TbUsers className={styles.icon} />
							<h2 className={styles.text}>Users</h2>
						</li>
					</Link>
					<Link to='/products' style={{width: '100%', textDecoration: 'none'}}>
						<li className={styles.listItem}>
							<MdStorefront className={styles.icon} />
							<h2 className={styles.text}>Products</h2>
						</li>
					</Link>
					<Link to='/orders' style={{width: '100%', textDecoration: 'none'}}>
						<li className={styles.listItem}>
							<HiOutlineClipboardList className={styles.icon} />
							<h2 className={styles.text}>Orders</h2>
						</li>
					</Link>
				</ul>
			</div>
			<Outlet />
		</>
	);
}

export default Sidebar;
