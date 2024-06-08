import express from "express";
import {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
} from "../controllers/contactController.js";

const router = express.Router();

router.get("/", getContacts);

router.post("/create", createContact);

router.get("/:id", getContact);

router.put("/update/:id", updateContact);

router.delete("/delete/:id", deleteContact);

export default router;
