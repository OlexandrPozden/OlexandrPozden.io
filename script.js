// script.js
const progressBar = document.getElementById('progress'); 
const body = document.body; // need to get full height of the page

// when user scroll update width of progress bar
document.addEventListener('scroll',(event)=>{
  // full height of the page
  let fullHeight = body.offsetHeight;
  // height of the visible part
  let visiblePart = window.innerHeight;
  // total height to pass
  let totalHeightToPass = fullHeight - visiblePart;
  // how many we passed
  let offsetFromTop = Math.abs(body.getBoundingClientRect().top); // we receive
  // negative value so we use Math.abs() to make it positive

  // what part of total height we have passed (in %)
  let percentage = Math.round(offsetFromTop/totalHeightToPass*100)
  // and change width of the pro bar
  progressBar.style.width = percentage+"%";
})
