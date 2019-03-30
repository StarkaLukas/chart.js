Chart.defaults.global.defaultFontColor = 'red';

let ctx5 = document.getElementById('chart5').getContext('2d');
let myChart5 = new Chart(ctx5, {
    type: 'bar',
    data: {
        labels: ['Wien', 'Niederösterreich', 'Oberösterreich', 'Steiermark', 'Tirol', 'Kärnten', 'Salzburg', 'Vorarlberg', 'Burgenland'],
        datasets: [{
            label: 'Bevölkerung',
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