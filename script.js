let btn = document.querySelector(".btn");

async function generateJokeRandom(){
   const url = await fetch("https://official-joke-api.appspot.com/random_joke");
   try {
    const result = await  url.json();
    jokes.innerHTML = "Fetching....."
    console.log(url);
    console.log(result); 
    console.log("Id:",result.id);
    console.log("Title:",result.punchline);
    console.log("Content:",result.setup);
    jokes.innerHTML = result.setup;
    

   } catch (error) {
    console.log(error);
   }   
}
function randomNumber(){
    let RandomNum = Math.floor(Math.random() * 10);
    console.log(RandomNum);
}


btn.addEventListener("click", generateJokeRandom)
btn.addEventListener("click", randomNumber)