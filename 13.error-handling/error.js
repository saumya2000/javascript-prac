try{
    //code that may throw error
} catch(ex){
    //code to be executed if an error occurs
}finally{
    //code to be executed regardles of an error ocuurs or not
    //cleaning up code
    //close database connections
    //close network connections
}

//!it is mandatory to write catch or finally after try

try{
    var name1="name1"
    var name2="name2"
    var name3=name1+name2
} finally{

}


// try{
//     var output=getMessage('Hello','World')
// } catch(ex){
//     console.log(ex)
// } finally{
//     console.log("this will always execute")
// }

try{
    var output="Hello"
} catch(ex){
    console.log(ex)
} finally{
    console.log("this will always execute")
}


try{
    throw "Error occured"
} catch(ex){
    console.log(ex)
}

//throw with Error info
try{
    throw{
        number:101,
        message:'This id is duplictaed'
    }
}catch(ex){
    console.log(ex.number,ex.message)
}


try{
    throw new Error("there is an error")
} catch(e){
    console.error(e.name+": "+e.message)
    }
