export const getReduxAction = (type, payload = null) => {
  return {
    type,
    payload,
  };
};

export const getPageParam = (props, key) => {
  return props.location && new URLSearchParams(props.location.search).get(key);
};
