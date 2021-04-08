var app = angular.module('app', []);

app.controller('EditorCtrl', ['$scope', function ($scope) {
    $scope.defaultImage = 'https://images.unsplash.com/photo-1456428199391-a3b1cb5e93ab?crop=entropy&fit=crop&fm=jpg&h=1025&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1675';

    $scope.vignette = 'off';

    $scope.image = {
        blur: 0,
        brightness: 1,
        contrast: 1,
        shadowX: 0,
        shadowY: 0,
        shadowSpread: 0,
        shadowColor: 'black',
        grayscale: 0,
        hueRotate: 0,
        invert: 0,
        opacity: 1,
        saturate: 100,
        sepia: 0
    };
    $scope.orig = angular.copy($scope.image);

    $scope.advancedToggle = false;

    $scope.reset = function() {
        $scope.image = angular.copy($scope.orig);
        $scope.vignette = 'off';
    };

    $scope.vivid = function() {
        $scope.reset();

        $scope.image.brightness = 1.2;
        $scope.image.contrast = 1.3;
        $scope.image.saturate = 200;
        $scope.image.sepia = 5;
    };

    $scope.vintage = function() {
        $scope.reset();

        $scope.image.contrast = 0.8;
        $scope.image.grayscale = 0.7;
        $scope.image.opacity = 0.9;
        $scope.image.sepia = 31;
    };

    $scope.bw = function() {
        $scope.reset();

        $scope.image.brightness = 1.1;
        $scope.image.contrast = 1.5;
        $scope.image.grayscale = 1;

        $scope.vignette = 'on';
    };

    $scope.brighten = function() {
        $scope.reset();

        $scope.image.brightness = 1.4;
        $scope.image.contrast = 1.1;
    };

    $scope.trippy = function() {
        $scope.reset();

        $scope.image.brightness = 0.9;
        $scope.image.invert = 100;
        $scope.image.saturate = 400;
    };

    $scope.$watch('image', function(newVal, oldVal){
        $scope.imageFilter =
            'blur(' + $scope.image.blur + 'px)' +
            'brightness(' + $scope.image.brightness + ')' +
            'contrast(' + $scope.image.contrast + ')' +
            'drop-shadow(' + $scope.image.shadowX + 'px ' + $scope.image.shadowY + 'px ' + $scope.image.shadowSpread + 'px ' + $scope.image.shadowColor + ')' +
            'grayscale(' + $scope.image.grayscale + ')' +
            'hue-rotate(' + $scope.image.hueRotate + 'deg)' +
            'invert(' + $scope.image.invert + '%)' +
            'opacity(' + $scope.image.opacity + ')' +
            'saturate(' + $scope.image.saturate + '%)' +
            'sepia(' + $scope.image.sepia + '%)'
            ;

        $scope.imageStyles= {
           "-webkit-filter" : $scope.imageFilter,
           "filter" : $scope.imageFilter
        };
    }, true);

    $scope.$watch('vignette', function(newVal, oldVal){;
        if (newVal === 'on') {
            $('.image').addClass('vignette');
        } else {
            $('.image').removeClass('vignette');
        }
    }, true);


}]);