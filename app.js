const e = require('express');
const c = require('cors');

let a = e();
a.use(e.json());
a.use(c());

const port= process.env.PORT || '8000';


a.get('/0708202191786', (req,res) => {
    res.sendFile(__dirname+'/priyanshi report.pdf');
});

a.listen(port, () => {

});
