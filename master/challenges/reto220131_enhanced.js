const humans = [
  { name: "Clara", timezone: "UTC-4:00" },
  { name: "Cami", timezone: "UTC-7:00" },
  { name: "Ximena", timezone: "UTC-5:00" },
  { name: "Melissa", timezone: "UTC+12:00" },
  { name: "Paola", timezone: "UTC+16:00" },
  { name: "Erika", timezone: "UTC-14:00" },
];

// localTime('Cami')
// 10:26pm // This will change depending on when you run the function

const localTime = (userName, usersData = [], hourFormat = 24) => {
  if (usersData.length === 0) return console.warn(`The users' data is empty.`);

  const timezone = usersData.find((user) => user.name === userName)?.timezone;
  if (!timezone) return console.warn(`${userName} was not found.`);

  const firstIndex = timezone.indexOf("C");
  const secondIndex = timezone.indexOf(":");
  const substring = timezone.substring(firstIndex + 1, secondIndex);

  const date = new Date();
  const utcHours = date.getUTCHours();
  let minutes = date.getMinutes();
  minutes = minutes.toString().length === 1 ? `0${minutes}` : `${minutes}`;

  let hours = parseInt(substring) + utcHours;
  hours = hours < 0 ? hours + 24 : hours;

  if (hourFormat === 12) {
    const pmValue = 12;
    const period = hours >= pmValue ? "p.m." : "a.m.";

    hours = hours === 0 ? pmValue : hours;
    hours = period === "p.m." ? hours - pmValue : hours;

    return `${hours}:${minutes} ${period}`;
  }

  hours = hours.toString().length === 1 ? `0${hours}` : `${hours}`;

  return `${hours}:${minutes}`;
};

console.log(new Date());
humans.forEach(({ name, timezone }) =>
  console.log(
    `${timezone}: ${localTime(name, humans)} / ${localTime(name, humans, 12)}`
  )
);
