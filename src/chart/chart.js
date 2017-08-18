JetFoxApp = angular.module('JetFoxApp', ['dx'])

    .controller('ChartController', function ChartController($scope) {
        var dataSource = require('./data');
        $scope.chartOptions = {
            
            dataSource: dataSource,
            legend: {
                visible: false
            },
            series: [{
                argumentField: "dateCreate",
                valueField: "data",
                type: "bar",
            },
            {
                axis: "total",
                type: "spline",
                argumentField: "dateCreate",
                valueField: "data",
                name: "Total",
                color: "#008fd8"
            }],
            valueAxis: [{
                grid: {
                    visible: true
                }
            }, {
                name: "total",
                position: "right",
                grid: {
                    visible: true
                },
                title: {
                    text: ""
                },
                label: {
                    format: "largeNumber"
                }
            }],
            palette: "Harmony Light",
            argumentAxis: {
                valueMarginsEnabled: false,


                label: {
                    format: 'hour'
                }
            },

            commonSeriesSettings: {
                point: {
                    size: 10
                }
            },


            title: "First chart"
        };

        $scope.rangeOptions = {
            size: {
                height: 120
            },
            margin: {
                left: 10
            },
            scale: {
                minorTickCount: 1
            },
            dataSource: dataSource,
            chart: {
                series: {
                    argumentField: "dateCreate",
                    valueField: "data",
                    type: "bar"
                },
                palette: "Harmony Light"
            },
            behavior: {
                callValueChanged: "onMoving"
            },

            onValueChanged: function (e) {
                var zoomedChart = $("#chart").dxChart("instance");
                zoomedChart.zoomArgument(e.value[0], e.value[1]);
            }
        };



    
    $scope.chartOptions2 = {
        
        dataSource: dataSource,
        legend: {
            visible: false
        },
        series: [{
            argumentField: "dateCreate",
            valueField: "data",
            type: "bar",
        },
        {
            axis: "total",
            type: "spline",
            argumentField: "dateCreate",
            valueField: "data",
            name: "Total",
            color: "#008fd8"
        }],
        valueAxis: [{
            grid: {
                visible: true
            }
        }, {
            name: "total",
            position: "right",
            grid: {
                visible: true
            },
            title: {
                text: ""
            },
            label: {
                format: "largeNumber"
            }
        }],
        palette: "Harmony Light",
        argumentAxis: {
            valueMarginsEnabled: false,


            label: {
                format: 'hour'
            }
        },

        commonSeriesSettings: {
            point: {
                size: 10
            }
        },


        title: "Second chart"
    };

    $scope.rangeOptions2 = {
        size: {
            height: 120
        },
        margin: {
            left: 10
        },
        scale: {
            minorTickCount: 1
        },
        dataSource: dataSource,
        chart: {
            series: {
                argumentField: "dateCreate",
                valueField: "data",
                type: "bar"
            },
            palette: "Harmony Light"
        },
        behavior: {
            callValueChanged: "onMoving"
        },

        onValueChanged: function (e) {
            var zoomedChart = $("#chart1").dxChart("instance");
            zoomedChart.zoomArgument(e.value[0], e.value[1]);
        }
    };


    $scope.chartOptions3 = {
        
        dataSource: dataSource,
        legend: {
            visible: false
        },
        series: [{
            argumentField: "dateCreate",
            valueField: "data",
            type: "bar",
        },
        {
            axis: "total",
            type: "spline",
            argumentField: "dateCreate",
            valueField: "data",
            name: "Total",
            color: "#008fd8"
        }],
        valueAxis: [{
            grid: {
                visible: true
            }
        }, {
            name: "total",
            position: "right",
            grid: {
                visible: true
            },
            title: {
                text: ""
            },
            label: {
                format: "largeNumber"
            }
        }],
        palette: "Harmony Light",
        argumentAxis: {
            valueMarginsEnabled: false,


            label: {
                format: 'hour'
            }
        },

        commonSeriesSettings: {
            point: {
                size: 10
            }
        },


        title: "Third chart"
    };

    $scope.rangeOptions3 = {
        size: {
            height: 120
        },
        margin: {
            left: 10
        },
        scale: {
            minorTickCount: 1
        },
        dataSource: dataSource,
        chart: {
            series: {
                argumentField: "dateCreate",
                valueField: "data",
                type: "bar"
            },
            palette: "Harmony Light"
        },
        behavior: {
            callValueChanged: "onMoving"
        },

        onValueChanged: function (e) {
            var zoomedChart = $("#chart2").dxChart("instance");
            zoomedChart.zoomArgument(e.value[0], e.value[1]);
        }
    };


    $scope.chartOptions4 = {
        
        dataSource: dataSource,
        legend: {
            visible: false
        },
        series: [{
            argumentField: "dateCreate",
            valueField: "data",
            type: "bar",
        },
        {
            axis: "total",
            type: "spline",
            argumentField: "dateCreate",
            valueField: "data",
            name: "Total",
            color: "#008fd8"
        }],
        valueAxis: [{
            grid: {
                visible: true
            }
        }, {
            name: "total",
            position: "right",
            grid: {
                visible: true
            },
            title: {
                text: ""
            },
            label: {
                format: "largeNumber"
            }
        }],
        palette: "Harmony Light",
        argumentAxis: {
            valueMarginsEnabled: false,


            label: {
                format: 'hour'
            }
        },

        commonSeriesSettings: {
            point: {
                size: 10
            }
        },


        title: "Fourth chart"
    };

    $scope.rangeOptions4 = {
        size: {
            height: 120
        },
        margin: {
            left: 10
        },
        scale: {
            minorTickCount: 1
        },
        dataSource: dataSource,
        chart: {
            series: {
                argumentField: "dateCreate",
                valueField: "data",
                type: "bar"
            },
            palette: "Harmony Light"
        },
        behavior: {
            callValueChanged: "onMoving"
        },

        onValueChanged: function (e) {
            var zoomedChart = $("#chart3").dxChart("instance");
            zoomedChart.zoomArgument(e.value[0], e.value[1]);
        }
    };



});
