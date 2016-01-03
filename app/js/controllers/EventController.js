/**
 * Created by hrspencer on 12/28/2015.
 */
'use strict';

eventsApp.controller('EventController',
    function ($scope, eventData) {

        $scope.sortorder = 'name';
        $scope.event = eventData.getEvent()
            .$promise.then(function(event) { $scope.event = event; console.log(event) })
            .catch(function(response) { console.log(response) }
            );

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        };
    });