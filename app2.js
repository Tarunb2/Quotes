let url = "https://api.quotable.io/random";
let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", async() =>{
    let Quote = await getQuote();
    console.log(Quote);
    let p = document.querySelector("blockquote");
    p.innerText = Quote;
    let Author = await getAuthor();
    let author = document.querySelector("#author");
    author.innerText = Author;
});

async function getQuote(){
    try{
        let res = await axios.get(url);
        return res.data.content;
    }
    catch(e){
        console.log("error -", e);
        return "No Quote found";
    }
}
async function getAuthor(){
       try{
        let res = await axios.get(url);
        return res.data.author;
       }
       catch(e){
        console.log("error-", e);
        return "No Author";
       }
}