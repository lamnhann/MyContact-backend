import asyncHandle from 'express-async-handler';
import Contact from '../models/contactModel.js';

// @desc Get all contacts
// @route GET /api/contacts
// @access private
export const getContacts = asyncHandle(async (req, res) => {
  const contacts = await Contact.find({ user_id: req.user.id });
  res.status(200).json(contacts);
});

// @desc Creat new contacts
// @route POST /api/contacts/create
// @access private
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
    user_id: req.user.id,
  });

  res.status(201).json(contact);
});

// @desc Get contact
// @route GET /api/contacts/:id
// @access private
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
// @access private
export const updateContact = asyncHandle(async (req, res) => {
  const contact = await Contact.findById(req.params.id)
  if(!contact) {
    res.status(404);
    throw new Error("Contact not found")
  }

  if(contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User don't have permission to update other user contacts")
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
// @access private
export const deleteContact = asyncHandle(async (req, res) => {
  const contact = await Contact.findById(req.params.id)
  if(!contact) {
    res.status(404);
    throw new Error("Contact not found")
  }

  if(contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User don't have permission to update other user contacts")
  }

  await Contact.deleteOne({_id: req.params.id});
  
  res.status(200).json(contact);
});

