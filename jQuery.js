
var setCat = document.querySelector('#cat-img');


$('#get-cat-btn').click(()=>{

$.getJSON('http://aws.random.cat/meow')

.done((data)=>{
//  setCat.src = data.file;
$('#cat-img').attr('src',data.file )
 console.log(data);
}).fail((data)=>{

  console.log('failed to render images');
})



})




// $('#btn').click(function(){
  
//     $.ajax({
//         method: 'GET',
//         url: '//',
//         dataType: 'json'
//        })
//        .done(()=>{

//         })
//         .fail(()=>{

//         })


// })

// $("#getBtn").click(function(){
//     $.get('https://api.github.com/users/colt')
//     .done(function(data){
//       console.log(data);
//     })
//     .fail(function(){
//       console.log("ERROR!");
//     })
//   });
  
//   $("#postBtn").click(function(){
//    var data = {name: "Charlie", city: "Florence"};
//    $.post("www.catsarecoolandsoaredogs.com", data)
//     .done(function(data){
//      console.log("HI!");
//    })
//     .fail(function(){
//      console.log("ERROR!");
//    })
//   });
  
//   $("#getJSONBtn").click(function(){
//     $.getJSON("https://api.github.com/users/colt")
//     .done(function(data){
//       console.log(data);
//     })
//     .fail(function(){
//       console.log("PROBLEM!");
//     })
//   });
  



