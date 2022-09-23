// Summary of Products page for admin

import Sidebar from '../../components/Sidebar/Sidebar';

import styles from './Products.module.scss';

function Products() {
	const productsData = [
		{
			id: 1,
			name: 'Boots',
			price: 50,
			size: ['S', 'M'],
			color: ['black', 'brown'],
			img: 'https://cdn.shopify.com/s/files/1/0522/6712/2861/products/M4091WF_90DEGREE_2000x.png?v=1628060531'
		},
		{
			id: 2,
			name: 'Jeans',
			price: 35,
			size: ['S', 'M', 'L'],
			color: ['blue'],
			img: 'https://cdn11.bigcommerce.com/s-hgn1l9sh63/images/stencil/1000w/products/523/46580/6556c65319be06e9fba9642a63207ddcadce9f5e__54180.1615574840.386.513.png?c=1'
		},
		{
			id: 3,
			name: 'Dress',
			price: 55,
			size: ['XS'],
			color: ['black', 'white', 'red'],
			img: 'https://images.squarespace-cdn.com/content/v1/5c98f38a348cd971aa29db73/1557868627731-K64OXS4R9DBIIMY8HMNB/The+Carolyn+-+Black+back.png?format=1000w'
		}
	];

	return (
		<div className={styles.layout}>
			<Sidebar />
			<div className={styles.container}>
				<div className={styles.topCon}>
					<h2 className={styles.title}>PRODUCTS</h2>
					<button type='button' className={styles.createBtn}>
						Add New Product
					</button>
				</div>
				<table className={styles.table}>
					<thead className={styles.tableRow}>
						<th className={styles.tableHeading}>ID</th>
						<th className={styles.tableHeading}>Name</th>
						<th className={styles.tableHeading}>Price</th>
						<th className={styles.tableHeading}>Size</th>
						<th className={styles.tableHeading}>Color</th>
						<th className={styles.tableHeading}>Image</th>
						<th className={styles.tableHeading}>Actions</th>
					</thead>
					{productsData.map(({id, name, price, size, color, img}) => (
						<tbody key={id} className={styles.tableRow}>
							<td className={styles.tableData}>{id}</td>
							<td className={styles.tableData}>{name}</td>
							<td className={styles.tableData}>${price.toFixed(2)}</td>
							<td className={styles.tableData}>{size.join(', ')}</td>
							<td className={styles.tableData}>{color.join(', ')}</td>
							<td className={styles.tableData}>
								<img src={img} alt={name} className={styles.img} />
							</td>
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

export default Products;
