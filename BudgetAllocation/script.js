const tableBody = document.querySelector('#tbody');   
const tableData = [
    { date: '2023-10-01', description: 'Office Supplies', amount: '₱1,500.00', action: 'View' },
    { date: '2023-10-02', description: 'Travel Expenses', amount: '₱3,000.00', action: 'View' },
    { date: '2023-10-03', description: 'Utility Bills', amount: '₱2,200.00', action: 'View' },
    { date: '2023-10-04', description: 'Marketing Campaign', amount: '₱5,000.00', action: 'View' },
    { date: '2023-10-05', description: 'Software Subscription', amount: '₱2,500.00', action: 'View' }
];
const renderTableData = () => {
     const tableRows = tableData.map((data) => {
        return `
            <tr>
                <td>${data.date}</td>
                <td>${data.description}</td>
                <td>${data.amount}</td>  
                <td><button class = "btn btn-primary">Action</button></td>
            </tr>
        `;
     });
        tableBody.innerHTML = tableRows.join('');
}
renderTableData();