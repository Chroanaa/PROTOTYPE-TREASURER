const tableBody = document.querySelector('#tbody');   
const tableData = [
    { date: '2023-10-01', type: 'Membership Fee', amountDue: '$100.00', amountPaid: '$100.00', status: 'Paid', action: 'View' },
    { date: '2023-10-02', type: 'Event Fee', amountDue: '$50.00', amountPaid: '$25.00', status: 'Partial', action: 'View' },
    { date: '2023-10-03', type: 'Late Fee', amountDue: '$20.00', amountPaid: '$0.00', status: 'Unpaid', action: 'View' },
    { date: '2023-10-04', type: 'Service Fee', amountDue: '$75.00', amountPaid: '$75.00', status: 'Paid', action: 'View' },
    { date: '2023-10-05', type: 'Donation', amountDue: '$0.00', amountPaid: '$50.00', status: 'N/A', action: 'View' },
    { date: '2023-10-05', type: 'Donation', amountDue: '$0.00', amountPaid: '$50.00', status: 'N/A', action: 'View' },
    { date: '2023-10-05', type: 'Donation', amountDue: '$0.00', amountPaid: '$50.00', status: 'N/A', action: 'View' },
    { date: '2023-10-05', type: 'Donation', amountDue: '$0.00', amountPaid: '$50.00', status: 'N/A', action: 'View' },

];

const renderTableData = () => {
     const tableRows = tableData.map((data) => {
        return `
            <tr>
                <td>${data.date}</td>
                <td>${data.type}</td>
                <td>${data.amountDue}</td>
                <td>${data.amountPaid}</td>
                <td>${data.status}</td>
                <td><button class = "btn btn-primary">Action</button></td>
            </tr>
        `;
     });
        tableBody.innerHTML = tableRows.join('');
}
renderTableData();