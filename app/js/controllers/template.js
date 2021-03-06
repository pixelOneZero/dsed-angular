'use strict';

angular.module('app').controller('TemplateController', function ($scope) {

    // model
    var model = $scope.model = {
        widgets: [
            {
                id: 'jira',
                dataRow: 1,
                dataCol: 1,
                dataSizeX: 3,
                dataSizeY: 6
            },
            {
                id: 'git',
                dataRow: 1,
                dataCol: 1,
                dataSizeX: 3,
                dataSizeY: 6
            },
            {
                id: 'stock',
                dataRow: 1,
                dataCol: 1,
                dataSizeX: 2,
                dataSizeY: 2
            },
            {
                id: 'clock',
                dataRow: 1,
                dataCol: 2,
                dataSizeX: 2,
                dataSizeY: 2
            },
            {
                id: 'weather',
                dataRow: 1,
                dataCol: 5,
                dataSizeX: 2,
                dataSizeY: 2
            }

        ]
    };

    // actions
    var action = $scope.action = {
        temp: function() {
            model.temp = 'state changed!';
        }
    };

});