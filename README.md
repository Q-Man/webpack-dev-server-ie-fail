# webpack-dev-server-ie-fail
This repository demonstrates this bug in webpack-dev-server 3.1.1:

Installation:

1. npm install
2. npm start
3. run http://localhost:3000 in IE 11

Expected behaviour: "Hello world!" displaying in IE 11

Seen behaviour: Console-Error: SCRIPT438: Object doesn't support property or method "includes"
