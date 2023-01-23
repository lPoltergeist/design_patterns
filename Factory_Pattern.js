const Truck = () => {
    const delivery = () => {
        
        return {
            delivery
        }
    }
}

const Car = () => {
    const delivery = () => {
        
        return {
            delivery
        }
    }
}

const Logistics = () => {
    const TRANSPORT_MAPPER = {
        truck: Truck,
        car: Car,
    }
    const createTransport = (type) =>  TRANSPORT_MAPPER[type]();

    retun (
        createTransport, 
    )
}

const tuck =Logistics.createTransport('truck');
truck.delivery()

