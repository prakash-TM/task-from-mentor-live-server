import getData from './trial1.js';

async() => {
    const data = await getData();
    console.log(data)
}