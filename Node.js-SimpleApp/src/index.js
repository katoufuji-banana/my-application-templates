const HELLO_WORLD_STR = "Hello world!"

export const getHelloWorldStr = () => HELLO_WORLD_STR

if (!module.main){
    console.log(getHelloWorldStr());
}
