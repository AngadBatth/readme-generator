function createBadge(license) {

  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)";
  }
  if (license === "Apache 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
  if (license === "GNU GPL v3") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  }
}

const generateReadME = ({
  github,
  email,
  title,
  desc,
  install,
  usage,
  contrib,
  test,
  license,
}) => 
{

return 

`# ${title}

${createBadge(license)} 

## Description
${desc}

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Contributions](#contributions)
4. [Tests](#tests)
5. [Questions](#questions)
6. [License](#license)

## Installation
${install}

## Usage
${usage}

## Contributions
${contrib}

## Tests
${test}

## Questions
If you have any questions about this project, please reach me at ${email}.
GitHub Profile:  https://github.com/${github}

## License
This Project is licensed under ${license}`;
};

module.exports = generateReadME;