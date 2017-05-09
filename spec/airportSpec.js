'use strict';

describe("Airport", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = 'plane';
  });

  it("should land a plane", function() {
    spyOn(airport, '_checkWeather');
    airport.land(plane)
    expect(airport.hangar).toContain(plane)
  });

  it("should takeoff a plane", function() {
    spyOn(airport, '_checkWeather');
    airport.land(plane)
    airport.takeoff(plane)
    expect(airport.hangar).not.toContain(plane)
  });

  it("should prevent plane from landing if", function() {
    spyOn(airport, '_checkWeather');
    airport.land(plane)
    airport.land(plane)
    expect (function(){
       airport.land(plane) }).toThrowError("Airport Full")
  });

  it("if weather is stormy, prevent landing", function() {
    spyOn(airport, '_checkWeather').and.throwError("Stormy Weather");
    expect(function() {
      airport.land(plane)}).toThrowError("Stormy Weather");
      expect(airport.hangar).not.toContain(plane);
  });

  it("if weather is stormy, prevent takeoff", function() {
    airport.hangar = ['plane']
    spyOn(airport, '_checkWeather').and.throwError("Stormy Weather");
    expect(function() {
      airport.takeoff(plane)}).toThrowError("Stormy Weather");
      expect(airport.hangar).toContain(plane);
  });

});
