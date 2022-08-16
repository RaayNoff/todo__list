export interface IColor {
  readonly value: string;
  readonly color: string;
  readonly label: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

export class Colors {
  static pallete: IColor[] = [
    { value: "purple", label: "Фиолетовый", color: "#553fdb" },
    { value: "peach", label: "Персиковый", color: "#ef6e58" },
    { value: "yellow", label: "Желтый", color: "#fac344" },
    { value: "lightgreen", label: "Салатовый", color: "#8ddb3f" },
    { value: "blue", label: "Голубой", color: "#58d4ef" },
  ];
}
