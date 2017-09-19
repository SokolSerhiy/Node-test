app.config(function($routeProvider, $locationProvider){
    $routeProvider.when('/', {
        templateUrl: '/page/home/home.html',
        controller: 'homeCtrl',
        controllerAs: 'ctrl'
    });
    $routeProvider.when('/item', {
        templateUrl: '/page/item/item.html',
        controller: 'itemCtrl',
        controllerAs: 'ctrl'
    });
    $routeProvider.when('/item/:id', {
        templateUrl: '/page/item-info/itemInfo.html',
        controller: 'itemInfoCtrl',
        controllerAs: 'ctrl'
    });
    $routeProvider.when('/category', {
        templateUrl: '/page/category/category.html',
        controller: 'categoryCtrl',
        controllerAs: 'ctrl'
    });
    $routeProvider.when('/registration', {
        templateUrl: '/page/registration/registration.html',
        controller: 'registrationCtrl',
        controllerAs: 'ctrl'
    });
    $routeProvider.when('/login', {
        templateUrl: '/page/login/login.html',
        controller: 'loginCtrl',
        controllerAs: 'ctrl'
    });
//    $locationProvider.html5Mode(true);
});