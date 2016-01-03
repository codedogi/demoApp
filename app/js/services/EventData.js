/**
 * Created by hrspencer on 1/2/2016.
 */

eventsApp.factory('eventData', function ($resource) {
    var resource = $resource('/data/event/:id', {id: '@id'});
    return {
        getEvent: function () {
            return resource.get({id:1});
        },
        save: function(event) {
            return resource.save(event);
        }
    }
});