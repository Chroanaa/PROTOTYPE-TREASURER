const tableBody = document.querySelector('#tbody');   
const tableData = [
    { date: '2023-10-01', description: 'Office Supplies', category: 'Office', amount: '$150.00', type: 'Expense', status: 'Approved', action: 'Edit' },
    { date: '2023-10-02', description: 'Client Dinner', category: 'Entertainment', amount: '$300.00', type: 'Expense', status: 'Pending', action: 'Edit' },
    { date: '2023-10-03', description: 'Electricity Bill', category: 'Utilities', amount: '$200.00', type: 'Expense', status: 'Approved', action: 'Edit' },
    { date: '2023-10-04', description: 'Marketing Campaign', category: 'Marketing', amount: '$500.00', type: 'Expense', status: 'Rejected', action: 'Edit' },
    { date: '2023-10-05', description: 'Software Subscription', category: 'Software', amount: '$250.00', type: 'Expense', status: 'Approved', action: 'Edit' }
];
const renderTableData = () => {
     const tableRows = tableData.map((data) => {
        return `
            <tr>
                <td>${data.date}</td>
                <td>${data.description}</td>
                <td>${data.category}</td>
                <td>${data.amount}</td>
                <td>${data.type}</td>
                <td>${data.status}</td>
                <td><button class = "btn btn-primary">Action</button></td>
            </tr>
        `;
     });
        tableBody.innerHTML = tableRows.join('');
}
renderTableData();