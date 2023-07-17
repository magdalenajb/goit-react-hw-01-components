import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
    return (
      <table className={styles.transactionHistoryTable}>
        <thead>
          <tr className={styles.valuesRow}>
            <th className={styles.columnHeader}>Type</th>
            <th className={styles.columnHeader}>Amount</th>
            <th className={styles.columnHeader}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => (
            <tr key={item.id} className={styles.valuesRow}>
              <td className={styles.transactionData}>{item.type}</td>
              <td className={styles.transactionData}>{item.amount}</td>
              <td className={styles.transactionData}>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};


