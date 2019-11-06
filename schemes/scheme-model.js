const db = require("../data/dbConfig");

module.exports = {
  find,
  findById,
  findSteps,
  add
};

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes")
    .where({ id })
    .first();
}
function findSteps(schemeId) {
  return db("schemes as s")
    .join("steps as st", "st.step_number", "s.id")
    .select("s.scheme_name","st.instructions", "st.step_number")
    .where({ 's.id': schemeId });
}

