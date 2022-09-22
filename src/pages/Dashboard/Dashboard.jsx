// Dashboard page with a summary for the admin

import {ResponsiveContainer, AreaChart, Area, YAxis, XAxis, CartesianGrid, Tooltip} from 'recharts';

import Sidebar from '../../components/Sidebar/Sidebar';
import TransactionData from '../../components/TransactionData/TransactionData';
import DatabaseData from '../../components/DatabaseData/DatabaseData';

import styles from './Dashboard.module.scss';

function Dashboard() {
	// data, gradientOffset, and off borrowed from https://recharts.org/en-US/examples/AreaChartFillByValue for dummy data
	const data = [
		{
			name: 'APR 2022',
			uv: 4000,
			pv: 2400,
			amt: 2400
		},
		{
			name: 'MAY 2022',
			uv: 3000,
			pv: 1398,
			amt: 2210
		},
		{
			name: 'JUNE 2022',
			uv: -1000,
			pv: 9800,
			amt: 2290
		},
		{
			name: 'JULY 2022',
			uv: 500,
			pv: 3908,
			amt: 2000
		},
		{
			name: 'AUG 2022',
			uv: -2000,
			pv: 4800,
			amt: 2181
		},
		{
			name: 'SEPT 2022',
			uv: -250,
			pv: 3800,
			amt: 2500
		}
	];

	const gradientOffset = () => {
		const dataMax = Math.max(...data.map(i => i.uv));
		const dataMin = Math.min(...data.map(i => i.uv));

		if (dataMax <= 0) {
			return 0;
		}
		if (dataMin >= 0) {
			return 1;
		}

		return dataMax / (dataMax - dataMin);
	};

	const off = gradientOffset();

	return (
		<div className={styles.layout}>
			<Sidebar />

			{/* Everything to the right of the sidebar */}
			<div className={styles.container}>
				{/* Top boxes for a summary of the database data */}
				<div className={styles.topCon}>
					<DatabaseData
						title='USERS'
						percent='+5%'
						amount={1000}
						newAmount={1050}
						text='See all users'
					/>
					<DatabaseData
						title='PRODUCTS'
						percent='-5%'
						amount={2000}
						newAmount={1980}
						text='See all products'
					/>
					<DatabaseData
						title='ORDERS'
						percent='+10%'
						amount={3000}
						newAmount={3300}
						text='See all orders'
					/>
				</div>
				<div className={styles.botCon}>
					{/* Revenue area chart */}
					<div className={styles.chart}>
						<h2 className={styles.chartTitle}>REVENUE (last 6 months)</h2>
						<ResponsiveContainer width='100%' height='100%'>
							<AreaChart
								data={data}
								margin={{
									top: 10,
									right: 30,
									left: 0,
									bottom: 0
								}}
							>
								<CartesianGrid strokeDasharray='3 3' />
								<XAxis dataKey='name' />
								<YAxis />
								<Tooltip />
								<defs>
									<linearGradient id='splitColor' x1='0' y1='0' x2='0' y2='1'>
										<stop offset={off} stopColor='green' stopOpacity={1} />
										<stop offset={off} stopColor='red' stopOpacity={1} />
									</linearGradient>
								</defs>
								<Area
									type='monotone'
									dataKey='uv'
									stroke='#000'
									fill='url(#splitColor)'
								/>
							</AreaChart>
						</ResponsiveContainer>
					</div>
					{/* Summary of latest transactions data */}
					<div className={styles.smBotCon}>
						<h2 className={styles.botTitle}>LATEST TRANSACTIONS</h2>
						<div className={styles.transactions}>
							<TransactionData
								user='Christian Demesa'
								amount={100}
								time='1 hour ago'
							/>
							<TransactionData
								user='Christian Demesa'
								amount={150}
								time='1 day ago'
							/>
							<TransactionData
								user='Bianca Vazquez'
								amount={2000}
								time='3 days ago'
							/>
							<TransactionData user='Mateo Vazquez' amount={1.5} time='1 week ago' />
							<TransactionData
								user='James Vazquez'
								amount={4.99}
								time='1 month ago'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
