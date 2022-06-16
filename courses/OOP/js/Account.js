class Account {
  constructor(name, document, email, password) {
    this.id;
    this.name = name;
    this.document = document;
    this.email = email;
    this.password = password;
  }
  printDataAccount() {
    console.log(
      `Name: ${this.name} - Document: ${this.document} - Email: ${this.email} - Password: ${this.password}`
    );
  }
}
