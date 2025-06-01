export const formatedDate = (created: Date) => {
  const data = created.toLocaleString().split("T");
  return data[0];
};