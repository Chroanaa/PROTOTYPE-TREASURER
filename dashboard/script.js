
//pie chart render
Highcharts.chart('pie-container', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Monthly Budget Allocation'
    },
    tooltip: {
        valueSuffix: '%'
    },
  
    plotOptions: {
        series: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: [{
                enabled: true,
                distance: 20
            }, {
                enabled: true,
                distance: -40,
                format: '{point.percentage:.1f}%',
                style: {
                    fontSize: '1.2em',
                    textOutline: 'none',
                    opacity: 0.7
                },
                filter: {
                    operator: '>',
                    property: 'percentage',
                    value: 10
                }
            }]
        }
    },
    series: [
        {
            name: 'Percentage',
            colorByPoint: true,
            data: [
                {
                    name: "Expenses",
                    y: 55.02
                },
                {
                    name: "Income",
                    y: 44.98,
                }
                
            ]
        }
    ]
});
const tableData = [
    { date: '2023-10-01', expenseName: 'Office Supplies', amount: '$150.00' },
    { date: '2023-10-02', expenseName: 'Travel', amount: '$300.00' },
    { date: '2023-10-03', expenseName: 'Utilities', amount: '$200.00' },
    { date: '2023-10-04', expenseName: 'Marketing', amount: '$500.00' },
    { date: '2023-10-05', expenseName: 'Software', amount: '$250.00' }
];

//renders data in the table 
const tableBody = document.querySelector('.table-body');
const renderTable = (tableData) => {
    tableBody.innerHTML = '';
    tableData.forEach((item) => {
        const tr = document.createElement('tr');
        tr.classList.add('text-center');
        tr.innerHTML = `
            <td>${item.date}</td>
            <td>${item.expenseName}</td>
            <td>${item.amount}</td>
                        `;
        tableBody.appendChild(tr);
    });
};
renderTable(tableData);