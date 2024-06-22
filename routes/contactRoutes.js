import express from "express";
import {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
} from "../controllers/contactController.js";
import { validateToken } from '../middleware/validateTokenHandler.js'

const router = express.Router();

router.use(validateToken);

router.get("/", getContacts);

router.post("/create", createContact);

router.get("/:id", getContact);

router.put("/update/:id", updateContact);

router.delete("/delete/:id", deleteContact);

export default router;
