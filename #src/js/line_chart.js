new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
        labels: ["13:00","13:30","14:00","14:30","15:00","15:30","16:00"],
        datasets: [{ 
            data: [7200, 7800, 7500, 8700, 8650, 8700, 8150],
            label: '',
            lineTension: 0.5, //Параметр, отвечающий за "плавность" линии (меньше значение = прямее линия)
            borderColor: "#5E5CE6",
            fill: false,
            pointHitRadius: 45,
            pointBorderColor: 'transparent',
            pointBackgroundColor: 'transparent',
            pointHoverBorderColor: 'white',
            pointHoverBackgroundColor: '5E5CE6',
            }
        ]
    },
    options: {
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                backgroundColor: '#3A3A3C',
                borderRadius: 14,
                xAlign: 'center',
                yAlign: 'bottom',
                titleAlign: 'center',
                bodyAlign: 'center',
                titleColor: 'rgba(235, 235, 245, 0.6)',
                titleFont: {
                    weight: '500',
                    size: '9.04px',
                    lineHeight: '16.27px'
                },
                padding: {
                    left: 26,
                    right: 26,
                    top:14,
                    bottom:14
                },
                boxWidth: 117,
                boxHeight: 69,
                displayColors: false
            }
        },
        scales: {
            xAxes: [{
            gridLines: {
                display: true,
                lineWidth: 1,
                borderDash: [1, 2],
                color: "black"
                }
            }],
            yAxes: [{
            gridLines: {
                display: true,
                lineWidth: 1,
                borderDash: [1, 2],
                color: "black"
                }
            }],
        }
    }
});