import mod, { getHelloWorldStr } from "src/index";

test("Test Hello world.", () => {
    expect(mod.__get__("HELLO_WORLD_STR")).toBe("Hello world!")
    expect(getHelloWorldStr()).toBe("Hello world!")
})
