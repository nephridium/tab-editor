/*eslint-disable no-console */
export function importMusic(fileContent) {
  const data = JSON.parse(fileContent);
  console.log(data);
  const stats = {
    tracks: data.length
  };
  console.log('File loaded: ', JSON.stringify(stats));
  return data;
}
