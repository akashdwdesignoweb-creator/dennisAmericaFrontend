let loading = false;
let children = true;

if(loading && children) {
    console.log("1");
}
else if (!loading && children) {
    console.log("2");
}
else if (loading && !children) {
    console.log("3");
}
else {
    console.log("4");
}