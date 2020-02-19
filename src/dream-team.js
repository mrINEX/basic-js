module.exports = function createDreamTeam(members) {
  try {
    let arr = [];
    for(let i = 0; i < members.length; i += 1) {
      if(typeof members[i] === 'string') {
        let tr = members[i].trim().toUpperCase();
        arr.push(tr[0]);
      }
    }
    return arr.sort().join('');
  } catch(e) {
    return false;
  }
  // throw 'Not implemented';
  // remove line with error and write your code here
};