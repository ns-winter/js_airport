describe("Weather", function() {
 var weather;

 beforeEach(function() {
   weather = new Weather();
 });

  it("should have forecasts", function() {
    expect(weather.forecast).toContain('Sunny')
    expect(weather.forecast).toContain('Stormy')
  });

  it("should be sunny", function() {
    spyOn(Math, 'random').and.returnValue(0.1);
    expect(weather.condition()).toEqual('Sunny')
  });

  it("should be stormy", function() {
    spyOn(Math, 'random').and.returnValue(0.9);
    expect(weather.condition()).toEqual('Stormy')
  });

});
