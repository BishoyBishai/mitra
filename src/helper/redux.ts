export const getReduxAction = (type, payload = null) => {
  return {
    type,
    payload,
  };
};
