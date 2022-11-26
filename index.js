const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} = require("./controllers/contacts");

listContacts().then((data) => console.table(data));
getContactById("1").then((data) => console.table(data));
// addContact("Test", "test@test.com", "777-777-777").then((data) =>
//   console.table(data)
// );
removeContact("92dc90a7-5732-4efd-b4ef-ce894e19b5d7");
