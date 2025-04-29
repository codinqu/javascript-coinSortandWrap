
function sortCoins() {
    const pennies = parseInt(document.getElementById('pennies').value) || 0;
    const nickels = parseInt(document.getElementById('nickels').value) || 0;
    const dimes = parseInt(document.getElementById('dimes').value) || 0;
    const quarters = parseInt(document.getElementById('quarters').value) || 0;
    // parseInt turns it from a string into a number

    const values = {
        penny: 0.01,
        nickel: 0.05,
        dime: 0.10,
        quarter: 0.25
    };
    // the values of the coins never change

    const capacities = {
        penny: 50,
        nickel: 40,
        dime: 50,
        quarter: 40
    };
    //

    const total = (
        pennies * values.penny +
        nickels * values.nickel +
        dimes * values.dime +
        quarters *values.quarter
    ).toFixed(2);
    //

    const rolls = {
        penny: Math.floor(pennies / capacities.penny),
        nickel: Math.floor(nickels / capacities.nickel),
        dime: Math.floor(dimes / capacities.dime),
        quarter: Math.floor(quarters / capacities.quarter)
    };
    //

    const leftovers = {
        penny: pennies % capacities.penny,
        nickel: nickels % capacities.nickel,
        dime: dimes % capacities.dime,
        quarter: quarters % capacities.quarter
    };
    //

    const resultText = `
    <h2>Sorting Complete!</h2>
    <p><strong>Total Value:</strong> $${total}</p>
    <ul>
        <li>Penny Rolls: ${rolls.penny}, Leftover: ${leftovers.penny}</li>
        <li>Nickel Rolls: ${rolls.nickel}, Leftover: ${leftovers.nickel}</li>
        <li>Dime Rolls: ${rolls.dime}, Leftover: ${leftovers.dime}</li>
        <li>Quarter Rolls: ${rolls.quarter}, Leftover: ${leftovers.quarter}</li>
    </ul>
    `;

    document.getElementById('results').innerHTML = resultText;
}

console.log(sortCoins());