// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorModal = document.querySelector('.error-modal');
const emptyHeart = document.querySelector('.empty-heart');
const fullHeart = document.querySelector('.full-heart');

emptyHeart.addEventListener('click', () => {
  mimicServerCall()
    .then(() => {
      // Handle success response from the server
      emptyHeart.classList.add('hidden');
      fullHeart.classList.remove('hidden');
      fullHeart.classList.add('activated-heart');
    })
    .catch(() => {
      errorModal.classList.remove('hidden');
      // Display the server error message in the modal

      setTimeout(() => {
        errorModal.classList.add('hidden');
      }, 3000);
    });
});

fullHeart.addEventListener('click', () => {
  emptyHeart.classList.remove('hidden');
  fullHeart.classList.add('hidden');
  fullHeart.classList.remove('activated-heart');
});




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
