function loadScript(src) {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.src = src;

        if (src == './script2.js') {
            setTimeout(() => {
                document.head.append(script);
            }, 1000);
        } else {
            document.head.append(script);
        }
        script.onload = () => resolve("Fichier " + src + " bien chargé");
        script.onerror = () => reject(new Error(`Script load error for ${src}`));
    });
}

const promesse1 = loadScript("./script1.js").then((result) => {
    console.log(result);
});

const promesse2 = loadScript("./script2.js").then((result) => {
    console.log(result);
});

const promesse3 = loadScript("./script3.js").then((result) => {
    console.log(result);
});