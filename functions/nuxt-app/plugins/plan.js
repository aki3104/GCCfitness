export const createPlan = async(amount, name, productId, accoundId) => {
  const plan = await stripe.plans.create({
    amount: amount,
    interval: "month",
    product: productId,
    nickname: name,
    currency: "jpy",
  }, {
    stripe_account: accoundId
  });
  return plan;
};