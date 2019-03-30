let ctx1 = document.getElementById('chart1').getContext('2d');
let myChart1 = new Chart(ctx1, {
    type: 'bar',
    data: {},
    options: {}
});

let ctx2 = document.getElementById('chart2').getContext('2d');
let myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Wien', 'Niederösterreich', 'Oberösterreich', 'Steiermark', 'Tirol', 'Kärnten', 'Salzburg', 'Vorarlberg', 'Burgenland'],
        datasets: [{
            label: 'Einwohner',
            data: [1898000, 1677831, 1482300, 1243089, 754821, 560983, 555298, 394224, 293446]
        }]
    },
    options: {}
});


let ctx3 = document.getElementById('chart3').getContext('2d');
let myChart3 = new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: ['Wien', 'Niederösterreich', 'Oberösterreich', 'Steiermark', 'Tirol', 'Kärnten', 'Salzburg', 'Vorarlberg', 'Burgenland'],
        datasets: [{
            label: 'Einwohner',
            data: [1898000, 1677831, 1482300, 1243089, 754821, 560983, 555298, 394224, 293446],
            backgroundColor: 'red'
        }]
    },
    options: {
    }
});

let ctx4 = document.getElementById('chart4').getContext('2d');
let myChart4 = new Chart(ctx4, {
    type: 'bar',
    data: {
        labels: ['Wien', 'Niederösterreich', 'Oberösterreich', 'Steiermark', 'Tirol', 'Kärnten', 'Salzburg', 'Vorarlberg', 'Burgenland'],
        datasets: [{
            label: 'Einwohner',
            data: [1898000, 1677831, 1482300, 1243089, 754821, 560983, 555298, 394224, 293446],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(68, 72, 255, 0.2)',
                'rgba(105, 232, 12, 0.2)',
                'rgba(255, 118, 7, 0.2)'
            ]
        }]
    },
    options: {
    }
});

let ctx5 = document.getElementById('chart5').getContext('2d');
let myChart5 = new Chart(ctx5, {
    type: 'bar',
    data: {
        labels: ['Wien', 'Niederösterreich', 'Oberösterreich', 'Steiermark', 'Tirol', 'Kärnten', 'Salzburg', 'Vorarlberg', 'Burgenland'],
        datasets: [{
            label: 'Einwohner',
            data: [1898000, 1677831, 1482300, 1243089, 754821, 560983, 555298, 394224, 293446],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(68, 72, 255, 0.2)',
                'rgba(105, 232, 12, 0.2)',
                'rgba(255, 118, 7, 0.2)'
            ]
        }]
    },
    options: {
        legend: {
            labels: {
                fontColor: 'red',
                fontFamily: 'serif',
                fontSize: 18,
                fontStyle: 'italic'
            }
        }
    }
});

let ctx6 = document.getElementById('chart6').getContext('2d');
let myChart6 = new Chart(ctx6, {
    type: 'bar',
    data: {
        labels: ['Wien', 'Niederösterreich', 'Oberösterreich', 'Steiermark', 'Tirol', 'Kärnten', 'Salzburg', 'Vorarlberg', 'Burgenland'],
        datasets: [{
            label: 'Einwohner',
            data: [1898000, 1677831, 1482300, 1243089, 754821, 560983, 555298, 394224, 293446],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(68, 72, 255, 0.2)',
                'rgba(105, 232, 12, 0.2)',
                'rgba(255, 118, 7, 0.2)'
            ]
        }]
    },
    options: {
        legend: {
            display: false
        }
    }
});

let ctx7 = document.getElementById('chart7').getContext('2d');
let myChart7 = new Chart(ctx7, {
    type: 'bar',
    data: {
        labels: ['Wien', 'Niederösterreich', 'Oberösterreich', 'Steiermark', 'Tirol', 'Kärnten', 'Salzburg', 'Vorarlberg', 'Burgenland'],
        datasets: [{
            label: 'Einwohner',
            data: [1898000, 1677831, 1482300, 1243089, 754821, 560983, 555298, 394224, 293446],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(68, 72, 255, 0.2)',
                'rgba(105, 232, 12, 0.2)',
                'rgba(255, 118, 7, 0.2)'
            ]
        }]
    },
    options: {
        legend: {
            display: true,
            position: 'bottom',
        }
    }
});

let ctx8 = document.getElementById('chart8').getContext('2d');
let myChart8 = new Chart(ctx8, {
    type: 'bar',
    data: {
        labels: ['Wien', 'Niederösterreich', 'Oberösterreich', 'Steiermark', 'Tirol', 'Kärnten', 'Salzburg', 'Vorarlberg', 'Burgenland'],
        datasets: [{
            label: 'Einwohner',
            data: [1898000, 1677831, 1482300, 1243089, 754821, 560983, 555298, 394224, 293446],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(68, 72, 255, 0.2)',
                'rgba(105, 232, 12, 0.2)',
                'rgba(255, 118, 7, 0.2)'
            ]
        }]
    },
    options: {
        animation: {
            duration: 5000,
            easing: 'easeInBounce'
        }
    }
});

