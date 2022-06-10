const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emo) => {
  try {
    // ambil data dari promise
    const theaterIXX = await promiseTheaterIXX();
    const theaterVGC = await promiseTheaterVGC();
    const allTheaters = [...theaterIXX, ...theaterVGC];
    // filter berdasarkan emo
    return allTheaters.filter((theater) => theater.hasil === emo).length;
  }
  catch (err) {
    console.log(err);
  };
};

module.exports = {
  promiseOutput,
};
