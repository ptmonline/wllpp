import angular from 'angular'
// import angularmock from 'angular-mock'
import MyController from '../controllers/myController.js';
import DataService from '../services/serviceData.js';
let foo;
let bar;
describe('ES6 Foo', function () {

//   let dataService;
//   beforeEach(inject(function(_dataService_) {
//   dataService = _dataService_;
// }));
// let _myService;
// beforeEach(inject(['myService.foo', function (myService) {
//     _myService = myService;
// }]));
    beforeEach(()=>{
        bar = DataService.getData();
        foo = new MyController();
    });

    it('should return Hello Angular', ()=>{
        expect(foo.hello).toEqual('Hello Angular');
        expect(foo.myList).toEqual([]);
    });
    it('should return Do Something when calling doSomething', ()=>{
        expect(foo.myList).toEqual([]);
    });
});
