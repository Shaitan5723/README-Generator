// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'MIT'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (license === 'Apache'){
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (license === 'GPL'){
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  } else if (license === 'BSD'){
    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  } else if (license === 'No License'){
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'MIT'){
    return '[License: MIT](https://opensource.org/licenses/MIT)'
  } else if (license === 'Apache'){
    return '[License: Apache 2.0](https://opensource.org/licenses/Apache-2.0)'
  } else if (license === 'GPL'){
    return '[License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)'
  } else if (license === 'BSD'){
    return '[License: BSD](https://opensource.org/licenses/BSD-3-Clause)'
  } else if (license === 'No License'){
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'MIT'){
    return 'This application is covered under the [MIT](https://opensource.org/licenses/MIT) license'
  } else if (license === 'Apache'){
    return 'This application is covered under the [Apache 2.0] (https://opensource.org/licenses/Apache-2.0) license'
  } else if (license === 'GPL'){
    return 'This application is covered under the [GPL](https://www.gnu.org/licenses/gpl-3.0) license'
  } else if (license === 'BSD'){
    return 'This application is covered under the [BSD](https://opensource.org/licenses/BSD-3-Clause) license'
  } else if (license === 'No License'){
    return 'This application is not covered under any license'
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
## Description
  ${data.description}
## Table of Contents
  [Description](#description)<br/>
  [Installation Instructions](#installation)<br/>
  [Usage Information](#usage)<br/>
  [License](#license)<br/>
  [Contribution Guidelines](#contributing)<br/>
  [Tests](#tests)<br/>
  [Questions](#questions)<br/>
## Installation
  ${data.installation}
## Usage
  ${data.usage}
## License
  ${renderLicenseSection(data.license)}
## Contributing
  ${data.contributing}
## Tests
  ${data.tests}
## Questions
  Feel free to check out my other projects at [GitHub - ${data.username}](https://github.com/${data.username}).<br/>
  For any additional questions, please feel free to reach out to me at <${data.email}>
`;
}

module.exports = generateMarkdown;
