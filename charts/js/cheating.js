$(function () {
    $('#qtwo').highcharts({
        chart: {
            type: 'column',
	    options3d: {
                enabled: false,
                alpha: 10,
                beta: 15,
                viewDistance: 25,
                depth: 75
            },
        },
        title: {
            text: 'If one member of a group project violates the Honor Code, the entire group in a project has violated the Honor Code. <br/>Correct Answer: <b>True</b>'
        },
        xAxis: {
            categories: ['2016', '2017', '2018','2019']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Percentage'
            },
	    stackLabels: {
                enabled: false,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        },
        tooltip: {
            formatter: function () {
                return '<b>Class of ' + this.x + '</b><br/>' +
		    this.series.name + ': ' + this.y + '<br/>' +
                    'Total: ' + this.point.stackTotal + '<br/>' +
		    'Percent: ' + this.point.percentage.toFixed(1) + '%';
            }
        },
        plotOptions: {
            column: {
		    stacking: 'percent'
	    }
        },
        series: [{
	    name: 'Incorrect',
            data: [11, 14, 13, 17]
        }, {
            name: "I don't know",
            data: [13, 8, 16, 5]
        }, {
            name: 'Correct',
            data: [15, 10, 18, 11]	
	}]
    });
});


$(function () {
    $('#qthree').highcharts({
        chart: {
            type: 'column',
	    options3d: {
                enabled: false,
                alpha: 10,
                beta: 25,
                viewDistance: 25,
                depth: 75
            },
        },
        title: {
            text: 'It is a violation of the Honor Code to not report a known or suspected violation. <br/>Correct Answer: <b>True</b>'
        },
        xAxis: {
            categories: ['2016', '2017', '2018','2019']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Percentage'
            },
	    stackLabels: {
                enabled: false,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        },
        tooltip: {
            formatter: function () {
                return '<b>Class of ' + this.x + '</b><br/>' +
		    this.series.name + ': ' + this.y + '<br/>' +
                    'Total: ' + this.point.stackTotal + '<br/>' +
		    'Percent: ' + this.point.percentage.toFixed(1) + '%';
            }
        },
        plotOptions: {
            column: {
		    stacking: 'percent'
	    }
        },
        series: [{
	    name: 'Incorrect',
            data: [1, 5, 6, 6]
        }, {
            name: "I don't know",
            data: [5, 3, 5, 6]
        }, {
            name: 'Correct',
            data: [33, 24, 36, 21]	
	}]
    });
});


$(function () {
    $('#witness').highcharts({
        chart: {
            type: 'column',
	    options3d: {
                enabled: false,
                alpha: 10,
                beta: 25,
                viewDistance: 25,
                depth: 75
            },
        },
        title: {
            text: 'Have you witnessed cheating at Vanderbilt?'
        },
        xAxis: {
            categories: ['2016', '2017', '2018','2019']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Percentage'
            },
	    stackLabels: {
                enabled: false,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        },
        tooltip: {
            formatter: function () {
                return '<b>Class of ' + this.x + '</b><br/>' +
		    this.series.name + ': ' + this.y + '<br/>' +
                    'Total: ' + this.point.stackTotal + '<br/>' +
		    'Percent: ' + this.point.percentage.toFixed(1) + '%';
            }
        },
        plotOptions: {
            column: {
		    stacking: 'percent'
	    }
        },
        series: [{
	    name: 'No',
            data: [22, 14, 26, 32]	
	}, {
	    name: 'Yes',
            data: [17, 18, 21, 1]
        }]
    });
});