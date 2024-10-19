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
