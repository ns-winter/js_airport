describe("fizzBuzz", function() {

  it("should receive 3 and return Fizz", function() {
    expect(fizzBuzz(3)).toEqual('Fizz');
  });

  it("should receive 4 and return 4", function() {
    expect(fizzBuzz(4)).toEqual(4);
  });

  it("should receive 5 and return Buzz", function() {
    expect(fizzBuzz(5)).toEqual('Buzz');
  });

  it("should receive 15 and return FizzBuzz", function() {
    expect(fizzBuzz(15)).toEqual('FizzBuzz');
  });

  it("should receive 6 and return Fizz", function() {
    expect(fizzBuzz(6)).toEqual('Fizz');
  });

  it("should receive 10 and return Buzz", function() {
    expect(fizzBuzz(10)).toEqual('Buzz');
  });

  it("should receive 30 and return FizzBuzz", function() {
    expect(fizzBuzz(30)).toEqual('FizzBuzz');
  });

});
