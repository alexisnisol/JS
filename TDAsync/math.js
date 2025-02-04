function mathRandom() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        let result = Math.random();
        if (result > 0.5) {
            resolve(result);
        } else {
            reject("Aléatoire nul");
        }
        }, 1000);
    });
}

for (let i = 0; i < 10; i++) {
    mathRandom()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
}