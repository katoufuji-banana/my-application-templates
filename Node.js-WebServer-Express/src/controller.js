const genHelloWorldText = () => 'Hello Get controller world!'

export const helloWorld = (req, res) => { res.send(genHelloWorldText()); }

export const echo = (req, res) => { res.send(req.body); }