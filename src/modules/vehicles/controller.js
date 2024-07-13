const vehicles = require('../../model/vehicles.json');

const vehicleController = {
    GetAllVehicles: async (_req, res, next) => {
        try {
            res.json(vehicles);
        } catch (error) {
            next(error);
        }
    },
    GetVehiclesById: async (req, res, next) => {
        const vehiclesId = req.params.vehicle_id;
        const findVehicles = vehicles.find(v => v.id == vehiclesId);
        try {
            if (!findVehicles) {
                res.status(404).send('VEHICLE_NOT_FOUND')
            }
            res.json(findVehicles)
        } catch (error) {
            next(error)
        }
    },
    CreateNewVehicles: async (req, res, next) => {
        try {
            const newVehicle = req.body;
            console.log(!newVehicle)
            if (Object.keys(newVehicle).length === 0) {
                res.status(403).json("FAILED_TO_CREATE_VEHICLE")
            }
            vehicles.push(newVehicle);
            res.status(201).json(newVehicle);

        } catch (error) {
            next(error)
        }
    },
    UpdateVehicle: async (req, res, next) => {
        try {
            const vehiclesId = req.params.vehicle_id;
            const findVehicle = vehicles.find(v => v.id == vehiclesId);
            if (!findVehicle) {
                res.status(404).send('VEHICLE_NOT_FOUND');
            }
            if (findVehicle) {
                Object.assign(findVehicle, req.body);
                res.json(findVehicle);
            }
        } catch (error) {
            next(error)
        }
    },
    DeleteVehicle: async (req, res, next) => {
        try {
            const vehiclesId = req.params.vehicle_id;
            const index = vehicles.findIndex(v => v.id == vehiclesId);
            if (index !== -1) {
                vehicles.splice(index, 1);
                res.status(201).send('Vehicle delete successfully');
            } else {
                res.status(404).send('VEHICLE_NOT_FOUND');
            }
        } catch (error) {
            next(error)
        }
    }
};

module.exports = {
    vehicleController
};
