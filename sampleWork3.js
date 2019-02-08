
//Task
//Insert data into a table. The chanllenge here was that our Google Map account could only call the api 5 times every second. So I needed to modify the code to dynamically fill the table as the api responses came in. 


if ('heartBreaks' in r.data) {
  for (var k in r.data['heartBreaks']) {
	var i =0;

	tempHeartBreaks ={
	  dateOpen: getDate(r.data['heartBreaks'][k].eventDate),
	  days: r.data['heartBreaks'][k].eventDate != '' ? moment().diff(moment(r.data['heartBreaks'][k].eventDate, 'YYYYMMDD HH:mm:ss'),'days'): '',
	  info: r.data['heartBreaks'][k].info,
	  lat: r.data['heartBreaks'][k].lat,
	  lon: r.data['heartBreaks'][k].lon,
	  lastPosition : '',
	  description: r.data['heartBreaks'][k].description ? r.data['heartBreaks'][k].description : '',
	  cause: r.data['heartBreaks'][k].cause ? r.data['heartBreaks'][k].cause : '',
	  operatorNote: r.data['heartBreaks'][k].operatorNote ? r.data['heartBreaks'][k].operatorNote : ''
	};

	if( r.data['heartBreaks'][k].lat!= 0 && r.data['heartBreaks'][k].lon!= 0){
	  try {
		googleMapsService.reverseGeocoding(r.data['heartBreaks'][k].lat, r.data['heartBreaks'][k].lon).then(function (ret) {
		  tempHeartBreaks.lastPosition += ret;
		  $scope.heartBreaks.push(tempHeartBreaks);
		  $scope.updateCount();
		  $scope.tableHeartBreaks.reload();
		});
	  }catch (e){
		console.log(e);s
	  }
	}else {
	  $scope.heartBreaks.push(tempHeartBreaks);
	}
  }
  $scope.tableHeartBreaks = new NgTableParams({sorting: { dateOpen: "desc" }}, { dataset: $scope.heartBreaks});
}