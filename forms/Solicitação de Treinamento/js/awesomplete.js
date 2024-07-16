let input = document.getElementById("areaSolicitante");
let areasDataset = DatasetFactory.getDataset("ds_integracao_rm", ["areas"], null, null);
let areas = []

for(let i = 0; i <= 2237; i++) {
    areas.push(areasDataset.values[i].AREA)
}

new Awesomplete(input, {
    list: areas
});

$(document).on("focusout", "[id='areaSolicitante']", function() {
    let inputValue = $(this).val();
    if (!areas.includes(inputValue)) {
        $(this).val('');
    }
});