let ctx9 = document.getElementById('chart9').getContext('2d');
let myChart9 = new Chart(ctx9, {
    type: 'bar',
    data: {
        labels: ['Wien', 'Niederösterreich', 'Oberösterreich', 'Steiermark', 'Tirol', 'Kärnten', 'Salzburg', 'Vorarlberg', 'Burgenland'],
        datasets: [{
            label: 'Einwohner',
            data: [1898000, 1677831, 1482300, 1243089, 754821, 560983, 555298, 394224, 293446],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(68, 72, 255, 0.2)',
                'rgba(105, 232, 12, 0.2)',
                'rgba(255, 118, 7, 0.2)'
            ]
        }]
    },
    options: {
        layout: {
            padding: {
                left: 100,
                right: 100,
                top: 0,
                bottom: 100
            }
        }
    }
});

let ctx10 = document.getElementById('chart10').getContext('2d');
let myChart10 = new Chart(ctx10, {
    type: 'bar',
    data: {
        labels: ['Wien', 'Niederösterreich', 'Oberösterreich', 'Steiermark', 'Tirol', 'Kärnten', 'Salzburg', 'Vorarlberg', 'Burgenland'],
        datasets: [{
            label: 'Einwohner',
            data: [1898000, 1677831, 1482300, 1243089, 754821, 560983, 555298, 394224, 293446],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(68, 72, 255, 0.2)',
                'rgba(105, 232, 12, 0.2)',
                'rgba(255, 118, 7, 0.2)'
            ]
        }]
    },
    options: {
        title: {
            display: true,
            position: 'top',
            fontSize: 14,
            fontStyle: 'bold',
            fontColor: 'darkblue',
            padding: 10,
            lineHeight: 1.2,
            text: 'Bevölkerung Österreichs sortiert nach Bundesländern'
        }
    }
});

let ctx11 = document.getElementById('chart11').getContext('2d');
let myChart11 = new Chart(ctx11, {
    type: 'bar',
    data: {
        labels: ['Wien', 'Niederösterreich', 'Oberösterreich', 'Steiermark', 'Tirol', 'Kärnten', 'Salzburg', 'Vorarlberg', 'Burgenland'],
        datasets: [{
            label: 'Einwohner',
            data: [1898000, 1677831, 1482300, 1243089, 754821, 560983, 555298, 394224, 293446],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(68, 72, 255, 0.2)',
                'rgba(105, 232, 12, 0.2)',
                'rgba(255, 118, 7, 0.2)'
            ]
        }]
    },
    options: {
        tooltips: {
            enabled: false,
        }   
    }
});

let ctx12 = document.getElementById('chart12').getContext('2d');
let myChart12 = new Chart(ctx12, {
    type: 'bar',
    data: {
        labels: ['Wien', 'Niederösterreich', 'Oberösterreich', 'Steiermark', 'Tirol', 'Kärnten', 'Salzburg', 'Vorarlberg', 'Burgenland'],
        datasets: [{
            label: 'Einwohner',
            data: [1898000, 1677831, 1482300, 1243089, 754821, 560983, 555298, 394224, 293446],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(68, 72, 255, 0.2)',
                'rgba(105, 232, 12, 0.2)',
                'rgba(255, 118, 7, 0.2)'
            ]
        }]
    },
    options: {
        tooltips: {
            enabled: true,
            intersect: false,
            backgroundColor: 'rgba(205, 205, 205, 1)',
            borderColor: 'rgba(0, 0, 0, 1)',
            borderWidth: 4
        }   
    }
});

let ctx13 = document.getElementById('chart13').getContext('2d');
let myChart13 = new Chart(ctx13, {
    type: 'bar',
    data: {
        labels: ['Wien', 'Niederösterreich', 'Oberösterreich', 'Steiermark', 'Tirol', 'Kärnten', 'Salzburg', 'Vorarlberg', 'Burgenland'],
        datasets: [{
            label: 'Einwohner',
            data: [1898000, 1677831, 1482300, 1243089, 754821, 560983, 555298, 394224, 293446],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(68, 72, 255, 0.2)',
                'rgba(105, 232, 12, 0.2)',
                'rgba(255, 118, 7, 0.2)'
            ]
        }]
    },
    options: {
    }
});

let ctx14 = document.getElementById('chart14').getContext('2d');
let myChart14 = new Chart(ctx14, {
    type: 'line',
    data: {
        labels: ['Wien', 'Niederösterreich', 'Oberösterreich', 'Steiermark', 'Tirol', 'Kärnten', 'Salzburg', 'Vorarlberg', 'Burgenland'],
        datasets: [{
            label: 'Einwohner',
            data: [1898000, 1677831, 1482300, 1243089, 754821, 560983, 555298, 394224, 293446],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(68, 72, 255, 0.2)',
                'rgba(105, 232, 12, 0.2)',
                'rgba(255, 118, 7, 0.2)'
            ]
        }]
    },
    options: {
    }
});

