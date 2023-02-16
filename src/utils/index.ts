const users = ["Ali", "Pooria", "Mehdi", "Paria", "Maryam", "Saba", "Soroosh"];

export const randomizedUsers = Array.from(
  { length: 1000 },
  () => users[Math.floor(Math.random() * users.length)]
);
