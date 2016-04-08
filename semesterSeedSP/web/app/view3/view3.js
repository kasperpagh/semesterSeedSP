'use strict';

angular.module('myApp.view3', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/view3', {
                    templateUrl: 'app/view3/view3.html',
                    controller: 'View3Ctrl'
                });
            }])

        .controller('View3Ctrl', function ($http, $scope) {
            $http.get('api/allusers')
                    .success(function (data, status, headers, config)
                    {
                        $scope.users = [];
                        for (var i = 0; i < data.length; i++)
                        {
                            $scope.users.push(data[i]);
                        }
                        $scope.heads = [];
                        $scope.heads = Object.keys($scope.users[1]);

                    })
                    .error(function (data, status, headers, config) {

                    });

        });