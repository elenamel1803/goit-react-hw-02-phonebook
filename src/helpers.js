export const formatName = name => {
  const words = name.split(' ');
  const formattedWords = words.map(
    word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );
  return formattedWords.join(' ');
};

export const formatNumber = number => {
  return number.replace(/(\d{3})(\d{2})(\d{2})/, '$1-$2-$3');
};
