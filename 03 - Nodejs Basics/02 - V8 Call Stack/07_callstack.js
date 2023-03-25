const cee = () => {
    console.log('output is', 'cee');
}

const boo = () => {
    console.log('output is', 'boo');
    cee();
}

const foo = () => {
    console.log('output is', 'foo')
    boo();
}

////////////////

console.log('output is', 'running')
cee()
foo();