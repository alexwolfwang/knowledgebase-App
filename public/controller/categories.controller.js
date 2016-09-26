/**
 * Created by Alex.W on 2016/9/20.
 */
angular.module("knowledgeBase")

.controller('CategoriesCtrl',function($scope, $http) {
    $http.get('/categories').success(function(data) {
        $scope.categories = data;
    })
});