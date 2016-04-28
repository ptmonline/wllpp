angular.module('wallapop')
  .factory('JsonDataService', function($http){
    return{
      getData: function(){
        return $http.get('items.json')
          .then(function(response){
            return response.data
          })
      }
    }
  })
