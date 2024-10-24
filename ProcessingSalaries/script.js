const tableBody = document.querySelector('#tbody');   
const tableData = [
    { employeeName: 'Juan Dela Cruz', position: 'Barangay Captain', baseSalary: '₱30,000.00', deductions: '₱5,000.00', taxes: '₱3,000.00', status: 'Active' },
    { employeeName: 'Maria Clara', position: 'Barangay Secretary', baseSalary: '₱25,000.00', deductions: '₱4,000.00', taxes: '₱2,500.00', status: 'Active' },
    { employeeName: 'Jose Rizal', position: 'Barangay Treasurer', baseSalary: '₱28,000.00', deductions: '₱4,500.00', taxes: '₱2,800.00', status: 'Inactive' },
    { employeeName: 'Andres Bonifacio', position: 'Barangay Kagawad', baseSalary: '₱22,000.00', deductions: '₱3,500.00', taxes: '₱2,200.00', status: 'Active' },
    { employeeName: 'Emilio Aguinaldo', position: 'Barangay Kagawad', baseSalary: '₱22,000.00', deductions: '₱3,500.00', taxes: '₱2,200.00', status: 'Active' }
];
const renderTableData = () => {
     const tableRows = tableData.map((data) => {
        return `
            <tr>
                <td>${data.employeeName}</td>
                <td>${data.position}</td>
                <td>${data.baseSalary}</td>
                <td>${data.deductions}</td>
                <td>${data.taxes}</td>
                <td>${data.status}</td>
                <td><button class = "btn btn-primary">Action</button></td>
            </tr>
        `;
     });
        tableBody.innerHTML = tableRows.join('');
}
renderTableData();