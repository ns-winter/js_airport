function Airport() {
  this.hangar = [];
};

Airport.prototype.land = function(plane) {
  this._checkweather();
  this.hangar.push(plane);
};


Airport.prototype.takeoff = function(plane) {
  this._checkweather()
  this.hangar.pop(plane);
};

Airport.prototype._checkweather = function(){
var weather = (new Weather).condition()
if (weather === "Stormy") throw "Stormy Weather";
};
