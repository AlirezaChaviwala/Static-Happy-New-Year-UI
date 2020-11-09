let div = document.createElement('div');
document.body.append(div);
let h1 = document.createElement('h1');
div.append(h1);


setTimeout(() => {
    div.style.backgroundColor = 'red';
    h1.innerText = '10..'
    setTimeout(() => {
        div.style.backgroundColor = 'green';
        h1.innerText = '9..'
        setTimeout(() => {
            div.style.backgroundColor = 'purple';
            h1.innerText = '8..'
            setTimeout(() => {
                div.style.backgroundColor = 'crimson';
                h1.innerText = '7..'
                setTimeout(() => {
                    div.style.backgroundColor = 'turquoise';
                    h1.innerText = '6..'
                    setTimeout(() => {
                        div.style.backgroundColor = 'blue';
                        h1.innerText = '5..'
                        setTimeout(() => {
                            div.style.backgroundColor = 'violet';
                            h1.innerText = '4..'
                            setTimeout(() => {
                                div.style.backgroundColor = 'darkorchid';
                                h1.innerText = '3..'
                                setTimeout(() => {
                                    div.style.backgroundColor = 'lightpink';
                                    h1.innerText = '2..'
                                    setTimeout(() => {
                                        div.style.backgroundColor = 'firebirck';
                                        h1.innerText = '1..'
                                        setTimeout(() => {
                                            div.style.backgroundColor = 'deepskyblue';
                                            h1.innerText = 'HAPPY INDEPENDENCE DAY!'
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);