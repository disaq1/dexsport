let income = document.getElementById("chart").getContext("2d");

var newBluePurple = income.createLinearGradient(330, 0, 0, 300);
newBluePurple.addColorStop(0, "#3C43DF");
newBluePurple.addColorStop(1, "#6112B0");

var pink = income.createLinearGradient(330, 0, 0, 300);
pink.addColorStop(0, "#E24AB0");
pink.addColorStop(1, "#FA71CD");

var green = income.createLinearGradient(330, 0, 0, 300);
green.addColorStop(0, "#8DD9C7");
green.addColorStop(1, "#65C6A3");

var blue = income.createLinearGradient(330, 0, 0, 300);
blue.addColorStop(0, "#16D9E3");
blue.addColorStop(0.5, "#30C7EC");
blue.addColorStop(1, "#46AEF7");

var purple = income.createLinearGradient(330, 0, 0, 300);
purple.addColorStop(0, "#6113B2");
purple.addColorStop(1, "#6113B2");


new Chart(document.getElementById("chart"), {
    type: 'doughnut',
    data: {
        labels: ['',''],
        datasets: [
            {
                data: [8924.93, 11075.07],
                backgroundColor: [
                    purple,
                    newBluePurple,
                    pink,
                    green,
                    blue,

                ],
                borderWidth: 0,
                borderRadius: 50,
                cutout:75,
                offset: [
                    '7','2'
                ]
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
        }
    }
});