let ctx15 = document.getElementById('chart15').getContext('2d');
let myChart15 = new Chart(ctx15, {
    type: 'radar',
    data: {
        labels: ['Wien', 'Niederösterreich', 'Oberösterreich', 'Steiermark', 'Tirol', 'Kärnten', 'Salzburg', 'Vorarlberg', 'Burgenland'],
        datasets: [{
            label: 'Einwohner',
            data: [1898000, 1677831, 1482300, 1243089, 754821, 560983, 555298, 394224, 293446],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(68, 72, 255, 0.2)',
                'rgba(105, 232, 12, 0.2)',
                'rgba(255, 118, 7, 0.2)'
            ]
        }]
    },
    options: {
    }
});

let ctx16 = document.getElementById('chart16').getContext('2d');
let myChart16 = new Chart(ctx16, {
    type: 'pie',
    data: {
        labels: ['Wien', 'Niederösterreich', 'Oberösterreich', 'Steiermark', 'Tirol', 'Kärnten', 'Salzburg', 'Vorarlberg', 'Burgenland'],
        datasets: [{
            label: 'Einwohner',
            data: [1898000, 1677831, 1482300, 1243089, 754821, 560983, 555298, 394224, 293446],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(68, 72, 255, 0.2)',
                'rgba(105, 232, 12, 0.2)',
                'rgba(255, 118, 7, 0.2)'
            ]
        }]
    },
    options: {
    }
});

let ctx17 = document.getElementById('chart17').getContext('2d');
let myChart17 = new Chart(ctx17, {
    type: 'doughnut',
    data: {
        labels: ['Wien', 'Niederösterreich', 'Oberösterreich', 'Steiermark', 'Tirol', 'Kärnten', 'Salzburg', 'Vorarlberg', 'Burgenland'],
        datasets: [{
            label: 'Einwohner',
            data: [1898000, 1677831, 1482300, 1243089, 754821, 560983, 555298, 394224, 293446],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(68, 72, 255, 0.2)',
                'rgba(105, 232, 12, 0.2)',
                'rgba(255, 118, 7, 0.2)'
            ]
        }]
    },
    options: {
    }
});

let ctx18 = document.getElementById('chart18').getContext('2d');
let myChart18 = new Chart(ctx18, {
    type: 'polarArea',
    data: {
        labels: ['Wien', 'Niederösterreich', 'Oberösterreich', 'Steiermark', 'Tirol', 'Kärnten', 'Salzburg', 'Vorarlberg', 'Burgenland'],
        datasets: [{
            label: 'Einwohner',
            data: [1898000, 1677831, 1482300, 1243089, 754821, 560983, 555298, 394224, 293446],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(68, 72, 255, 0.2)',
                'rgba(105, 232, 12, 0.2)',
                'rgba(255, 118, 7, 0.2)'
            ]
        }]
    },
    options: {
    }
});


let ctx19 = document.getElementById('chart19').getContext('2d');
let myChart19 = new Chart(ctx19, {
    type: 'bubble',
    data: {
        datasets: [{
            label: 'Daten',
            data: [{x : 10, y: 10, r: 15}, {x: 0, y: 20, r: 15}, {x: 20, y: 10, r: 15}],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(68, 72, 255, 0.2)',
                'rgba(105, 232, 12, 0.2)',
                'rgba(255, 118, 7, 0.2)'
            ]
        }]
    },
    options: {
    }
});


let ctx20 = document.getElementById('chart20').getContext('2d');
let myChart20 = new Chart(ctx20, {
    type: 'scatter',
    data: {
        datasets: [{
            label: 'Scatter Dataset',
            data: [{
                x: -10,
                y: 0
            }, {
                x: 0,
                y: 10
            }, {
                x: 10,
                y: 5
            }]
        }]
    },
    options: {
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom'
            }]
        }
    }
});

let ctx21 = document.getElementById('chart21').getContext('2d');
let myChart21 = new Chart(ctx21, {
    type: 'bar',
    data: {
        labels: ['Wien', 'Niederösterreich', 'Oberösterreich', 'Steiermark', 'Tirol', 'Kärnten', 'Salzburg', 'Vorarlberg', 'Burgenland'],
        datasets: [{
            label: 'Einwohner',
            data: [1898000, 1677831, 1482300, 1243089, 754821, 560983, 555298, 394224, 293446],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(68, 72, 255, 0.2)',
                'rgba(105, 232, 12, 0.2)',
                'rgba(255, 118, 7, 0.2)'
            ],
            borderWidth: 2,
            borderColor: 'black',
            hoverBorderWidth: 4,
            hoverBorderColor: 'red'
        }]
    },
    options: {
    }
});

