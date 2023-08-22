
sequenceDiagram
    
    Browser->>+Server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    Server-->>-Browser: Response: HTML document
    
    Browser->>+Server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    Server-->>-Browser: Response: main.css
    
    Browser ->>+ Server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    Server -->>- Browser: Response: main.js
    
    Note right of Browser: The browser starts executing the JavaScript code that fetches the JSON from the server
    
    Browser ->>+ Server: GET:https://studies.cs.helsinki.fi/exampleapp/data.json
    Server-->>-Browser: Response: data.json
    
    Note right of Browser: The browser starts executing the JavaScript that renders the notes
    Note right of Browser: The browser listens SUBMIT event

    Browser ->>+ Server: POST: https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    Server -->>-Browser: Response 201: {message: "note created"}

    Note right of Browser: The browser strarts executing the Javascript code that checks the status and renders the note
