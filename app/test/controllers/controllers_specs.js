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

    it("Should return $scope.hello right", function(){
      expect(scope.hello).toEqual('Hello');
    })

    it('should return true and data', function(){
      spyOn(JSONService, 'getData').and.callThrough();
      scope.init();
      console.log(JSONService.getData())
      expect(JSONService.getData).toHaveBeenCalled();
      expect(scope.items).toBeNull();
      deferred.resolve(response);
      expect(scope.items[0].title).not.toBeUndefined();
    })
});
