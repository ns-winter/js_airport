describe("Airport", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = 'plane';
  });

  it("should land a plane", function() {
    airport.land(plane)
    expect(airport.hangar).toContain(plane)
  });

  it("should takeoff a plane", function() {
    airport.land(plane)
    airport.takeoff(plane)
    expect(airport.hangar).not.toContain(plane)
  });
});
