angular.module("devmtnTravel").controller("bookedCtrl", function($scope, mainSrv){
    
    $scope.booked = mainSrv.travelInfo;
    
})