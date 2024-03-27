//your JS code here. If required.
document.getElementById('userForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const age = parseInt(document.getElementById('age').value);
  const name = document.getElementById('name').value;

  if (!age || !name) {
    alert('Please fill in both age and name fields.');
    return;
  }

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000); // Resolves after 4 seconds
  });

  promise.then((message) => {
    alert(message);
  }).catch((message) => {
    alert(message);
  });
});

