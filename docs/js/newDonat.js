let income = document.getElementById("chart").getContext("2d");

var newBluePurple = income.createLinearGradient(330, 0, 0, 300);
newBluePurple.addColorStop(0, "#3C43DF");
newBluePurple.addColorStop(1, "#6112B0");


new Chart(document.getElementById("chart"), {
    type: 'doughnut',
    data: {
        labels: ['',''],
        datasets: [
            {
                data: [8924.93, 11075.07],
                backgroundColor: [
                    '#CD4AFB',
                    newBluePurple
                ],
                borderWidth: 0,
                borderRadius: 50,
                cutout:70
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
                bodyColor: 'white',
                padding: 14,
                boxWidth: 117,
                boxHeight: 69,
                displayColors: false
            }
        }
    }
});