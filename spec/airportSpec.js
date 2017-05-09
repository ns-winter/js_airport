describe("Airport", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = 'plane';
  });

  it("should land a plane", function() {
    spyOn(airport, '_checkweather');
    airport.land(plane)
    expect(airport.hangar).toContain(plane)
  });

  it("should takeoff a plane", function() {
    spyOn(airport, '_checkweather');
    airport.land(plane)
    airport.takeoff(plane)
    expect(airport.hangar).not.toContain(plane)
  });

  it("if weather is stormy, prevents takeoff and landing", function() {
    spyOn(airport, '_checkweather').and.throwError("Stormy Weather");
    expect(function() {
      airport._checkweather()}).toThrowError("Stormy Weather");
  });

});
