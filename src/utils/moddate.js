const modDate = (value) => {
  const date = new Date(value);
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();
  const hrs = date.getHours();
  const mins = date.getMinutes();
  const period = hrs >= 12 ? "pm" : "am";
  const formattedHours = hrs % 12 || 12;

  return `${day} - ${month} - ${year} at ${formattedHours}:${mins} ${period}`;
};

export default modDate;
