import queryString from 'query-string';

export default (parsed) => {
  const { origin, pathname, hash } = global.location;
  const stringified = queryString.stringify(parsed);
  const search = stringified ? `?${stringified}` : '';
  global.history.replaceState({}, '', `${origin}${pathname}${search}${hash}`);
};
