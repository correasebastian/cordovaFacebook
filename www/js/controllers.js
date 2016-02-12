var of;

angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, ngFB) {

    var options = {
        scope: "email"
    }
    of = ngFB;

    ngFB.init({
        appId: '1021625004561044',
        tokenStore: localStorage, //override sessionStorage
        oauthRedirectURL:  'http://localhost:8100/'+ 'templates/oauthcallback.html' //override the default  host + oauthcallback.html
    });

    $scope.login = function() {
        // debugger;
        ngFB.login(options)
            .then(function(res) {
                console.log('ok', res)
            }).catch(function(error) {
                console.log('error', error)
            })
    }

    $scope.getInfo = function() {
        ngFB.api({
                path: '/me'
            }).then(
                function(user) {
                    console.log(JSON.stringify(user));
                    $scope.user = user;
                })
            .catch(function(error) {
                console.log('error', error)
            })
    }
})

.controller('ChatsCtrl', function($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
        Chats.remove(chat);
    };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
    $scope.settings = {
        enableFriends: true
    };
});
