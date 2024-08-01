export const timestampFormatter = (timestamp: string) => {
  const options: any = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  const date = new Date(timestamp);
  return date.toLocaleDateString("en-US", options);
};
