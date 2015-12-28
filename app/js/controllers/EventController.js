/**
 * Created by hrspencer on 12/28/2015.
 */
'use strict';

eventsApp.controller('EventController',
    function($scope) {
        $scope.event = {
            name: 'Angular Boot Camp',
            date: '1/1/2013',
            time: '10:30 am',
            location: {
                address: 'Google Headquarters',
                city: 'Mountain View',
                province: 'CA'
            },
            imageUrl: '/img/angularjs-logo.png'
        }
    })