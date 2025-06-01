export const formattedDate = (created: Date) => {
  const data = created.toLocaleString().split("T");
  return data[0];
};

export const delay = (time: number) => {
  return new Promise(resolve => setTimeout(resolve, time));
};