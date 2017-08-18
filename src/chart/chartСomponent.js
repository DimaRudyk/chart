
module.exports = 

 
angular.module('JetFoxApp', ['dx']).component('chartComponent', {
    templateUrl: 'chartComponent.html',
    bindings: {
        from: '<',
        before: '<',
        sensor: '<'
    },
    controller: function ($http) {
        var ctrl = this;


        $http({
            method: 'GET',
            url: 'api/WebChart/GetSensorHistori'+sensorId
        }).then(function successCallback(response) {
            console.log(response);
            var dataSource = response;
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        })


        ctrl.systemOptions = {
            chartInstance: null
        }
        ctrl.chartOptions = {
            onInitialized: function (e) {
                ctrl.systemOptions.chartInstance = e.component;
                ctrl.systemOptions.chartInstance.zoomArgument(e.value[0], e.value[1]);
            },
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

        ctrl.rangeOptions = {
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
                // var zoomedChart = $("#chart").dxChart("instance");
                if (ctrl.systemOptions.chartInstance)
                    ctrl.systemOptions.chartInstance.zoomArgument(e.value[0], e.value[1]);
            }
        };

        ctrl.$onChanges = function (changesObj) {
            $http({
                method: 'GET',
                url: 'api/WebChart/GetSensorHistori'+sensorId
            }).then(function successCallback(response) {
                console.log(response);
                 var dataSource = response;
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            })

        }
        ctrl.$onInit = function ($http) {

            $http({
                method: 'GET',
                url: 'api/WebChart/GetAllById'
            }).then(function successCallback(response) {
                console.log(response);
                var sensorId = response;
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            })

        }
    }


});