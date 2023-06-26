// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license.replace(' ', '%20')}-blue.svg)`; //The badge is generated using the selected license, and it will be displayed as a blue badge on the GitHub repository.
  }
  return '';
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { //function generates a license link for the table of contents section in the README. If a license is selected (other than "None"), it returns
  if (license !== 'None') {  // // a Markdown link to the license section of the README. Otherwise, it returns an empty string.
    return `\n* [License](#license)\n`;
  }
  return '';
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {// If a license is selected (other than "None"), it returns a Markdown section with the license information. Otherwise, it returns an empty string.
  if (license !== 'None') {
    return `## License

This project is licensed under the ${license} license.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
//These lines of code call the helper functions to generate the license badge, license link, and license section based on the selected license.
// It also creates a GitHub link by combining the provided username and project title.
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);
  const githubLink = `https://github.com/${data.username}/${data.projectTitle}`;
  let markdown = '';

  markdown += `## ${data.projectTitle}

## Description

${data.description}

- Motivation: ${data.motivation}
- Problem Solved: ${data.problemSolved}
- What I Learned: ${data.learned}

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.credits}

## License

${licenseBadge}

${licenseSection}

${licenseLink}

${githubLink}

## Contact

For any inquiries, please contact me at ${data.email}.
`;

  if (data.screenshots) {
    const screenshotUrls = data.screenshots.split(',').map((screenshot) => screenshot.trim());
    markdown += `\n## Screenshots\n\n`;
    screenshotUrls.forEach((url) => {
      markdown += `![Screenshot](${url.replace(/\s/g, '%20')})\n`;
    });
  }

  return markdown;
}

module.exports = generateMarkdown;
