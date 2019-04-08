module.exports = {
  succeed,
  fail,
  repair,
  get
};
function succeed(item) {
  // enhancement++ ✓
  // enhancement = 20, do nothing  ✓
  // durability not changed  ✓
  return item.enhancement.enhancement < 20
    ? { ...item, enhancement: item.enhancement + 1 }
    : item;
  return { ...item };
}

function fail(item) {
  // enhancement < 15, -5 durability ✓
  // enhancement >= 15, -10 durability ✓
  // enhancement > 16, enhancement -1 ✓
  const { enhancement } = item;

  if (enhancement < 15) {
    return { ...item, durability: item.durability - 5 };
  } else if (enhancement === 15) {
    return { ...item, durability: item.durability - 10 };
  } else {
    return {
      ...item,
      durability: item.durability - 10,
      enhacement: enhancement - 1
    };
  }
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
