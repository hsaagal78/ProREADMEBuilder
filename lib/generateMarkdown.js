// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license.toLowerCase() !== 'none') {
    const encodedLicense = encodeURIComponent(license); 
    return `![GitHub license](https://img.shields.io/badge/license-${encodedLicense}-blue.svg)`;
  }
  return '';
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { //function generates a license link for the table of contents section in the README. If a license is selected (other than "None"), it returns
  if (license.toLowerCase() !== 'none') {  // // a Markdown link to the license section of the README. Otherwise, it returns an empty string.
    return `\n* [License]\n`;
  }
  return ' ';
}


function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
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
- [Screenshots](#screenshots)
- [Tests](#tests)  
- [Contact](#contact)

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.credits}

## License

${licenseBadge}

${licenseLink}

## Github Link

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

module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  generateMarkdown,
};
