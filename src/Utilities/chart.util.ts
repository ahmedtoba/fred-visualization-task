export class ChartUtil {
  static getAxisRange = (
    min?: number,
    max?: number,
    margin: number = 0.05
  ) => ({
    min:
      !min && min !== 0
        ? (value: { min: number; max: number }) =>
            Math.floor(value.min * (1 - margin) * Math.pow(10, 2)) /
            Math.pow(10, 2)
        : min,
    max:
      !max && max !== 0
        ? (value: { min: number; max: number }) =>
            Math.ceil(value.max * (1 + margin) * Math.pow(10, 2)) /
            Math.pow(10, 2)
        : max,
  });
}
