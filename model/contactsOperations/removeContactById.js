const listContacts = require("./listContacts");
const updateContacts = require("./updateContacts");

const removeContactById = async (id) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex((item) => item.id === id);
  if (idx === -1) {
    return null;
  }
  const [remoweProduct] = contacts.splice(idx, 1);
  await updateContacts(contacts);
  return remoweProduct;
};

module.exports = removeContactById;
