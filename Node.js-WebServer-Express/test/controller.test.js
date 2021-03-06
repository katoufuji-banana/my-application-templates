import mod, { helloWorld, echo } from "src/controller";

test("Generate Hello world", () => {
    const genHelloWorldText = mod.__get__("genHelloWorldText")
    expect(genHelloWorldText()).toBe("Hello Get controller world!")
})

test("Return Hello world", () => {
    const req = {}
    const res = { send: jest.fn().mockReturnThis() }
    helloWorld(req, res)
    expect(res.send.mock.calls[0][0]).toBe("Hello Get controller world!")
})

test("Return same word", () => {
    const word = "Test echo server";
    const req = { body: word }
    const res = { send: jest.fn().mockReturnThis() }
    echo(req, res)
    expect(res.send.mock.calls[0][0]).toBe(word)
})