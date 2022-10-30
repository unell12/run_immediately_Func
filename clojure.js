(
    function outer(){
        const a = 'a'
        console.log(`${a} in inner`)
        return function inner(){
            console.log(`${a} in inner`)
        }
    }
)()