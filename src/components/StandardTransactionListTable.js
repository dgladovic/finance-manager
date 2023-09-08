import React, { useState, useEffect } from 'react';
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Checkbox,
    IconButton,
    Card,
    CardContent,
    CardHeader,
} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Iconify from './iconify/Iconify';

import categories from '../_mock/categories';

function TransactionTable({ transactions }) {
    const [selectedTransactions, setSelectedTransactions] = useState([]);
    const [showCheckboxes, setShowCheckboxes] = useState(false);

    const renderIcon = (transCat) => {
        const displayCategory = categories.find((cat) => cat.id === transCat);
        return (
            <Avatar sx={{ width: 28, height: 28 }} style={{ display: 'inline-block' }}>
                <div style={{ backgroundColor: displayCategory.color, width: '28px', height: '28px', justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
                    <Iconify icon={displayCategory.iconName} width={22} />
                </div>
            </Avatar>
        )
    }

    const handleCheckboxChange = (transaction) => {
        if (selectedTransactions.includes(transaction)) {
            setSelectedTransactions(selectedTransactions.filter((t) => t !== transaction));
        } else {
            setSelectedTransactions([...selectedTransactions, transaction]);
        }
    };

    const handleButtonClick = (transaction) => {
        // Handle the click event for the button, e.g., navigate to the overview page.
        // Replace the alert with your navigation logic.
        alert(`View details for transaction with ID: ${transaction.id}`);
    };

    return (
        <TableContainer component={Paper} style={{ width: '100%' }}>
            <Table>
                <TableHead>
                    <TableRow>
                        {showCheckboxes && (
                            <TableCell>
                                <Checkbox
                                    indeterminate={
                                        selectedTransactions.length > 0 && selectedTransactions.length < transactions.length
                                    }
                                    checked={selectedTransactions.length === transactions.length}
                                    onChange={() =>
                                        selectedTransactions.length === transactions.length
                                            ? setSelectedTransactions([])
                                            : setSelectedTransactions(transactions.map((t) => t.id))
                                    }
                                />
                            </TableCell>
                        )}
                        <TableCell sx={{ width: 40, paddingLeft: 2 }}>Date</TableCell>
                        <TableCell sx={{ width: 40, padding: 0 }}>Category</TableCell>
                        <TableCell style={{ whiteSpace: 'normal' }}>Label</TableCell>
                        <TableCell sx={{ padding: 1 }}>Amount</TableCell>
                        <TableCell sx={{ width: 40, padding: 0.5 }}>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {transactions.map((transaction) => (
                        <TableRow key={transaction.id}>
                            {showCheckboxes && (
                                <TableCell>
                                    <Checkbox
                                        checked={selectedTransactions.includes(transaction.id)}
                                        onChange={() => handleCheckboxChange(transaction.id)}
                                    />
                                </TableCell>
                            )}
                            <TableCell style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                {transaction.date}
                            </TableCell>
                            <TableCell style={{ width: '30px', whiteSpace: 'nowrap' }}>
                                {renderIcon(transaction.category)}
                            </TableCell>
                            <TableCell style={{ whiteSpace: 'normal' }}>{transaction.label}</TableCell>
                            <TableCell sx={{padding: 2.3 }}>{transaction.amount}</TableCell>
                            <TableCell sx={{ width: 24, paddingLeft: 2.2 }}>
                                <Iconify icon={'material-symbols:info'} width={24}
                                    onClick={() => handleButtonClick(transaction)}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TransactionTable;
