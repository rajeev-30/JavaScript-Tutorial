    for(let i = 0; i <5; i++) {
        console.log(i);
    }

    let i=0;
    while(i < 5) {
        console.log(i);
        i++;

    }

    i=0;
    do{
        console.log(i);
        i++;
    }while(i < 5);


    let obj = {
        name: 'John',
        age: 32,
        city: 'New York',
    };
    
    // For in loop
    for (const key in obj) {
        const element = obj[key];
        console.log(key,"- ", element);
    }

    // For of loop
    const arr = [1,2,3,4,5];
    for (const i of arr) {
        console.log(i);
    }

    // For each looop
    arr.forEach(element => {
        console.log(element);
    });
