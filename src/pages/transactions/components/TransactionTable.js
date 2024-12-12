import React from 'react';
import Button from '../../../components/Button';
import './TransactionTable.css';

function TransactionTable({ transactions, onEdit, onCancel }) {
    return (
        <div className="transactions-card">
            {transactions.length > 0 ? (
                <table className="transactions-table">
                    <thead>
                    <tr>
                        <th>Transaction Date</th>
                        <th>Amount</th>
                        <th>Recipient</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {transactions.map((transaction) => (
                        <tr key={transaction.transactionId} className="transaction-row">
                            <td>{transaction.transactionDate}</td>
                            <td>${transaction.amount}</td>
                            <td>{transaction.recipientSender}</td>
                            <td>{transaction.type}</td>
                            <td>{transaction.status}</td>
                            <td className="transaction-actions">
                                {(transaction.status === 'Initiated' || transaction.status === 'Processing') && (
                                    <>
                                        <Button
                                            label="Edit"
                                            type="confirm"
                                            onClick={() => onEdit(transaction)}
                                        />
                                        <Button
                                            label="Cancel"
                                            type="cancel"
                                            onClick={() => onCancel(transaction)}
                                        />
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            ) : (
                <p className="no-transactions-message">
                    No transactions found for the selected filters.
                </p>
            )}
        </div>
    );
}

export default TransactionTable;
