const githubUrl = 'https://raw.githubusercontent.com/peepoostpin/updater/main/time.txt';
const timestampText = 'Last updated on: ';

fetch(githubUrl)
  .then(response => response.text())
  .then(text => {
    const timestampString = text.match(new RegExp(`${timestampText}\\d{2} \\w{3} \\d{4}`, 'i'))[0];
    const timestamp = new Date(timestampString).getTime();

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
