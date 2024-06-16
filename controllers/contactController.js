import asyncHandle from 'express-async-handler';
import Contact from '../models/contactModel.js';

// @desc Get all contacts
// @route GET /api/contacts
// @access public
export const getContacts = asyncHandle(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

// @desc Creat new contacts
// @route POST /api/contacts/create
// @access public
export const createContact = asyncHandle(async (req, res) => {
  console.log("The request body is:  ", req.body)
  const {name, email, phone} = req.body;
  if( !name || !email || !phone) {
    res.status(400);
    throw new Error("All fields art mandatory");
  }

  const contact = await Contact.create({
    name,
    email,
    phone,  
  });

  res.status(201).json(contact);
});

// @desc Get contact
// @route GET /api/contacts/:id
// @access public
export const getContact = asyncHandle(async (req, res) => {
  const contact = await Contact.findById(req.params.id)
  if(!contact) {
    res.status(404);
    throw new Error("Contact not found")
  }
  
  res.status(200).json(contact);
});

// @desc Update contact
// @route PUT /api/contacts/:id
// @access public
export const updateContact = asyncHandle(async (req, res) => {
  const contact = await Contact.findById(req.params.id)
  if(!contact) {
    res.status(404);
    throw new Error("Contact not found")
  }

  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new: true}
  );
  
  res.status(200).json(updatedContact);
});

// @desc Delete contact
// @route DELETE /api/contacts/:id
// @access public
export const deleteContact = asyncHandle(async (req, res) => {
  res.status(200).json({ message: `Delete contact ${req.params.id}` });
});

