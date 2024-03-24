
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount: 10000,
    years: 5,
    rate: 2
  };
  expect(calculateMonthlyPayment(values)).toEqual('175.28')
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {
    amount: 10000,
    years: 6,
    rate: 2
  };
  expect(calculateMonthlyPayment(values)).toEqual('147.50')
});

/// etc
