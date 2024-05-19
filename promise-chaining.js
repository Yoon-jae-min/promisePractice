fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        return data.filter(obj => obj.id > 3);
    })
    .then((result) => {
        console.log('resule: ', result);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log('### finally ###');
    });