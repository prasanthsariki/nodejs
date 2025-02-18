// // require("./module1")

// console.log("i am module1")

// function sample(){
//     console.log("i am sample function from module1")
// }


// function sample2(){
//     console.log("i am sample2")
// }
// module.exports={sample:sample(),sample2:sample2()};


function studentInfo(){
    console.log("hello students")
    return "hii"
}

var x="prasanth"

module.exports={fun1:studentInfo, x:x}