describe('LayoutController', function(){
    beforeEach(module('wallapop'))

    var scope, LayoutController, q, deferred, response;

    beforeEach(function(){
      response = {"items": [
        {"title" : "iPhone 6S Oro", "email": "iphonemail@wallapop.com", "price": "740"},
        {"title" : "Polaroid 635", "email": "cameramail@wallapop.com", "price": "50"}
      ]}
      JSONService = {
        getData: function(){
          deferred = q.defer();
          return deferred.promise
        }
      }
    })

    beforeEach(inject(function($controller, $rootScope, $q){
      scope = $rootScope.$new();
      q = $q;
      LayoutController = $controller('LayoutController',{
        $scope : scope,
        JsonDataService: JSONService
      })
  }))

    it("should be registered", function() {
      expect(module).not.toEqual(null);
    });

    it('should return true and data', function(){
      spyOn(JSONService, 'getData').and.callThrough();
      scope.init();
      expect(JSONService.getData).toHaveBeenCalled();
      expect(scope.items).toBeNull();
    })
    it('should return data', function(){
      deferred.resolve(response);
      scope.$root.$digest();
      expect(scope.items[0].title).not.toBeUndefined();
    })
});
