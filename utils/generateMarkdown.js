// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";

  if(license != "none") {
    badge = "![License Badge](https://shields.io/badge/license-" + license + "-green)"
  }

  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenselink;

  switch(license) {
    default:
      licenselink = '';
    case 'Apache':
      licenselink = 'https://www.apache.org/licenses/LICENSE-2.0.html'
    case 'Academic':
      licenselink = ''
    case 'GNU':
      licenselink = ''
    case 'ISC':
      licenselink = ''
    case 'MIT':
      licenselink = ''
    case 'Mozilla':
      licenselink = ''
    case 'Open':
      licenselink = ''    
  }
  return licenselink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = '';

  if (license != 'none') {
    licenseSection += '## License'
    licenseSection += 'Visit ' + renderLicenseLink(license) + " to get details.";
  }

  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const section = ['Description', 'Installation', 'Usage', 'Contributions', 'License', 'Tests', 'Github', 'Email'];

  let markdown = '#' + data.title + '#' + "\n";

  markdown += "## Table of Contents\n";
  for (let i = 0; i < section.length; i++) {
    if (! (section[i] === 'License' && data.license === 'none')) {
      markdown += i + 1 + '. [' + section[i] + '](#' + section[i][0].toLowerCase() + section[i].substring(1) + ')\n';

    }
  } 
  markdown += '\n';

  markdown += '##' + section[0] + '\n';
  markdown += data.description + '\n';

  markdown += '##' + section[1] + '\n';
  markdown += data.installation + '\n';

  markdown += '##' + section[2] + '\n';
  markdown += data.usage;

  markdown += '##' + section[3] + '\n';
  markdown += data.contributions + '\n';

  markdown += '##' + section[4] + '\n';
  markdown += data.license + '\n';

  markdown += '##' + section[5] + '\n';
  markdown += data.test + '\n';

  markdown += '##' + section[6] + '\n';
  markdown += data.github + '\n';

  markdown += '##' + section[7] + '\n';
  markdown += data.email + '\n';

  return markdown;



  //return `# ${data.title}



}

module.exports = generateMarkdown