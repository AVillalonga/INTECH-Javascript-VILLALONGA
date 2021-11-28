function diff(source, propertyNames) {
  return Object.keys(source).reduce((accumulator, key) => {
      for(const deletedKey of Object.keys(propertyNames)) {
          if (key !== deletedKey) {
              accumulator[key] = source[key];
          }   
      }
      return accumulator;
  }, {});
}

const rgbaMock = { r: 0, g: 0, b: 0, a: 0 };
const properties = { a: null };
const rgb = diff(rgbaMock, properties);
console.log(ob);
