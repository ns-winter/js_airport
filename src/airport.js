function Airport() {
  this.hangar = [];
};

Airport.prototype.land = function(plane) {
  this.hangar.push(plane);
};


Airport.prototype.takeoff = function(plane) {
  this.hangar.pop(plane);
};
