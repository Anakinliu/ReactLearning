// 如果你看到一个以上的箭头，这就是高阶函数

// const createScream = logger => message => {
//     logger(message.toUpperCase() + "!!!");
// };
const createScream = logger => {
    return message => {
        return logger(message.toUpperCase() + "!!!");
    }

}
let logger = createScream((txt) => {
    console.log(txt);
})
logger("一二三四")