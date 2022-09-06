const r = require.context("./4x3", false, /\.(png|jpe?g|svg)$/);

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
const images = importAll(
  require.context("./4x3/", false, /\.(png|jpe?g|svg)$/)
);

export default images;
