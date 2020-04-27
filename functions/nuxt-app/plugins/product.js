export const createProduct = async (name, description, accountId) => {
  const product = await stripe.products.create({
    name: name,
    type: 'service',
    statement_descriptor: description
  }, {
    stripe_account: accountId
  });
  return product;
}