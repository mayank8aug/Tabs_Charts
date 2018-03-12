function init() {
    var inferenceChartEl = document.getElementById('inferenceChartId').getContext('2d');
    var assumptionChartEl = document.getElementById('assumptionChartId').getContext('2d');
    createAndRenderChart(inferenceChartEl, 32);
    createAndRenderChart(assumptionChartEl, 58);
}

function createAndRenderChart(chartEl, dataValue) {
    if(!chartEl || !dataValue) {
        return;
    }

    var dataColor = '';
    if(dataValue < 40) {
        dataColor = '#FF0000';
    } else if(dataValue < 60) {
        dataColor = '#FFAA00';
    } else {
        dataColor = '#00AA00';
    }

    lineChart = new Chart(chartEl, {
        type: 'doughnut',
        data: {
            labels: [],
            datasets: [
                {
                    data: [100-dataValue, dataValue],
                    backgroundColor: ['#DDD', dataColor]
                }
            ]
        },
        options: {
            cutoutPercentage: 80
        }
    });
}