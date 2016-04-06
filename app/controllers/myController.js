class MyController {
  constructor(userService) {
      this.myList = [];
      this.hello = "Hello Angular";
      this.reverse;
      this.predicate;
      userService.getData()
          .then(result =>
            this.data = result['items']
          );
  }
  order(predicate) {
        this.reverse = (this.predicate === this.predicate) ? !this.reverse : false;
        this.predicate = this.predicate;
      };
      addToMyList(item){
        this.myList.push(item);
        console.log(this.myList)
      }
      openModal(){
        let myblank = document.getElementById('blank');
        myblank.classList.remove('hidden');
      }
  }



MyController.$inject = ['userService'];
export default MyController;
