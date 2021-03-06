/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var JetFoxApp = angular.module('JetFoxApp', ['dx']);


__webpack_require__(1);

__webpack_require__(2);

/***/ }),
/* 1 */
/***/ (function(module, exports) {


module.exports = 

 
angular.module('JetFoxApp', ['dx']).component('chartComponent', {
    template: `<div class="authorizationDiv">
    <div class="inputlogpas">
        <input placeholder="from" from="ctrl.from">
    </div>
    <div class="inputlogpas">
        <input placeholder="before" before="ctrl.before">
    </div>
    <div class="inputlogpas">
        <input placeholder="id sensor" sensor="ctrl.sensor">
    </div>
    <div>
        <button type="button" class="btnlogin" ng-click="ctrl.getdata"> go </button>
    </div>
</div>
<div class="demo-container"  >
    <div id="chart" dx-chart="$ctrl.chartOptions"></div>
    <div dx-range-selector="rangeOptions"></div>
</div>`,
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

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

JetFoxApp = angular.module('JetFoxApp', ['dx'])

    .controller('ChartController', function ChartController($scope) {
        var dataSource = __webpack_require__(3);
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


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = 
  [
    {
      "data": 4,
      "dateCreate": "2017-08-01 00:00:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 00:01:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 00:02:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01 00:03:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01 00:04:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01 00:05:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01 00:06:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01 00:07:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01 00:08:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 00:09:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 00:10:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 00:11:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 00:12:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 00:13:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01 00:14:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01 00:15:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01 00:16:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 00:17:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 00:18:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01 00:19:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 00:20:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 00:21:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01 00:22:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01 00:23:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 00:24:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01 00:25:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 00:26:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01 00:27:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01 00:28:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 00:29:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 00:30:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01 00:31:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 00:32:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01 00:33:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01 00:34:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 00:35:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 00:36:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 00:37:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 00:38:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 00:39:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 00:40:00",
      "name": "InputSugar"
    },
    {


      "data": 4,
      "dateCreate": "2017-08-01 00:41:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01 00:42:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01 00:43:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 00:44:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 00:45:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01 00:46:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01 00:47:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 00:48:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01 00:49:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 00:50:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 00:51:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 00:52:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01 00:53:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01 00:54:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01 00:55:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 00:56:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 00:57:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 00:58:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01 00:59:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01 01:00:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01 01:01:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 01:02:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 01:03:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01 01:04:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 01:05:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01 01:06:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 01:07:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01 01:08:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01 01:09:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 01:10:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01 01:11:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 01:12:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01 01:13:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 01:14:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 01:15:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 01:16:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01 01:17:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 01:18:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 01:19:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01 01:20:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01 01:21:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01 01:22:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01 01:23:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01 01:24:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01 01:25:00",
      "name": "InputSugar"
    },
    {
      "data": 4,


      "dateCreate": "2017-08-01 01:26:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 01:27:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 01:28:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01 01:29:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 01:30:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01 01:31:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01 01:32:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01 01:33:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 01:34:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01 01:35:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 01:36:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01 01:37:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 01:38:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 01:39:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01 01:40:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 01:41:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01 01:42:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01 01:43:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 01:44:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 01:45:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01 01:46:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 01:47:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01 01:48:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01 01:49:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 01:50:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01 01:51:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 01:52:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01 01:53:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01 01:54:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01 01:55:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 01:56:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 01:57:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01 01:58:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 01:59:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01 02:00:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01 02:01:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 02:02:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 02:03:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01 02:04:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 02:05:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01 02:06:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01 02:07:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 02:08:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01 02:09:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01 02:10:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01 02:11:00",


      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01 02:12:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 02:13:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01 02:14:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01 02:15:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01 02:16:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 02:17:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 02:18:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 02:19:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01 02:20:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 02:21:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 02:22:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 02:23:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01 02:24:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01 02:25:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 02:26:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 02:27:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01 02:28:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01 02:29:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01 02:30:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 02:31:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01 02:32:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 02:33:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 02:34:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 02:35:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01 02:36:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 02:37:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01 02:38:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 02:39:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 02:40:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 02:41:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 02:42:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 02:43:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 02:44:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01 02:45:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 02:46:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01 02:47:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01 02:48:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 02:49:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01 02:50:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01 02:51:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 02:52:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01 02:53:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 02:54:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01 02:55:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01 02:56:00",
      "name": "InputSugar"
    },
    {


      "data": 3,
      "dateCreate": "2017-08-01 02:57:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01 02:58:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01 02:59:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 03:00:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 03:01:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 03:02:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 03:03:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01 03:04:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01 03:05:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 03:06:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 03:07:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01 03:08:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01 03:09:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 03:10:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 03:11:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01 03:12:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01 03:13:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 03:14:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01 03:15:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01 03:16:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 03:17:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 03:18:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01 03:19:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01 03:20:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 03:21:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01 03:22:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 03:23:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 03:24:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01 03:25:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01 03:26:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01 03:27:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01 03:28:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 03:29:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 03:30:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01 03:31:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 03:32:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 03:33:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01 03:34:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 03:35:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 03:36:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 03:37:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01 03:38:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 03:39:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 03:40:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 03:41:00",
      "name": "InputSugar"
    },
    {
      "data": 7,


      "dateCreate": "2017-08-01 03:42:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 03:43:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01 03:44:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 03:45:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01 03:46:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 03:47:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01 03:48:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 03:49:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 03:50:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01 03:51:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01 03:52:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01 03:53:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01 03:54:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01 03:55:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01 03:56:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01 03:57:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 03:58:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 03:59:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 04:00:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01 04:01:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 04:02:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01 04:03:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 04:04:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 04:05:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01 04:06:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01 04:07:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 04:08:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 04:09:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01 04:10:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 04:11:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 04:12:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01 04:13:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 04:14:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01 04:15:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01 04:16:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01 04:17:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01 04:18:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 04:19:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01 04:20:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01 04:21:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 04:22:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01 04:23:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 04:24:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 04:25:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 04:26:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01 04:27:00",


      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01 04:28:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 04:29:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 04:30:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 04:31:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01 04:32:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 04:33:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 04:34:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 04:35:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 04:36:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01 04:37:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01 04:38:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 04:39:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 04:40:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 04:41:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01 04:42:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01 04:43:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01 04:44:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 04:45:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 04:46:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01 04:47:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 04:48:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01 04:49:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 04:50:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01 04:51:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 04:52:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01 04:53:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 04:54:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01 04:55:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01 04:56:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 04:57:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 04:58:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 04:59:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01 05:00:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01 05:01:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 05:02:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01 05:03:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 05:04:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 05:05:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 05:06:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 05:07:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01 05:08:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01 05:09:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 05:10:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01 05:11:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01 05:12:00",
      "name": "InputSugar"
    },
    {


      "data": 9,
      "dateCreate": "2017-08-01 05:13:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 05:14:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 05:15:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01 05:16:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01 05:17:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 05:18:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 05:19:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01 05:20:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 05:21:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01 05:22:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 05:23:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01 05:24:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01 05:25:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01 05:26:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 05:27:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01 05:28:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 05:29:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 05:30:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01 05:31:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01 05:32:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01 05:33:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01 05:34:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01 05:35:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 05:36:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01 05:37:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01 05:38:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 05:39:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 05:40:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01 05:41:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 05:42:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 05:43:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 05:44:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01 05:45:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01 05:46:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 05:47:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 05:48:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01 05:49:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01 05:50:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 05:51:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 05:52:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01 05:53:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 05:54:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01 05:55:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01 05:56:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01 05:57:00",
      "name": "InputSugar"
    },
    {
      "data": 7,


      "dateCreate": "2017-08-01 05:58:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01 05:59:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01 06:00:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 06:01:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01 06:02:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 06:03:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 06:04:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 06:05:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01 06:06:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01 06:07:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 06:08:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 06:09:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 06:10:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 06:11:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 06:12:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 06:13:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01 06:14:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01 06:15:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01 06:16:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01 06:17:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 06:18:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01 06:19:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 06:20:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 06:21:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01 06:22:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01 06:23:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01 06:24:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 06:25:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 06:26:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 06:27:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01 06:28:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01 06:29:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01 06:30:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01 06:31:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 06:32:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 06:33:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 06:34:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01 06:35:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 06:36:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01 06:37:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 06:38:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 06:39:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 06:40:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 06:41:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 06:42:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 06:43:00",


      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 06:44:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 06:45:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 06:46:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 06:47:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01 06:48:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01 06:49:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01 06:50:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 06:51:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 06:52:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01 06:53:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 06:54:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 06:55:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01 06:56:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 06:57:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 06:58:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01 06:59:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01 07:00:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01 07:01:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01 07:02:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 07:03:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01 07:04:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 07:05:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01 07:06:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 07:07:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01 07:08:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01 07:09:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01 07:10:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01 07:11:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 07:12:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 07:13:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01 07:14:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01 07:15:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 07:16:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 07:17:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 07:18:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01 07:19:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 07:20:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 07:21:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01 07:22:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01 07:23:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01 07:24:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01 07:25:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01 07:26:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01 07:27:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01 07:28:00",
      "name": "InputSugar"
    },
    {


      "data": 7,
      "dateCreate": "2017-08-01 07:29:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01 07:30:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01 07:31:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01 07:32:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01 07:33:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01 07:34:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 07:35:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01 07:36:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 07:37:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01 07:38:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01 07:39:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 07:40:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 07:41:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01 07:42:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01 07:43:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 07:44:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01 07:45:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 07:46:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 07:47:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01 07:48:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 07:49:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01 07:50:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01 07:51:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01 07:52:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01 07:53:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01 07:54:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01 07:55:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 07:56:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 07:57:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 07:58:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 07:59:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 08:00:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01 08:01:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01 08:02:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 08:03:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01 08:04:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 08:05:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 08:06:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 08:07:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 08:08:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01 08:09:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 08:10:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01 08:11:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 08:12:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01 08:13:00",
      "name": "InputSugar"
    },
    {
      "data": 2,


      "dateCreate": "2017-08-01 08:14:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01 08:15:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 08:16:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01 08:17:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 08:18:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01 08:19:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 08:20:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01 08:21:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 08:22:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01 08:23:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 08:24:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01 08:25:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 08:26:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 08:27:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01 08:28:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01 08:29:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 08:30:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01 08:31:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01 08:32:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01 08:33:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01 08:34:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01 08:35:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01 08:36:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 08:37:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01 08:38:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 08:39:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01 08:40:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 08:41:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01 08:42:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 08:43:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01 08:44:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01 08:45:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01 08:46:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01 08:47:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01 08:48:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 08:49:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 08:50:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 08:51:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01 08:52:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 08:53:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 08:54:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01 08:55:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 08:56:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01 08:57:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01 08:58:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01 08:59:00",


      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01 09:00:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 09:01:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 09:02:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01 09:03:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 09:04:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 09:05:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 09:06:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01 09:07:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01 09:08:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01 09:09:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01 09:10:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01 09:11:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01 09:12:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01 09:13:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01 09:14:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01 09:15:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 09:16:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01 09:17:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01 09:18:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01 09:19:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 09:20:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 09:21:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 09:22:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 09:23:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 09:24:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 09:25:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 09:26:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01 09:27:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01 09:28:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01 09:29:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01 09:30:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01 09:31:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01 09:32:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01 09:33:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 09:34:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01 09:35:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01 09:36:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 09:37:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 09:38:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 09:39:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01 09:40:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 09:41:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01 09:42:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01 09:43:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 09:44:00",
      "name": "InputSugar"
    },
    {


      "data": 3,
      "dateCreate": "2017-08-01 09:45:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01 09:46:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 09:47:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 09:48:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01 09:49:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01 09:50:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01 09:51:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01 09:52:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01 09:53:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01 09:54:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01 09:55:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 09:56:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01 09:57:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01 09:58:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01 09:59:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01T10:00:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01T10:01:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01T10:02:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01T10:03:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01T10:04:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01T10:05:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01T10:06:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01T10:07:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01T10:08:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01T10:09:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01T10:10:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01T10:11:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01T10:12:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01T10:13:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01T10:14:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01T10:15:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01T10:16:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01T10:17:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01T10:18:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01T10:19:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01T10:20:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01T10:21:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01T10:22:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01T10:23:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01T10:24:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01T10:25:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01T10:26:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01T10:27:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01T10:28:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01T10:29:00",
      "name": "InputSugar"
    },
    {
      "data": 0,


      "dateCreate": "2017-08-01T10:30:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01T10:31:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01T10:32:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01T10:33:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01T10:34:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01T10:35:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01T10:36:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01T10:37:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01T10:38:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01T10:39:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01T10:40:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01T10:41:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01T10:42:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01T10:43:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01T10:44:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01T10:45:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01T10:46:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01T10:47:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01T10:48:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01T10:49:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01T10:50:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01T10:51:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01T10:52:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01T10:53:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01T10:54:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01T10:55:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01T10:56:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01T10:57:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01T10:58:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01T10:59:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01T11:00:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01T11:01:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01T11:02:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01T11:03:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01T11:04:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01T11:05:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01T11:06:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01T11:07:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01T11:08:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01T11:09:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01T11:10:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01T11:11:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01T11:12:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01T11:13:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01T11:14:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01T11:15:00",


      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01T11:16:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01T11:17:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01T11:18:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01T11:19:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01T11:20:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01T11:21:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01T11:22:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01T11:23:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01T11:24:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01T11:25:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01T11:26:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01T11:27:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01T11:28:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01T11:29:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01T11:30:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01T11:31:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01T11:32:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01T11:33:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01T11:34:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01T11:35:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01T11:36:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01T11:37:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01T11:38:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01T11:39:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01T11:40:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01T11:41:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01T11:42:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01T11:43:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01T11:44:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01T11:45:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01T11:46:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01T11:47:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01T11:48:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01T11:49:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01T11:50:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01T11:51:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01T11:52:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01T11:53:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01T11:54:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01T11:55:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01T11:56:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01T11:57:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01T11:58:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01T11:59:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01T12:00:00",
      "name": "InputSugar"
    },
    {


      "data": 8,
      "dateCreate": "2017-08-01T12:01:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01T12:02:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01T12:03:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01T12:04:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01T12:05:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01T12:06:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01T12:07:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01T12:08:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01T12:09:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01T12:10:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01T12:11:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01T12:12:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01T12:13:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01T12:14:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01T12:15:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01T12:16:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01T12:17:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01T12:18:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01T12:19:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01T12:20:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01T12:21:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01T12:22:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01T12:23:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01T12:24:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01T12:25:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01T12:26:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01T12:27:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01T12:28:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01T12:29:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01T12:30:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01T12:31:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01T12:32:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01T12:33:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01T12:34:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01T12:35:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01T12:36:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01T12:37:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01T12:38:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01T12:39:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01T12:40:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01T12:41:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01T12:42:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01T12:43:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01T12:44:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01T12:45:00",
      "name": "InputSugar"
    },
    {
      "data": 1,


      "dateCreate": "2017-08-01T12:46:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01T12:47:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01T12:48:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01T12:49:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01T12:50:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01T12:51:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01T12:52:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01T12:53:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01T12:54:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01T12:55:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01T12:56:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01T12:57:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01T12:58:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01T12:59:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01T13:00:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01T13:01:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01T13:02:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01T13:03:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01T13:04:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01T13:05:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01T13:06:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01T13:07:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01T13:08:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01T13:09:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01T13:10:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01T13:11:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01T13:12:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01T13:13:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01T13:14:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01T13:15:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01T13:16:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01T13:17:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01T13:18:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01T13:19:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01T13:20:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01T13:21:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01T13:22:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01T13:23:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01T13:24:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01T13:25:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01T13:26:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01T13:27:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01T13:28:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01T13:29:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01T13:30:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01T13:31:00",


      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01T13:32:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01T13:33:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01T13:34:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01T13:35:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01T13:36:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01T13:37:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01T13:38:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01T13:39:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01T13:40:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01T13:41:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01T13:42:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01T13:43:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01T13:44:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01T13:45:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01T13:46:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01T13:47:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01T13:48:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01T13:49:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01T13:50:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01T13:51:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01T13:52:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01T13:53:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01T13:54:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01T13:55:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01T13:56:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01T13:57:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01T13:58:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01T13:59:00",
      "name": "InputSugar"
    },
    {
      "data": 0,
      "dateCreate": "2017-08-01T14:00:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01T14:01:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01T14:02:00",
      "name": "InputSugar"
    },
    {
      "data": 5,
      "dateCreate": "2017-08-01T14:03:00",
      "name": "InputSugar"
    },
    {
      "data": 9,
      "dateCreate": "2017-08-01T14:04:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01T14:05:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01T14:06:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01T14:07:00",
      "name": "InputSugar"
    },
    {
      "data": 2,
      "dateCreate": "2017-08-01T14:08:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01T14:09:00",
      "name": "InputSugar"
    },
    {
      "data": 7,
      "dateCreate": "2017-08-01T14:10:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01T14:11:00",
      "name": "InputSugar"
    },
    {
      "data": 4,
      "dateCreate": "2017-08-01T14:12:00",
      "name": "InputSugar"
    },
    {
      "data": 1,
      "dateCreate": "2017-08-01T14:13:00",
      "name": "InputSugar"
    },
    {
      "data": 8,
      "dateCreate": "2017-08-01T14:14:00",
      "name": "InputSugar"
    },
    {
      "data": 3,
      "dateCreate": "2017-08-01T14:15:00",
      "name": "InputSugar"
    },
    {
      "data": 6,
      "dateCreate": "2017-08-01T14:16:00",
      "name": "InputSugar"
    }
  ];

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map