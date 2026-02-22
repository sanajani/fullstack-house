export const formatDate = (isoDate) => {
  const date = new Date(isoDate);
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
};
