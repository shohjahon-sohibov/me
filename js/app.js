// ========= Loading ============== 

let byline = document.getElementById('byline'); 
let bylineText = byline.innerHTML;                    // Get the content of the H2
let bylineArr = bylineText.split('');                 // Split content into array
byline.innerHTML = '';                            // Empty current content


let span;         // Create variables to create elements
let letter;

  for(let i = 0; i < bylineArr.length; i++){                  // Loop for every letter
    span = document.createElement("span");          // Create a <span> element
    letter = document.createTextNode(bylineArr[i]); // Create the letter
    if(bylineArr[i] == ' ') {                       // If the letter is a space...
      byline.appendChild(letter);         // ...Add the space without a span
    } else {
      span.appendChild(letter);           // Add the letter to the span
        byline.appendChild(span);           // Add the span to the h2
    }
  }

  setTimeout(function() {
    let loadingContainer = document.getElementById("loading_container");
    loadingContainer.classList.add("remove_loading");
  }, 10000)
  


  
  setTimeout(function() {
    let byline = document.getElementById('content_home'); 
    byline.classList.add("unhidden_home_animation");
  }, 10050)
  