export const helloWorld = (req, res) => { res.send('Hello Get controller world!'); }

export const echo = (req, res) => { res.send(req.body); }