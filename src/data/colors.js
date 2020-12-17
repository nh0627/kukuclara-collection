const colors = ["yellow", "olive", "teal", "blue", "purple", "orange", "green", "grey", "black", "red"];

const getColors = (i) => colors[i%10];

export default getColors;