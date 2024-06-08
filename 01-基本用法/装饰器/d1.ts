// 方法装饰器

function simpleDecorator(
    value:any, 
    context:any
) {
    console.log(`hi, this is ${context.kind} ${context.name}`);
    console.log(`value is ${value}`);
    return value;
  }
  
  @simpleDecorator
  class MyClass {
    // class definition
  }