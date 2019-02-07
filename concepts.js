/*
 * Write a loop that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * Note: you may not use the built-in Array join function.
 */

var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];

var concepts = joinList(conceptList);

function joinList(conceptList) {

var concepts = '';

  var comma = ', ';

   for (var i = 0; i < conceptList.length; i++) {

    concepts += conceptList[i];

    if (i !== conceptList.length -1) {
      concepts += comma;
    }
  }
 return concepts;
}

console.log("Today I learned about " + concepts + ".");
//console.log("Today I learned about " + concepts + ".");

