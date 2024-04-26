/*
UUID only works if the user is on a specific browser, 
say for example, the user switches web browsers, the uuid will be different
*/

const h1 = document.querySelector('h1')

function getUUID(){
    try{
        return new DeviceUUID().get();
    } catch(err){}
}

const uuid = getUUID()
h1.innerText = uuid.toString()

fetch('./valid-uuid.json')
.then((res) => res.json())
.then((data = {}) => {
    console.log(data)
    if (data.includes(uuid)){
        window.location.href = "/main.html"
    } else{
        alert('not valid')
    }
})
