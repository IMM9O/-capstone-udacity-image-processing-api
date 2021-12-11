export const convertedImageName = (
  name: string,
  width: number,
  height: number,
  format: string,
): string => {
  return `${name}-w${width}-h${height}.${format}`;
};
