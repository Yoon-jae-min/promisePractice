const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const text = prompt("'hello'를 입력해줘! 그러면 선물을 줄게!");

        if(text === 'hello'){
            resolve('💻');
        }
        else{
            reject('error message!');
        }
    }, 2000);
});


myPromise
    .then((result) => {
        console.log(`result = ${result}`);
    })
    .catch((error) => {
        console.log(`error = ${error}`);
    })
    .finally(() => {
        console.log('finally ~');
    });