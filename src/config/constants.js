export const COLOR = {
  themeColor: "#8ecae6",
};

export const RANDOM_COLOR = () => {
  const colors = [
    "red",
    "orange",
    "yellow",
    "olive",
    "green",
    "teal",
    "blue",
    "violet",
    "purple",
    "pink",
    "brown",
    "grey",
    "black",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};
