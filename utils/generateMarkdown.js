// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ![${data.license} License Badge](https://img.shields.io/badge/license-${data.license}-green)

  ## The Repository
  Link to repository: https://github.com/${data.username}/${data.title}
  Link to deployed site: https://${data.username}.github.io/${data.title}/

  ## About
  ${data.description}

  ![Project Image](<Insert relative path to image of your project>)

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#License)
  * [Tests](#Tests)
  * [Questions](#Questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This project is licensed under the terms of the ${data.license} License.

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  Please direct all questions to ${data.email}
  You may view and follow my GitHub profile by clicking the following link: https://github.com/${data.username}
`;
}

module.exports = {
  generateMarkdown: generateMarkdown
} 
