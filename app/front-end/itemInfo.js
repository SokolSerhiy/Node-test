app.controller('itemInfoCtrl', function($routeParams, $http){
    var vm = this;
    vm.item = {};
    vm.load = function(){
        $http.get(`/items/${$routeParams.id}`).then(
            res=>vm.item=res.data,
            err=>console.log(err)
        );
    }
    vm.load();
});