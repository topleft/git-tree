angular.module('factories').factory('alertFactory', [ '$timeout', "$animate", function($timeout, $animate){
		var alerts = [];

		return {
			add: function (type, msg) {
     		var alert = {
          type: type,
          message: msg,
          close: function() {
              return closeAlert(this);
          }
      	};
      	$timeout(this.closeAlert, 3000, true, alert);
      	return alerts.push(alert);
       },
			closeAlert: function(alert){
				return alerts.splice(alerts.indexOf(alert), 1);
			},
			get: function(){
				return alerts;
			}
		};


}]);