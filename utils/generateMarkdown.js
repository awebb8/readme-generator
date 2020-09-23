// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.description}
  Mary had a little lamb.
`;
}

module.exports = {
  generateMarkdown: generateMarkdown
} 
