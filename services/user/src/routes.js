const express = require("express");
const userController = require("./user.controller.js");

const router = express.Router();

router.get("/health", (req, res) => {
    res.json({
        service: "user health",
        status: "ok"
    });
});
router.get("/", userController.getUsers);
router.get("/:id", userController.getUserById);
router.post("/", userController.createUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);


module.exports = router;
