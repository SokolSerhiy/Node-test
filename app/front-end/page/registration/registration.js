app.controller('registrationCtrl', function($http, $location){
    var vm = this;
    vm.save = function(request){
        $http.post('/registration', request).then(
            ()=>$location.url('/login'),
            (err)=>{
                if(err.status===400){
                    vm.message = 'Alredy exist';
                }else{
                    console.log(err);
                }
            }
        );
    }
});