
//Task
//This was used to display a visual range of how many miles were left in the month for the user to drive. 

$scope.getKMs = function () {
  $scope.currentKM = Math.round($scope.ppm.metersInBlock);
  $scope.maxKM = Math.round($scope.ppm.block);
  $scope.remainingKM = $scope.maxKM - $scope.currentKM > 0 ? Math.round($scope.maxKM - $scope.currentKM) : 0;
  $scope.totalDistance = $scope.addComma(Math.round($scope.ppm.metersSinceLastReset));

  $scope.ie = $scope.checkifIE();
};

$scope.checkifIE = function(){
  if(navigator.userAgent.indexOf('MSIE')!==-1 || navigator.appVersion.indexOf('Trident/') > 0){
	$('#-ms-track #thumb_container').css('top', '-10px');

	return true;
  }
  return false;
};

$scope.addComma = function (x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
};