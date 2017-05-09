function Airport() {
  this.hangar = [];
  this.hangarCapacity = 2
};

Airport.prototype.land = function(plane) {
  this._capacityCheck();
  this._checkWeather();
  this.hangar.push(plane);
};


Airport.prototype.takeoff = function(plane) {
  this._checkWeather()
  this.hangar.pop(plane);
};

Airport.prototype._checkWeather = function(){
var weather = (new Weather).condition()
if (weather === "Stormy") throw(new Error("Stormy Weather"));
};

Airport.prototype._capacityCheck = function(){
if (this.hangar.length >= this.hangarCapacity) throw(new Error("Airport Full"));
};
