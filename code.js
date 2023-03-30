const githubUrl = 'https://raw.githubusercontent.com/peepoostpin/updater/main/time.txt';

fetch(githubUrl)
  .then(response => response.text())
  .then(timestampString => {
    const timestamp = parseInt(timestampString);

    const currentTimestamp = Date.now();

    if (currentTimestamp > timestamp) {
      console.log("Warning: This code may be outdated. Please check for updates.");
    } else {
      console.log("This code is up to date.");
    }
  })
  .catch(error => {
    console.log(error);
  });
