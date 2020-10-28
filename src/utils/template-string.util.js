export const toOneLineString = (templateStr) =>
  templateStr
    .replace(/^\s+|\s+$/gm, '')
    .split('\n')
    .join('');
