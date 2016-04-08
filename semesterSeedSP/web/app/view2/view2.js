'use strict';

angular.module('myApp.view2', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/view2', {
              templateUrl: 'app/view2/view2.html',
              controller: 'View2Ctrl'
            });
          }])

        .controller('View2Ctrl', function ($http, $scope) {
          $http({
            method: 'GET',
            url: 'api/footballclubs'
          }).then(function successCallback(res) {
            $scope.data = res.data.url;
            $scope.urls = [];
            for(var i =0; i < res.data.length; i++)
            {
                $scope.urls.push(res.data[i]);
            }
            console.log("hej llama: " + res.data[1].url);
            
          }, function errorCallback(res) {
            $scope.error = res.status + ": "+ res.data.statusText;
          });

        });