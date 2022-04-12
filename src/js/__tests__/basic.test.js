import Team from "../app";

const player_1 = {
  name: "1",
  health: "50",
  level: "5",
  attack: "80",
  defence: "90",
};

const player_2 = {
  name: "2",
  health: "40",
  level: "7",
  attack: "100",
  defence: "30",
};

const player_3 = {
  name: "3",
  health: "10",
  level: "2",
  attack: "50",
  defence: "40",
};

const newTeam = new Team();

test("show add player", () => {
  newTeam.add(player_1);
  const equal = [
    {
      name: "1",
      health: "50",
      level: "5",
      attack: "80",
      defence: "90",
    },
  ];
  expect(newTeam.toArray()).toEqual(equal);
});

test("show add double player", () => {
  expect(() => newTeam.add(player_1)).toThrow();
});

test("show add some players", () => {
  newTeam.addAll(player_1, player_2, player_3, player_2);
  const equal = [
    {
      name: "1",
      health: "50",
      level: "5",
      attack: "80",
      defence: "90",
    },
    {
      name: "2",
      health: "40",
      level: "7",
      attack: "100",
      defence: "30",
    },
    {
      name: "3",
      health: "10",
      level: "2",
      attack: "50",
      defence: "40",
    },
  ];
  expect(newTeam.toArray()).toEqual(equal);
});
