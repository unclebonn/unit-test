/* exported render */
function calculateElectricCost(amountOfElectric) {
    let electricCost = 0;
    let stage1 = 1.678,
        stage2 = 1.734,
        stage3 = 2.014,
        stage4 = 2.536,
        stage5 = 2.834,
        stage6 = 2.927

    if ((amountOfElectric === '')) {
        throw new Error('Input must be number')
    }
    if (amountOfElectric < 0) {
        throw new Error('Input the amount bigger than 0')
    }
    if (!Number.isFinite(amountOfElectric)) {
        throw new Error('Only input the number !!!')
    }

    if (amountOfElectric <= 50) {
        electricCost = amountOfElectric * stage1;
    } else if (amountOfElectric <= 100) {
        electricCost = 50 * stage1 + ((amountOfElectric - 50) * stage2);
    } else if (amountOfElectric <= 200) {

        electricCost = 50 * stage1 + (50 * stage2) + ((amountOfElectric - 100) * stage3);

    } else if (amountOfElectric <= 300) {
        electricCost = 50 * stage1 + (50 * stage2) + (100 * stage3) + ((amountOfElectric - 200) * stage4);

    } else if (amountOfElectric <= 400) {
        electricCost = 50 * stage1 + (50 * stage2) + (100 * stage3) + (100 * stage4) + ((amountOfElectric - 300) * stage5);

    } else if (amountOfElectric > 400) {
        electricCost = 50 * stage1 + (50 * stage2) + (100 * stage3) + (100 * stage4) + (100 * stage5) + ((amountOfElectric - 400) * stage6);

    }
    return electricCost;



}
module.exports = calculateElectricCost;

