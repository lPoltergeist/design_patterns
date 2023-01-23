interface LogisticsTransport {
delivery(): void;
}

class Truck implements LogisticsTransport {
    delivery() {}
}

class Car implements LogisticsTransport {
    delivery() {}
}

class Bicycle implements LogisticsTransport {
    delivery() {}
}

class Logistics {
    createTransport(type) {
        if(type === "truck") {
            return new Truck();
        }
        if(type === "car") {
            return new Car();
        }
        if(type === "bicycle") {
            return new Bicycle();
        }
    }
}

const logistic = new Logistics();
const truck = logistic.createTransport('truck') 
const car= logistic.createTransport('car')

truck?.delivery()
car?.delivery()