// Summary of orders page for admin

import Sidebar from '../../components/Sidebar/Sidebar';

import styles from './Orders.module.scss';

function Orders() {
	const ordersData = [
		{
			id: 1,
			user: 'Christian Demesa',
			items: 3,
			amount: 40,
			status: 'processing'
		},
		{
			id: 2,
			user: 'Bianca Vazquez',
			items: 18,
			amount: 1339.99,
			status: 'shipping'
		}
	];

	return (
		<div className={styles.layout}>
			<Sidebar />
			<div className={styles.container}>
				<div className={styles.topCon}>
					<h2 className={styles.title}>ORDERS</h2>
					<button type='button' className={styles.createBtn}>
						Add New Order
					</button>
				</div>
				<table className={styles.table}>
					<thead className={styles.tableRow}>
						<th className={styles.tableHeading}>ID</th>
						<th className={styles.tableHeading}>User</th>
						<th className={styles.tableHeading}>Items</th>
						<th className={styles.tableHeading}>Amount</th>
						<th className={styles.tableHeading}>Status</th>
						<th className={styles.tableHeading}>Actions</th>
					</thead>
					{ordersData.map(({id, user, items, amount, status}) => (
						<tbody key={id} className={styles.tableRow}>
							<td className={styles.tableData}>{id}</td>
							<td className={styles.tableData}>{user}</td>
							<td className={styles.tableData}>{items}</td>
							<td className={styles.tableData}>${amount.toFixed(2)}</td>
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

export default Orders;
