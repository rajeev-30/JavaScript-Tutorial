const repetedFunction = () => {
    console.log('Delayed function executed');
}

//this will be callled after every 2 seconds
const intervalId = setInterval = setInterval(repetedFunction,2000);

//this will stop the function after 5000ms(5 seconds)
setTimeout(() => {
    clearInterval(intervalId);
    console.log('Interval stop');
}, 5000);



