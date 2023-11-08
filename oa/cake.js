// largest slice so that every guest gets a piece
// if just one pizza, we'd do  radius / number of guests
// find the largest number that works, even if it requires that same size on another pie.
// you'd have to get the area of the pie

const getArea = (r) => {
  return Math.PI * r ** 2;
};

const getLargestArea = (areas, index, guestCount) => {
  if (area === 0) {
    return 0;
  }
};

const getLargestSlice = (radii, guestCount) => {
  const areas = radii.map((r) => getArea(r));

  getLargestArea(areas, areas.length - 1, guestCount);
};

console.log(getLargestSlice([1, 1, 1, 2, 2, 3], 6));
