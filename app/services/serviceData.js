class UserService {
    constructor($http) {
      this.$http = $http;
    }
    getData() {
      return this.$http.get('items.json')
        .then(function(result) {
          return result.data;
        });
      }
  }

export default UserService;
