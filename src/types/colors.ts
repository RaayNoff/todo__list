interface IPallete {
  value: string;
  label: string;
}

export class Colors {
  static pallete: IPallete[] = [
    { value: "553fdb", label: "Фиолетовый" },
    { value: "ef6e58", label: "Персиковый" },
    { value: "fac344", label: "Желтый" },
    { value: "8ddb3f", label: "Салатовый" },
    { value: "58d4ef", label: "Голубой" },
  ];
}
