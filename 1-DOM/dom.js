function manipulateDom() {
    const elem = document.querySelectorAll('.quote');
    elem.forEach( item => {
        item.style.fontStyle = 'italic';
        item.style.borderColor = 'blue';
        item.style.background = 'lightblue';
    }
    ) 
    console.log(elem)
};

export { manipulateDom };