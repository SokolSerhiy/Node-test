app.directive('lgsSize', function(){
    return {
        scope:{
            ngModel:'=',
            sizes:'='
        },
        transclude: false,
        replace:false,
        templateUrl:'/directive/size/size.html',
        require: 'ngModel',
        link: function(scope, element, attrs){
            scope.isDropdownVisible = false;
            scope.triggerMenu = function(){
            scope.isDropdownVisible=!scope.isDropdownVisible
            }
            scope.changePageSize = function(size, ev){
                ev.preventDefault();
                scope.triggerMenu();
                if(size!==scope.ngModel){
                    scope.ngModel = size;
                }
            }
        }
    };
});