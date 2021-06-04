
(() => {
    console.log('test')
})()

setTimeout(() => {
    console.log('test2')
}, 1000)

setTimeout(() => console.log('test3'), 1000)