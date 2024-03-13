(async function() {
    const data = await fetch("./src/data.json");
    const res = await data.json();

    let employee = res;
    let selectedEmployeeId = employee[0].id;
    let selectedEmployee = employee[0];
    console.log(res)
})();