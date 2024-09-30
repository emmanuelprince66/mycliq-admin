const modDate = (value) => {
  const date = new Date(value);

  const options = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  // Format the date part
  const formattedDate = date.toLocaleDateString("en-GB", options).split(",")[0]; // Get only the date part

  // Format the time part
  const formattedTime = date
    .toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    })
    .toLowerCase();

  return `${formattedDate.replace(/\//g, "-")} at ${formattedTime}`;
};

export default modDate;
