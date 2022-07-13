// Create a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (data.license === "None") {
    const renderedLicenseSection = "";
  } else {
    const renderedLicenseSection = `https://img.shields.io/badge/license-${data.license}-blue.svg`;
  };
}

// Generate markdown for README
function generateMarkdown(data) {
  renderLicenseLink(data);
  
  return `# ${data.title}

${renderedLicenseSection}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

## License

This project is licensed under the ${data.license} license.

## Contributing

${data.contributing}

## Tests

To run tests, run the following command:

\`\`\`
${data.tests}
\`\`\`

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.username}](https://github.com/${data.username}/).`;
}

module.exports = generateMarkdown;