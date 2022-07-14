// Returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case "MIT":
      return `\n\n[License badge](https://img.shields.io/badge/license-MIT-blue.svg)`;
      break;
    case "APACHE 2.0":
      return `\n\n[License badge](https://img.shields.io/badge/license-APACHE2-blue.svg)`;
      break;
    case "GPL 3.0":
      return `\n\n[License badge](https://img.shields.io/badge/license-GPL3-blue.svg)`;
      break;
    case "BSD 3":
      return `\n\n[License badge](https://img.shields.io/badge/license-BSD3-blue.svg)`;
      break;
    case "None":
    return ""
  };
}

// Returns the license link
// If there is no license, returns an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `\n* [License](#license)`
  } else {
    return ""
  }
}

// Returns the license section of README
// If there is no license, returns an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `\n\n## License

This project is licensed under the ${license} license.`
  } else {
    return ""
  }
}

// Generate markdown for README
function generateMarkdown(data) {  
  return `# ${data.title} ${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage) ${renderLicenseLink(data.license)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage} ${renderLicenseSection(data.license)}

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