import asyncHandle from 'express-async-handler';

// @desc Get all contacts
// @route GET /api/contacts
// @access public
export const getContacts = asyncHandle(async (req, res) => {
  res.status(200).json({ message: "Get all contact" });
});

// @desc Creat new contacts
// @route POST /api/contacts
// @access public
export const createContact = asyncHandle(async (req, res) => {
  console.log("The request body is:  ", req.body)
  const {name, email, phone} = req.body;
  if( !name || !email || !phone) {
    res.status(400);
    throw new Error("All fields art mandatory");
  }
  res.status(200).json({ message: "Create contact" });
});

// @desc Get contact
// @route GET /api/contacts/:id
// @access public
export const getContact = asyncHandle(async (req, res) => {
  res.status(200).json({ message: `Get contact ${req.params.id}` });
});

// @desc Update contact
// @route PUT /api/contacts/:id
// @access public
export const updateContact = asyncHandle(async (req, res) => {
  res.status(200).json({ message: `Update contact ${req.params.id}` });
});

// @desc Delete contact
// @route DELETE /api/contacts/:id
// @access public
export const deleteContact = asyncHandle(async (req, res) => {
  res.status(200).json({ message: `Delete contact ${req.params.id}` });
});

