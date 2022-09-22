// Summary of latest transactions data

import PropTypes from 'prop-types';

import styles from './TransactionData.module.scss';

function TransactionData({user, amount, time}) {
	return (
		<h4 className={styles.transaction}>
			<span className={styles.user}>{user}</span>
			{/* .toFixed(2) adds 'cents' to the amount */}
			<span className={styles.amount}>${amount.toFixed(2)}</span>
			<span className={styles.time}>{time}</span>
		</h4>
	);
}

TransactionData.propTypes = {
	user: PropTypes.string.isRequired,
	amount: PropTypes.number.isRequired,
	time: PropTypes.string.isRequired
};

export default TransactionData;
