const e = require('express');
const c = require('cors');

let a = e();
a.use(e.json());
a.use(c());

const port= process.env.PORT || '8000';


a.get('/0708202191786', (req,res) => {
    res.sendFile(__dirname+'172613002_0pk3toseldstteglnlriyuql revised.pdf');
});

a.listen(port, () => {

});
