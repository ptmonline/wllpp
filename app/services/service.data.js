'use-strict';

angular.module('wallapop')
.factory('JsonService', function($resource) {
  return $resource('items.json');
});
