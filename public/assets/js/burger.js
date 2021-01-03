
// $(".create-form").on("submit", function(event) {
//     event.preventDefault();
// console.log("works");
//     var newBurger = {
//       burger_name: $("#ca").val().trim()
//     };

//     // Send the POST request.
//     $.ajax("/api/burgers", {
//       type: "POST",
//       data: newBurger
//     }).then(
//       function() {
//         console.log("Created new burger.");
//         // Reload the page to get the updated list
//         // location.reload();
//       }
//     );
//   });

document.getElementById("create-form").addEventListener("submit", function(event){
  event.preventDefault();
  var burgerName = document.getElementById("ca").value;
  fetch("/api/burgers", {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    // mode: 'cors', // no-cors, *cors, same-origin
    // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    // redirect: 'follow', // manual, *follow, error
    // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify({burger_name: burgerName}) // body data type must match "Content-Type" header
  }).then(function(){
    location.reload();
  })
  console.log(burgerName);
})

document.getElementById("eatButton").addEventListener("submit", function(event){
  event.preventDefault();
  fetch("/api/burgers/eat", {
    method: 'PUT', // *GET, POST, PUT, DELETE, etc.
    // mode: 'cors', // no-cors, *cors, same-origin
    // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    // redirect: 'follow', // manual, *follow, error
    // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify({devoured: 1}) // body data type must match "Content-Type" header
  }).then(function(){
    location.reload();
  })
  console.log(burgerName);
})