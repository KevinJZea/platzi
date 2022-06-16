class PayPal extends Payment {
  constructor(id, referencia, sucursal) {
    super(id);
    this.referencia = referencia;
    this.sucursal = sucursal;
  }
}
