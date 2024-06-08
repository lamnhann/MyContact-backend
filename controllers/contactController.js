// @desc Get all contacts
// @route GET /api/contacts
// @access public
export const getContacts = (req, res) => {
  res.status(200).json({ message: "Get all contact" });
};

// @desc Creat new contacts
// @route POST /api/contacts
// @access public
export const createContact = (req, res) => {
  res.status(200).json({ message: "Create contact" });
};

// @desc Get contact
// @route GET /api/contacts/:id
// @access public
export const getContact = (req, res) => {
  res.status(200).json({ message: `Get contact ${req.params.id}` });
};

// @desc Update contact
// @route PUT /api/contacts/:id
// @access public
export const updateContact = (req, res) => {
  res.status(200).json({ message: `Update contact ${req.params.id}` });
};

// @desc Delete contact
// @route DELETE /api/contacts/:id
// @access public
export const deleteContact = (req, res) => {
  res.status(200).json({ message: `Delete contact ${req.params.id}` });
};

