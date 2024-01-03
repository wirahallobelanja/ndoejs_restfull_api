import { Router } from "express";
import TutorialController from "../controllers/tutorial.controller";

class TutorialRoutes {
  router = Router();
  controller = new TutorialController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    // Create a new Tutorial
    this.router.post("/", this.controller.create);

    // Retrieve all Tutorials
    this.router.get("/findAll", this.controller.findAll);

    // Retrieve all published Tutorials
    this.router.get("/published", this.controller.findAllPublished);

    // Retrieve a single Tutorial with id
    this.router.get("/getOne", this.controller.findOne);

    // Update a Tutorial with id
    this.router.put("/update/:id", this.controller.update);

    // Delete a Tutorial with id
    this.router.delete("/deleteOne/:id", this.controller.delete);

    // Delete all Tutorials
    this.router.delete("/deleteAll", this.controller.deleteAll);
  }
}

export default new TutorialRoutes().router;
