'use strict';
class DataService {
    constructor($http) {
      this.$http = $http;
    }
    getData() {
      return this.$http.get('items.json')
        .then(result => {
          return result.data;
        });
      }
  }

export default DataService;
