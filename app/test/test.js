describe('PhoneListCtrl', function(){

  it('should create "phones" model with 3 phones', function() {
    var scope = {},
        ctrl = new layoutCtrl(scope);

    expect(scope.items.length).toBe(30);
  });

});
