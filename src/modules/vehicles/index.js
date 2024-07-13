const { Router } = require('express');
const { vehicleController } = require('./controller');

const router = Router();

router.get("/", vehicleController.GetAllVehicles);
router.post("/", vehicleController.CreateNewVehicles);
router.get("/:vehicle_id", vehicleController.GetVehiclesById)
router.put("/:vehicle_id", vehicleController.UpdateVehicle)
router.delete("/:vehicle_id", vehicleController.DeleteVehicle)

module.exports = router;