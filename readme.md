# Tramodana

Trace Modeling & Analysis (frontend)

## Requirements

- NodeJS v10.1.0
- Npm v5.6.0

## Instructions

1. clone the repository: `git clone https://github.com/clemarescx/tramodana-frontend.git`
2. `cd tramodana-frontend`
3. run `npm install`
4. run `npm start`
5. In your browser, open url [localhost:8080](http://localhost:8080)
6. Click _Start_ and open one of the _*.bpmn_ files in the _resources_ folder

## Known bugs

- the BPMN files don't load properly on the first attempt - they are only loaded in state, and need the file loader to be triggered again to display the _previously selected_ file.
