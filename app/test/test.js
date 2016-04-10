import angular from 'angular'
import LayoutController from '../controllers/layoutController.js';
import DataService from '../services/service.data.js';
//TODO: Create test
describe('ES6 Test', function () {

//   beforeEach(inject(function(_dataService_) {
//   dataService = _dataService_;
// }));

    beforeEach(()=>{
        bar = DataService.getData();
        foo = new LayoutController();
    });

    it('should return Hello Angular', ()=>{
        expect(foo.hello).toEqual('Hello Angular');
        expect(foo.myList).toEqual([]);
    });
    it('should return array', ()=>{
        expect(foo.myList).toEqual([]);
    });
});
