describe('LayoutController', function(){
  beforeEach(module('wallapop'))
  var scope, LayoutController, http, $httpBackend, httpMock;

  beforeEach(inject(function($controller, $rootScope, $http, $injector){
    scope = $rootScope.$new();
    http = $http;
    $httpBackend = $injector.get('$httpBackend');
    httpMock = $httpBackend;
    LayoutController = $controller('LayoutController',{
      $scope : scope
    })
  }))

  it('shoud return true' , function(){
    expect(scope.hello).toBe('Hello');
  });

  it('should return array for items', function(){
    // var response;
    http.get('items.json').success(function(data){
      scope.items = data.items;
      console.log('ITEMS ARE: '+scope.items[0].email)
    })
    $httpBackend.whenGET('items.json')
    .respond({"items": [
      {"title" : "iPhone 6S Oro", "email": "iphonemail@wallapop.com", "price": "740"},
      {"title" : "Polaroid 635", "email": "cameramail@wallapop.com", "price": "50"}
    ]});
    $httpBackend.flush();

    expect(scope.items[0].title).toBe('iPhone 6S Oro')
    expect(scope.items[0].email).toBe('iphonemail@wallapop.com')

  })
  it('Should not blow out of proportions', function(){
    http.get('items.json').success(function(data){
      scope.items = data;
      console.log(scope.items)
    })
    $httpBackend.when('GET','items.json').respond('fuck off and die');
    $httpBackend.flush();
    expect(scope.items).toBe('fuck off and die');

    $httpBackend.expect('GET','items.json').respond(200);
    http.get('items.json');
    expect($httpBackend.flush).not.toThrow();
  })


});
describe('myService test', function(){
  beforeEach(module('wallapop'));
  it('returns 1', inject(function(MyService){
    expect( MyService.one ).toEqual(1);
  }))
});

describe('Directive should render properly', function(){
  beforeEach(module('wallapop'))

  beforeEach(inject(function(_$compile_, _$rootScope_){
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }))
  it('replaces with right content', function(){
    var elem = $compile('<navbar-container></navbar-container>')($rootScope);
    $rootScope.$digest();
    console.log(elem)
    expect(elem.html()).toContain("fuck");
    expect(elem.find('navbar-container').length).toEqual(0);
  })
})
describe('Testing Routes', function(){
  var routes;
  beforeEach(module('wallapop'));
  it('should return true all the time', function(){
    inject(function($route, $location, $rootScope){
      expect($route.routes['/'].controller).toBe('LayoutController');
      // expect($route.current).toBeUndefined();
      // $location.path('/');
      // $rootScope.$digest();
      // expect($route.current.templateUrl).toBe('templates/home.template.html');
      // expect($route.current.controller).toBe(LayoutController);
    })
  })
})
