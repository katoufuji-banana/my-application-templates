import { getHelloWorldStr } from "src/index";

test("Test Hello world.", () => {
    expect(getHelloWorldStr()).toBe("Hello world!")
})
