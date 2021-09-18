var ca = [];
for (var i = 0; i < 4; i++) {
    ca.push(function () {
        console.log(i);
    })
}
ca.forEach(cb => cb());