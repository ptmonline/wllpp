describe('Services: JsonDataService', function(){
  beforeEach(module('wallapop'));

  var JsonDataService;
  var $httpBackend;

  beforeEach(inject(function(_JsonDataService_, _$httpBackend_){
    JsonDataService = _JsonDataService_;
    $httpBackend = _$httpBackend_;
  }))

  it("Should GET data from JSON file", function(){

    $httpBackend.expectGET('items.json').respond({"items": [
      {"title" : "iPhone 6S Oro", "email": "iphonemail@wallapop.com", "price": "740"},
      {"title" : "Polaroid 635", "email": "cameramail@wallapop.com", "price": "50"}
    ]});

    var response = JsonDataService.getData();
    $httpBackend.flush();

    expect(response).not.toBe(null);

  })

  afterEach(function(){
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  })

})
