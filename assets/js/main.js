document.addEventListener('DOMContentLoaded', () => {
  fetch('ctrl/info.json')
    .then(response => response.json())
    .then(data => {
      // Update the document title
      document.title = data.appName;

      // Update the content of the element with the class 'appname'
      const appName = document.querySelectorAll('.appname');
      appName.forEach((userItem) => {
        userItem.textContent = data.appName;
      });
      
    })
    .catch(error => console.error('Error fetching the title:', error));



});
