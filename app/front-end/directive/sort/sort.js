app.directive('lgsSort', function(){
    return {
        scope:{
            asc:'&',
            desc:'&',
            array:'=',
            label:'=?',
            value:'=?'
        },
        transclude: false,
        replace:false,
        templateUrl:'/directive/sort/sort.html',
        link: function(scope, element, attrs){
            scope.isDropdownVisible = false;
            if(!scope.label) scope.label = 'label';
            if(!scope.value) scope.value = 'value';
            scope.data = [];
            scope.current = {};
            for(var i = 0; i < scope.array.length; i++){
                //{label: 'name, value: 'name'}
                var elem = scope.array[i];
                var pair = {};
                pair[scope.label] = elem[scope.label]+' asc';
                pair[scope.value] = elem[scope.value];
                pair.asc = true;
                elem[scope.label] = elem[scope.label]+' desc';
                elem.asc = false;
                scope.data.push(pair);
                scope.data.push(elem);
            }
            scope.triggerMenu = function(){
            scope.isDropdownVisible=!scope.isDropdownVisible
            }
            scope.changeSort = function(sort, ev){
                ev.preventDefault();
                scope.triggerMenu();
                scope.current = sort;
                if(sort.asc){
                    scope.asc({field:sort[scope.value]});
                }else{
                    scope.desc({field:sort[scope.value]}    );
                }
            }
        }
    };
});