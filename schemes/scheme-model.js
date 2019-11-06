const db = require("../data/dbConfig");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
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
    .select("s.scheme_name", "st.instructions", "st.step_number")
    .where({ "s.id": schemeId });
}
function add(schema) {
  return db("schemes")
    .insert(schema, "id")
    .then(([id]) => {
      return findById(id);
    });
}

function update(edit, id) {
  return db("schemes")
    .where("id", id)
    .update(edit)
    .then(changes => {
      return findById(id);
    });
}

function remove(id) {
  return db("schemes")
    .where("id", id)
    .del()
    .then(count => {
      return count;
    });
}
