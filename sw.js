try{
self.addEventListener('fetch', event => {
  // if request comes from this origin, dont intercept it. if it goes to other origins, intercept it.
  url = window.location.href
  if (event.request.url.startsWith(url.split("/")[0])) {
    return;
  }
  console.log('Intercepting  request for:', event.request.url);

  event.respondWith(
    fetch("https://axiomhub.net/main.php?url=" + event.request.url)
      .then(function(response) {

        console.log("response", response);
        // return response;
        return response;
      })
  )
});
}
catch{

console.warn("Using alternative method...")
self.addEventListener('fetch', event => {
  // Get the origin of the service worker script
  const origin = self.origin;

  // Extract the origin from the request URL
  const requestOrigin = new URL(event.request.url).origin;

  // If request comes from this origin, don't intercept it.
  // If it goes to other origins, intercept it.
  if (requestOrigin === origin) {
    return;
  }

  console.log('Intercepting request for:', event.request.url);

  event.respondWith(
    fetch("https://axiomhub.net/main.php?url=" + event.request.url)
      .then(function(response) {
        console.log("response", response);
        return response;
      })
  )
});


}