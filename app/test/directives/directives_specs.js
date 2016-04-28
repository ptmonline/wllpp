describe('Testing for Directives', function(){

  beforeEach(module('wallapop','templates'));
  // beforeEach(module('templates/navbar.directive.html'))

  var elm, scope, compile;

  beforeEach(inject(function(_$rootScope_, $compile){
    scope = _$rootScope_;
    scope.$new();
    compile = $compile;
  }))

  it('should render properly', function(){
    elm = compile('<navbar-container></navbar-container>')(scope)
    scope.$digest();
    expect(elm.find('navbar-container').length).toEqual(0);
    expect(elm.find('h1').html()).toContain("Go Fuck Yourself!!");
  })

})
