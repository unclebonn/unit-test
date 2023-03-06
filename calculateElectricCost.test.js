const calculateElectricCost = require('./calculateElectricCost');

describe('calculateElectricCost', () => {
    it('with valid argument', () => {
        expect(calculateElectricCost(50)).toBeCloseTo(83.9);
        expect(calculateElectricCost(100)).toBeCloseTo(170.6);
        expect(calculateElectricCost(200)).toBeCloseTo(372);
        expect(calculateElectricCost(300)).toBeCloseTo(625.6);
        expect(calculateElectricCost(400)).toBeCloseTo(909);
        expect(calculateElectricCost(401)).toBeCloseTo(911.927);
        expect(calculateElectricCost(500)).toBeCloseTo(1201.7);
    })

    it('with unvalid argument', () => { 
        expect(() => calculateElectricCost('a')).toThrow();
        expect(() => calculateElectricCost(null)).toThrow();
        expect(() => calculateElectricCost(undefined)).toThrow();
        expect(() => calculateElectricCost(-10)).toThrow();
        expect(() => calculateElectricCost([1,2,3])).toThrow();
        expect(() => calculateElectricCost({name:'khoi'})).toThrow();
        // expect(() => calculateElectricCost('')).toThrow();
     })
})
