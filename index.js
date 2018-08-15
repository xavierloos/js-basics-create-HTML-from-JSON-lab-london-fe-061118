/*document.addEventListener("DOMContentloaded", (e) => {
  document.getElementById('Titanic').addEventListener("click", updateTitanic);
    function updateTitanic(){
      document.getElementById('title').innerHTML = movies["Titanic"]["title"];
      document.getElementById('director').innerHTML = movies["Titanic"]["director"];
      document.getElementById('genre').innerHTML = movies["Titanic"]["genre"];
      document.getElementById('filmRating').innerHTML = movies["Titanic"]["filmRating"];
      document.getElementById('description').innerHTML = movies["Titanic"]["description"];
      document.getElementById('audienceScore').innerHTML = movies["Titanic"]["audienceScore"];
       let i;
      for(i=0; i<movies["Titanic"]["cast"].length; i++){
        document.getElementById('cast').innerHTML += movies["Titanic"]["cast"][i]["actor"] + "<br>" + "-" + movies["Titanic"]["cast"][i]["role"]  + "<br>";
      }
      let x;
      for(x=0; x<movies["Titanic"]["reviews"].length; x++){
        document.getElementById('reviews').innerHTML += '"' + movies["Titanic"]["reviews"][x]["content"] + '"' + "<br>" + 
          "-" + movies["Titanic"]["reviews"][x]["username"]  + "<br>";
      }
    }
  document.getElementById('Terminator 2').addEventListener("click", updateTerminator);
    function updateTerminator(){
      document.getElementById('title').innerHTML = movies["Terminator 2"]["title"];
      document.getElementById('director').innerHTML = movies["Terminator 2"]["director"];
      document.getElementById('genre').innerHTML = movies["Terminator 2"]["genre"];
      document.getElementById('filmRating').innerHTML = movies["Terminator 2"]["filmRating"];
      document.getElementById('description').innerHTML = movies["Terminator 2"]["description"];
      document.getElementById('audienceScore').innerHTML = movies["Terminator 2"]["audienceScore"];
       let i;
      for(i=0; i<movies["Terminator 2"]["cast"].length; i++){
        document.getElementById('cast').innerHTML += movies["Terminator 2"]["cast"][i]["actor"] + "<br>" + "-" + movies["Terminator 2"]["cast"][i]["role"]  + "<br>";
      }
      let x;
      for(x=0; x<movies["Terminator 2"]["reviews"].length; x++){
        document.getElementById('reviews').innerHTML += '"' + movies["Terminator 2"]["reviews"][x]["content"] + '"' + "<br>" + 
          "-" + movies["Terminator 2"]["reviews"][x]["username"]  + "<br>";
      }
    } 
})
*/
document.addEventListener("DOMContentloaded", (e) => {
  // invoking a function here will make sure it happens on page load
  // your code here
const titanic = document.getElementById('Titanic')
console.log(titanic)
 
titanic.addEventListener("click", function(event) {
  console.log("I was clicked")
  document.getElementById("title").innerHTML= movies["Titanic"]["title"]
  document.getElementById("director").innerHTML=movies["Titanic"]["director"]
  document.getElementById("genre").innerHTML=movies["Titanic"]["genre"]
  document.getElementById("filmRating").innerHTML=movies["Titanic"]["filmRating"]
  document.getElementById("poster").src=movies["Titanic"]["poster"]
  document.getElementById("audienceScore").innerHTML=movies["Titanic"]["audienceScore"]
  document.getElementById("description").innerHTML=movies["Titanic"]["description"]
  
  let i;
  for (i = 0; i < movies.Titanic.cast.length; i++) { 
    document.getElementById("cast").innerHTML += movies.Titanic.cast[i].role + "<br>" + "as" + "<br>";
    document.getElementById("cast").innerHTML += movies.Titanic.cast[i].actor + "<br>";
}
 let r;
 for (r=0; r < movies.Titanic.reviews.length; r++) {
   document.getElementById("reviews").innerHTML += movies.Titanic.reviews[r].username + ":";
   document.getElementById("reviews").innerHTML += movies.Titanic.reviews[r].content +"<br>";
 }
  
})