// Top boxes with a summary of the database data

import {Link} from 'react-router-dom';
import {HiOutlineArrowRight, HiOutlineClipboardList} from 'react-icons/hi';
import {TbUsers} from 'react-icons/tb';
import {MdStorefront} from 'react-icons/md';
import PropTypes from 'prop-types';

import styles from './DatabaseData.module.scss';

function DatabaseData({title, percent, amount, newAmount, text}) {
	const linkPath = text.split(' ')[2];

	return (
		<div className={styles.smTopCon}>
			<div className={styles.topTitle}>
				<h2>{title}</h2>
				<h2 className={styles.topPercent}>{percent}</h2>
			</div>
			<div className={styles.topAmount}>
				<div>{amount}</div>
				<HiOutlineArrowRight />
				<div>{newAmount}</div>
			</div>
			<div className={styles.topLink}>
				{/* Renders a different icon depending on the title */}
				{title === 'USERS' && <TbUsers className={styles.topIcon} />}
				{title === 'PRODUCTS' && <MdStorefront className={styles.topIcon} />}
				{title === 'ORDERS' && <HiOutlineClipboardList className={styles.topIcon} />}
				{/* Renders a different route path depending on the text */}
				<Link to={`/${linkPath}`} style={{textDecoration: 'none'}}>
					<h3 className={styles.topLinkText}>{text}</h3>
				</Link>
			</div>
		</div>
	);
}

// Needed for ESLint to confirm props of the correct type were passed
DatabaseData.propTypes = {
	title: PropTypes.string.isRequired,
	percent: PropTypes.string.isRequired,
	amount: PropTypes.number.isRequired,
	newAmount: PropTypes.number.isRequired,
	text: PropTypes.string.isRequired
};

export default DatabaseData;
