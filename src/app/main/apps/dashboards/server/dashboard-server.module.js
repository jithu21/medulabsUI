(function ()
{
    'use strict';

    angular
        .module('app.dashboards.server', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        // State
        $stateProvider.state('app.dashboards_server', {
            url      : '/dashboard-server',
            views    : {
                'content@app': {
                    templateUrl: 'app/main/apps/dashboards/server/dashboard-server.html',
                    controller : 'DashboardServerController as vm'
                }
            },
            resolve  : {
                DashboardData: function (apiResolver)
                {
                    return {
                      "widget1": {
                          "title": "Growth Chart",
                        "chart": [
                          {
                            "key": "Height",
                            "values": [
                              {"x": 0, "y": 51},
                              {"x": 30, "y": 52},
                              {"x": 60, "y": 53},
                              {"x": 90, "y": 55},
                              {"x": 120, "y": 56},
                              {"x": 150, "y": 65},
                              {"x":180, "y": 80},
                              {"x": 210, "y": 85},
                              {"x": 240, "y": 90},
                              {"x": 270, "y": 91}
                            ]
                          },
                          {
                            "key": "Weight",
                            "values": [
                              {"x": 0, "y": 2.5},
                              {"x": 30, "y": 2.8},
                              {"x": 60, "y": 3},
                              {"x": 90, "y": 3.2},
                              {"x": 120, "y": 3.3},
                              {"x": 150, "y": 4.5},
                              {"x":180, "y": 4.5},
                              {"x": 210, "y": 5},
                              {"x": 240, "y": 5.2},
                              {"x": 270, "y": 5.4}
                            ]
                          },
                          {
                            "key": "Head Circumference",
                            "values": [
                              {"x": 0, "y": 10},
                              {"x": 30, "y": 12},
                              {"x": 60, "y": 12},
                              {"x": 90, "y": 12},
                              {"x": 120, "y": 14},
                              {"x": 150, "y": 15},
                              {"x":180, "y": 15},
                              {"x": 210, "y": 15},
                              {"x": 240, "y": 16},
                              {"x": 270, "y": 16}
                            ]
                          }
                        ]
                      },
                      "widget2": {
                        "title": "Total Checkups",
                        "value": {
                          "used": "5 times",
                          "total": "",
                          "percentage": 67.45
                        },
                        "detail": "Total Number of Customers."
                      },
                      "widget3": {
                        "title": "Polio visits",
                        "value": {
                          "used": "2 times",
                          "total": "",
                          "percentage": 6.31
                        },
                        "detail": "Total Number of Orders."
                      },
                      "widget4": {
                        "title": "Total Insulin",
                        "value": "3 times",
                        "footnote": "Higher than average",
                        "detail": "This is the back side. You can show detailed information here.",
                        "chart": [
                          {
                            "key": "Latency",
                            "values": [
                              {"x": 8000, "y": 1}
                            ]
                          }
                        ]
                      },
                      "widget5": {
                        "title": "Total Medicines",
                        "value": "10",
                        "detail": "This is the back side. You can show detailed information here.",
                        "footnote": "Lower than average"
                      },
                      "widget6": {
                        "title": "Average CPU Usage (Live)",
                        "chart": [
                          {
                            "key": "Average CPU Usage",
                            "values": [
                              {"x": 5, "y": 72},
                              {"x": 10, "y": 26},
                              {"x": 15, "y": 51},
                              {"x": 20, "y": 36},
                              {"x": 25, "y": 66},
                              {"x": 30, "y": 69},
                              {"x": 35, "y": 50},
                              {"x": 40, "y": 35},
                              {"x": 45, "y": 49},
                              {"x": 50, "y": 64},
                              {"x": 55, "y": 37},
                              {"x": 60, "y": 78},
                              {"x": 65, "y": 54},
                              {"x": 70, "y": 8},
                              {"x": 75, "y": 52},
                              {"x": 80, "y": 50},
                              {"x": 85, "y": 56},
                              {"x": 90, "y": 71},
                              {"x": 95, "y": 31},
                              {"x": 100, "y": 37},
                              {"x": 105, "y": 15},
                              {"x": 110, "y": 45},
                              {"x": 115, "y": 35},
                              {"x": 120, "y": 28},
                              {"x": 125, "y": 7},
                              {"x": 130, "y": 36},
                              {"x": 135, "y": 7},
                              {"x": 140, "y": 79},
                              {"x": 145, "y": 12},
                              {"x": 150, "y": 5}
                            ]
                          }
                        ]
                      },
                      "widget7": {
                        "title": "Social Network Feed",
                        "table": {
                          "columns": [
                            {
                              "title": "Campaign Name"
                            },
                            {
                              "title": "Location"
                            },
                            {
                              "title": "Category"
                            },
                            {
                              "title": "Status"
                            }
                          ],
                          "rows": [
                            [
                              {
                                "value": "Increase weight",
                                "classes": "text-bold"
                              },
                              {
                                "value": "Karnataka",
                                "classes": "text-boxed m-0 green-bg white-fg"
                              },
                              {"value": "Growth"},
                              {"value": "Running"}
                            ],
                            [
                              {
                                "value": "Increase Height",
                                "classes": "text-bold"
                              },
                              {
                                "value": "Andhra",
                                "classes": "text-boxed m-0 green-bg white-fg"
                              },
                              {"value": "Growth"},
                              {"value": "Running"}
                            ], [
                              {
                                "value": "Increase Metabolism",
                                "classes": "text-bold"
                              },
                              {
                                "value": "Telangana",
                                "classes": "text-boxed m-0 green-bg white-fg"
                              },
                              {"value": "Growth"},
                              {"value": "Running"}
                            ], [
                              {
                                "value": "Increase weight",
                                "classes": "text-bold"
                              },
                              {
                                "value": "Karnataka",
                                "classes": "text-boxed m-0 green-bg white-fg"
                              },
                              {"value": "Growth"},
                              {"value": "Running"}
                            ], [
                              {
                                "value": "Increase weight",
                                "classes": "text-bold"
                              },
                              {
                                "value": "Karnataka",
                                "classes": "text-boxed m-0 green-bg white-fg"
                              },
                              {"value": "Growth"},
                              {"value": "Running"}
                            ],
                            [
                              {
                                "value": "Valentines Day",
                                "classes": "text-bold"
                              },
                              {
                                "value": "ALL",
                                "classes": "text-boxed m-0 deep-orange-bg white-fg"
                              },
                              {"value": "South"},
                              {"value": "Running"}
                            ]
                          ]
                        }
                      },
                      "widget8": {
                        "title": "Activity",
                        "activities": [
                          {
                            "process" : "Check up at Narayana Hospital",
                            "type": "Output",
                            "value": "5%"
                          },
                          {
                            "process" : "Check up at Polio clinic",
                            "type": "Output",
                            "value": "2%"
                          },
                          {
                            "process" : "Check up at clinic",
                            "type": "Output",
                            "value": "5 %"
                          },
                          {
                            "process" : "Check up at KIMS",
                            "type": "Output",
                            "value": "3%"
                          },
                          {
                            "process" : "Check up at APOLLO",
                            "type": "Output",
                            "value": "4 %"
                          },
                          {
                            "process" : "Check up at Vasan",
                            "type": "Output",
                            "value": "30 %"
                          }
                        ]
                      }
                    };
                }
            },
            bodyClass: 'dashboard-server'
        });
    }

})();
