var quantity = prompt("Какое количество часов вам необходимо?");
var consignment = [];
function BatchCollection(quantity) {
    var response = {
        message: '',
        consignment: []
    };
    for (var i = 0; i < quantity; i++)
        consignment.push(createClock());
    response.consignment = consignment;
    response.message = "Поступил заказ на: " + quantity +
        " часов. Партия готова! Ваша заказ содержит: " + quantity +
        " часов, таких видов: " + JSON.stringify(consignment) +
        "Стоимость вашего заказа: " + priceCalculation(consignment) + "руб";
    return response;
}
function createClock() {
    return {
        height: randomInteger(10, 100),
        width: randomInteger(10, 100),
        weight: randomInteger(50, 1000),
        color: randomColor(),
        life: randomInteger(1, 5),
        price: randomInteger(500, 5000)
    };
}
function randomInteger(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}
function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
function priceCalculation(array) {
    return array.reduce(function (sum, item) { return sum.price || sum + item.price; });
}
var newLEt = BatchCollection(parseInt(quantity));
console.log(newLEt);
//# sourceMappingURL=app.js.map