app.directive('lgsPagination', function(){
    return {
        scope:{
            ngModel:'=',
            size:'=?',
            totalPages:'='
        },
        transclude: false,
        replace:true,
        templateUrl:'/directive/pagination/pagination.html',
        require: 'ngModel',
        link: function(scope, element, attrs){
            scope.page = scope.ngModel;
            scope.pages = buildPages(scope.totalPages, scope.page);
            scope.changePage = function(page, ev){
                ev.preventDefault();
                if(page>=1&&page<=scope.totalPages){
                    scope.ngModel = page;
                    scope.page = page;
                    scope.pages = buildPages(scope.totalPages, page);
                }
            }
            scope.$watch('totalPages', function(newValue, oldValue){
                if(newValue!=oldValue){
                    if(newValue<scope.page) {
                        scope.ngModel = newValue;
                        scope.page = newValue;
                    }
                    scope.pages = buildPages(scope.totalPages, scope.page);
                }
            });
        }
    };
    function buildPages(totalPages, page){
        var pages = [];
        var visiblePages = 5;
        if(totalPages<=visiblePages){
            for(var i = 1; i <= totalPages; i++){
                pages.push(i);
            }
        } else {
            var half = Math.floor(visiblePages/2);
            var start = page - half >= 1 ? page - half : 1;
            var end = start + visiblePages - 1 > totalPages ? totalPages : start + visiblePages - 1;
            start = end - start < visiblePages - 1 ? end - visiblePages + 1 : start;
            for(; start <= end; start++){
                pages.push(start);
            }
        }
        return pages;
    }
});