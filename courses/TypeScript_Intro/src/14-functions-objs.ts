(() => {
  type Sizes = "S" | "M" | "L" | "XL";

  const login = (data: { email: string; password: string }) => {
    console.log(data.email, data.password);
  };

  login({ email: "e@email.com", password: "123" });

  const products: any[] = [];

  const addProduct = (data: {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  }) => {
    products.push(data);
  };

  addProduct({
    title: "Pro1",
    createdAt: new Date(),
    stock: 12,
  });
})();
