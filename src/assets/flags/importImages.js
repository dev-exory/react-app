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

// {
//   "name": "Canada",
//   "dial_code": "+1",
//   "code": "CA",
//   "flag_1x1": "flags/1x1/ca.svg",
//   "flag_4x3": "flags/4x3/ca.svg"
// },
