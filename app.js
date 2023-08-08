const e = require('express');
const c = require('cors');

let a = express ();
a.use(express.json());
a.use(cors());

const port= process.env.PORT || '8000';


a.get('/0708202191786', (req,res) => {
    res.send('hello');
});

a.listen(port, () => {

});
