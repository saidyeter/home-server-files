// enter your username here. some apps require a username, like rabbitmq 
// you can search $USER_NAME in .env files to see where it is used 
const userName = 'syeter'

// enter your email here. some apps require an email, like pgadmin 
// you can search $USER_EMAIL in .env files to see where it is used 
const userEmail = 'saidyeter@pm.me'

const fs = require('fs');
const path = require('path');
const osLineSeparator = require('os').EOL;

function loopOverStackEnvFiles(callback) {
  const stacksDir = path.join(__dirname, 'stacks');
  fs.readdir(stacksDir, function (err, files) {
    if (err) {
      console.log('Error getting directory information: ' + err);
    } else {
      console.log(files);

      for (let i = 0; i < files.length; i++) {
        const parent = files[i];
        const filePath = path.join(stacksDir, parent, '.env');
        if (!fs.existsSync(filePath)) {
          console.log('File not found: ' + filePath);
          continue;
        }
        callback(parent, filePath);
      }
    }
  });
}

function updateEnvFile(parent, filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf8').split(osLineSeparator);
  for (let i = 0; i < fileContent.length; i++) {
    if (fileContent[i].includes('$DATA_DIR_FOR_APP')) {
      fileContent[i] = fileContent[i].replace('$DATA_DIR_FOR_APP', path.join(__dirname, 'stacks', parent, 'data'));
    } else if (fileContent[i].includes('$STACKS_ROOT_DIR')) {
      fileContent[i] = fileContent[i].replace('$STACKS_ROOT_DIR', path.join(__dirname, 'stacks'));
    } else if (fileContent[i].includes('$GENERATE_PASSWORD')) {
      const specialChars = '!@#$%&*()[]{}';
      const password = Math.random().toString(36).substring(2, 15) +
        specialChars.at(Math.floor(Math.random() * specialChars.length)) +
        Math.random().toString(36).substring(2, 15).toUpperCase();
      fileContent[i] = fileContent[i].replace('$GENERATE_PASSWORD', password);
    } else if (fileContent[i].includes('$USER_EMAIL')) {
      fileContent[i] = fileContent[i].replace('$USER_EMAIL', userEmail);
    } else if (fileContent[i].includes('$USER_NAME')) {
      fileContent[i] = fileContent[i].replace('$USER_NAME', userName);
    }
  }
  const newFileContent = fileContent.join(osLineSeparator);
  fs.writeFileSync(filePath, newFileContent, 'utf8')

  console.log(parent, 'is done')
  console.log('################################################################################');

}

loopOverStackEnvFiles(updateEnvFile)