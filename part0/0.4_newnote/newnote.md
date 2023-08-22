

sequenceDiagram
    
    Browser->>+Server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    Server-->>-Browser: Response: HTML document
    
    Browser->>+Server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    Server-->>-Browser: Response: main.css
    
    Browser ->>+ Server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    Server -->>- Browser: Response: main.js
    
    Note right of Browser: The browser starts executing the JavaScript code that fetches the JSON from the server
    
    Browser ->>+ Server: GET:https://studies.cs.helsinki.fi/exampleapp/data.json
    Server-->>-Browser: Response: JSON
    
    Note right of Browser: The browser starts executing the JavaScript that renders the notes
    Note right of Browser: The browser listens SUBMIT event
    
    Browser ->>+ Server: POST: https://studies.cs.helsinki.fi/exampleapp/new_note
    Server -->>- Browser: reload page