function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.lenght) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
}

module.exports = chunk;
