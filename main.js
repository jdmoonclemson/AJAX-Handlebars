var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
ourRequest.onload = function () {
    var ourData = JSON.parse(ourRequest.responseText); // Parse JSON

    // Select the Handlebars template
    var templateSource = document.getElementById("data-template").innerHTML;
    var template = Handlebars.compile(templateSource); // Compile the template

    // Generate HTML and inject it into the page
    var generatedHtml = template({ items: ourData });
    document.getElementById("data-container").innerHTML = generatedHtml;
};
ourRequest.send();
