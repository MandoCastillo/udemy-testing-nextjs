export const venueCapacity = 400;

// this will eventually use environment variables
export const getDbPath = (): string => {
  if (!process.env.DB_PATH) {
    throw new Error("mamaste");
  }

  return process.env.DB_PATH;
};
