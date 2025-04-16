// BEGIN
export default (users) => {
    const childrens = users.map(user => user.children);
    const res = childrens.flat();
    return res;
}
// END