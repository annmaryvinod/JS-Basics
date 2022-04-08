const title = "Jumbo";

const author = 'Mario';

const likes = 30;

// Concatenation using template strings :



let result = `The blog called ${title} by ${author} has ${likes} likes!`;


console.log(result);



// creating html templates 


let html = 
`
<h2> ${title}</h2>
<p> ${author}</p>
<span> This blog has ${likes} likes.</span>
`;


document.write(html);