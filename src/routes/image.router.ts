import { Router } from "express";
import {
    getAllImages,
    getImageById,
    getImageByProductId,
    storeImage,
    deleteImageById
} from "../controllers/image.controller";

const imageRouter = Router();

imageRouter.get("/", getAllImages);
imageRouter.get("/:id", getImageById);
imageRouter.get("/product/:id",getImageByProductId);
imageRouter.post("/:id", storeImage);
imageRouter.delete("/:id",deleteImageById)


export default imageRouter;