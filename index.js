const h1 = document.querySelector('h1')

const fpPromise = import('https://openfpcdn.io/fingerprintjs/v4')
  .then(FingerprintJS => FingerprintJS.load())

// Get the visitor identifier when you need it.
fpPromise
  .then(fp => fp.get())
  .then(result => {
    // This is the visitor identifier:
    const uuid = result.visitorId
    h1.innerText = uuid.toString()

    fetch('./valid-uuid.json')
    .then((res) => res.json())
    .then((data = {}) => {
        console.log(data)
        if (data.includes(uuid)){
            alert('valid')
            window.location.href = "/main.html"
        } else{
            alert('not valid')
        }
    })

  })
  .catch(error => console.error(error))
