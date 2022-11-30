
// MIT License
function renderLicenseBadge(mitLicense) {
  [![apacheLicense]('https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0')]
}

// GPLv2 License
function renderLicenseLink(gplv2License) {
  [![gplv2License]('https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html')]
}

// Apache License
function renderLicenseBadge(apacheLicense) {
  [![apacheLicense]('https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0')]
}

// GPLv3 License
function renderLicenseSection(gplv3license) {
  [![gplv3license]('https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0')]
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}`;
}

module.exports = generateMarkdown;