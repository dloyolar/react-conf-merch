export const sumTotal = (payload) => {
  const reducer = (accumulator, current) => accumulator + current.price;
  return payload.reduce(reducer, 0);
};
