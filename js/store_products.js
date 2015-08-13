(function () {
  var app = angular.module('store-products', [])
  app.directive('productTitle', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/product-title.html'
    };
  });

  app.directive('productPanels', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/product-panels.html',
    //   controller: function() {
                                        //this is not working
    //   },
    //   controllerAs: 'panel'
    };
  });
})();