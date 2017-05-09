'use strict';

describe("Plane", function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  it("should be an object", function() {
    expect(plane).toEqual(jasmine.any(Object));
  });
});
