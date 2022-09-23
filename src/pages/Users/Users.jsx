// Summary of users page for admin

import Sidebar from '../../components/Sidebar/Sidebar';

import styles from './Users.module.scss';

function Users() {
	// Dummy data to fill the table
	const usersData = [
		{
			id: 1,
			username: 'Christian Demesa',
			email: 'christian@gmail.com',
			admin: true,
			status: 'online'
		},
		{
			id: 2,
			username: 'Bianca Vazquez',
			email: 'bianca@gmail.com',
			admin: true,
			status: 'offline'
		},
		{
			id: 3,
			username: 'James Vazquez',
			email: 'james@gmail.com',
			admin: false,
			status: 'offline'
		},
		{
			id: 4,
			username: 'Mateo Vazquez',
			email: 'mateo@gmail.com',
			admin: false,
			status: 'online'
		}
	];

	return (
		<div className={styles.layout}>
			<Sidebar />
			<div className={styles.container}>
				{/* Page name and Create button */}
				<div className={styles.topCon}>
					<h2 className={styles.title}>USERS</h2>
					<button type='button' className={styles.createBtn}>
						Add New User
					</button>
				</div>
				{/* Table */}
				<table className={styles.table}>
					<thead className={styles.tableRow}>
						<th className={styles.tableHeading}>ID</th>
						<th className={styles.tableHeading}>Username</th>
						<th className={styles.tableHeading}>Email</th>
						<th className={styles.tableHeading}>Admin</th>
						<th className={styles.tableHeading}>Status</th>
						<th className={styles.tableHeading}>Actions</th>
					</thead>
					{usersData.map(({id, username, email, admin, status}) => (
						<tbody key={id} className={styles.tableRow}>
							<td className={styles.tableData}>{id}</td>
							<td className={styles.tableData}>{username}</td>
							<td className={styles.tableData}>{email}</td>
							<td className={styles.tableData}>{admin ? 'Yes' : 'No'}</td>
							<td className={styles.tableData}>{status}</td>
							<td className={styles.tableData}>
								<button type='button' className={styles.editBtn}>
									Edit
								</button>
								<button type='button' className={styles.deleteBtn}>
									Delete
								</button>
							</td>
						</tbody>
					))}
				</table>
			</div>
		</div>
	);
}

export default Users;
