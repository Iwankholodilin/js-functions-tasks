// BEGIN
export default (...data) => {
    let res = [];
    if (data.length === 0) {
        return res;
    }
    for (let [year, month, day] of data) {
        res.push(new Date(year, month, day).toDateString());
    }
    return res;
}
// END