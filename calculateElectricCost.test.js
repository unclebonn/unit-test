const calculateElectricCost = require('./calculateElectricCost');

describe('calculate Electric Cost:', () => {
    it('with valid argument', () => {
        expect(calculateElectricCost(5.8)).toBeCloseTo(9.7324);
        expect(calculateElectricCost(50)).toBeCloseTo(83.9);
        expect(calculateElectricCost(100)).toBeCloseTo(170.6);
        expect(calculateElectricCost(200)).toBeCloseTo(372);
        expect(calculateElectricCost(300)).toBeCloseTo(625.6);
        expect(calculateElectricCost(400)).toBeCloseTo(909);
        expect(calculateElectricCost(401)).toBeCloseTo(911.927);
        expect(calculateElectricCost(500)).toBeCloseTo(1201.7);
    })

    it('with invalid argument', () => { 
        expect(() => calculateElectricCost('a')).toThrow();
        expect(() => calculateElectricCost(null)).toThrow();
        expect(() => calculateElectricCost(undefined)).toThrow();
        expect(() => calculateElectricCost(-10)).toThrow();
        expect(() => calculateElectricCost([1,2,3])).toThrow();
        expect(() => calculateElectricCost({name:'khoi'})).toThrow();
        expect(() => calculateElectricCost('')).toThrow();
        expect(() => calculateElectricCost(false)).toThrow();
        expect(() => calculateElectricCost(true)).toThrow();
     })
})


describe('calculate Electric Cost Using Parameterized: ', () => {
    test.each([
      [5.8, 9.7324],
      [50, 83.89999999999999],
      [100, 170.6],
      [200, 372],
      [300, 625.6],
      [400, 909],
      [500, 1201.7],
      //n  //expected
    ])('Amount of kwh: %f - Cost: %f', (kwh, expected) => {
      expect(calculateElectricCost(kwh)).toEqual(expected);
            //actual                  |||      //expected
    });
});
