// $('form').submit(function(event) {
//    event.preventDefault();
//    $('.mainArea').empty();
//    let search = $('#search').val().toLowerCase();
//    let searchUpper = search.charAt(0).toUpperCase() + search.slice(1);
//    let searchLower = search;
//    let promise = furniture.getFurniture();
//    promise.then(function(response) {
//      let data = JSON.parse(response);
//      for(let i = 0; i < data.body.data.length; i++) {
//        if(
//          data.body.data[i].name.includes(searchUpper) ||
//          data.body.data[i].name.includes(searchLower) ||
//          data.body.data[i].type.includes(searchUpper) ||
//          data.body.data[i].type.includes(searchLower) ||
//          data.body.data[i].description.includes(searchUpper) ||
//          data.body.data[i].description.includes(searchLower) ||
//          data.body.data[i].colors.includes(searchUpper) ||
//          data.body.data[i].colors.includes(searchLower)
//        ) {
//          $('.mainArea').append(`
//            <div class="grid-card">
//              <text>${data.body.data[i].name}</text>
//              <img src="${data.body.data[i].imageUrl}">
//              <text>Category: ${data.body.data[i].type}</text>
//              <text>Description: ${data.body.data[i].description}</text>
//              <text>Colors: ${data.body.data[i].colors.join(', ')}</text>
//              <div>
//                <text>$${data.body.data[i].cost}&nbsp</text>
//                <text>Stock: ${data.body.data[i].stock}</text>
//              </div>
//              <text>Delivery Available: ${data.body.data[i].deliverable}</text>
//            </div>
//            `)
//        }
//      }
//    });
//  });
