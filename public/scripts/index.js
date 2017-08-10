const randomInRange = (min, max) =>
  Math.floor(Math.random() * max) + min

const setMessage = (title, heading, subheading) => {
  $('title').text(title)
  $('h1').text(heading)
  $('p').text(subheading)
}

// Wait for the document to load
$(document).ready(() => {
  const path = window.location.pathname.split('/')
  // If there's a path
  if (path[1]) {
    // Ask for the data at /redirects/$id
    firebase.database().ref('redirects/' + path[1]).once('value')
      .then(snapshot => {
        // Get the Javascript value from the snapshot
        const urls = snapshot.val()
        // If we didn't get an array from the database
        if (!(urls instanceof Array)) {
          return setMessage('Random URL', 'Random URL', `ID "${path[1]}" not found`)
        }
        // Choose a random number
        const randomInt = randomInRange(0, urls.length - 1)
        // Pick the choosen URL
        const url = urls[randomInt]
        // Preform the redirect
        window.location.href = url
      })
  } else {
    setMessage('Random URL', 'Random URL', "Can't redirect, no ID given")
  }
})
