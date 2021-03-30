export const getHelloWorldStr = () => "Hello world!"

if (!module.parent){
    console.log(getHelloWorldStr());
}
