function mostFrequentDays(year) {
  let highest = 0;
  let results = [];
  let dayCount =
  {
    1: {
      count: 0,
      name: 'Monday'
    },
    2: {
      count: 0,
      name: 'Tuesday'
    },
    3: {
      count: 0,
      name: 'Wednesday'
    },
    4: {
      count: 0,
      name: 'Thursday'
    },
    5: {
      count: 0,
      name: 'Friday'
    },
    6: {
      count: 0,
      name: 'Saturday'
    },
    0: {
      count: 0,
      name: 'Sunday'
    },
  };

  for (let month = 1; month <= 12; month++) {
    let numOfDays = new Date(year, month, 0).getDate();

    for (let day = 1; day <= numOfDays; day++) {
      let date = new Date(year, month - 1, day);
      dayCount[date.getDay()].count = dayCount[date.getDay()].count + 1;
    }
  }

  for (let i = 0; i <= 6; i++) {
    if (dayCount[i].count > highest)
      highest = dayCount[i].count;
  }

  for (let i = 1; i <= 6; i++) {
    if (dayCount[i].count === highest)
      results.push(dayCount[i].name);
  }

  if (dayCount[0].count === highest)
    results.push(dayCount[0].name);

  return results;
}

console.log(mostFrequentDays(2000));