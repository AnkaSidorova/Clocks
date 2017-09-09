interface IClock {
    height:number,
    width:number,
    weight:number,
    color:string,
    life:number,
    price:number,
}

let quantity = prompt("Какое количество часов вам необходимо?");
let consignment = [];
function BatchCollection(quantity:number) {
    let response = {
        message: '',
        consignment: []
    };
    for (let i = 0; i < quantity; i++)
        consignment.push(createClock());

    response.consignment = consignment;
    response.message = "Поступил заказ на: " + quantity +
        " часов. Партия готова! Ваша заказ содержит: " + quantity +
    " часов, таких видов: " + JSON.stringify(consignment) +
    "Стоимость вашего заказа: " + priceCalculation(consignment) + "руб";
    return response;
}

function createClock():IClock {
    return {
        height: randomInteger(10, 100),
        width: randomInteger(10, 100),
        weight: randomInteger(50, 1000),
        color: randomColor(),
        life: randomInteger(1, 5),
        price: randomInteger(500, 5000),
    }
}

function randomInteger(min, max):number {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}
function randomColor():string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
function priceCalculation(array):number {
    return array.reduce((sum, item) => sum.price || sum + item.price);
}
let newLEt = BatchCollection(parseInt(quantity));

console.log(newLEt);