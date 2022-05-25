const pi = 3.14;
const alanhesap = (r) => {
    const sonuc = pi*(r*r);
    console.log(`yarıçapı  ${r} olan dairenin alanı = ${sonuc}`);
}

const parametre = process.argv.slice(2)[0];

alanhesap(parametre);