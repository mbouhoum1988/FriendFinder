const express = require('express');

let app = express();

const PORT = process.env.PORT || 8080;

app.use('/static', express.static('assets'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);


app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
})