const items = [
    {id:1,name:'kassim'},
    {id:2,name:'jamac'}
]
exports.handler = async function(event,context){
    return {
        statusCode:200,
        body:JSON.stringify(items)
    }
}