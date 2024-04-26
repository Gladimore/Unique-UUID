/*
UUID only works if the user is on a specific browser, 
say for example, the user switches web browsers, the uuid will be different
*/

function getUUID(){
    let uuid

    try{
        uuid = new DeviceUUID().get();
    } catch(err){}

    return uuid
}

const uuid = getUUID()
console.log(uuid)

fetch('./valid-uuid.json')
.then((res) => res.json())
.then((data = {}) => {
    console.log(data)
    if (data.includes(uuid)){
        alert('valid')
    } else{
        alert('not valid')
    }
})
