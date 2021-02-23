const ValidateFunction = (input) => {
    const result = input?.length;
    if (/^.*-s/i.test(input)) {
        return (result > 10 && result < 30);
    }
    return false;
};
console.log(ValidateFunction()); // false
console.log(ValidateFunction("d-s")); //false
console.log(ValidateFunction("al;dkfjaoiwevnwjadadfadsfasdfenv;dskvnaoiwev;lkdsfjaaoiwevewvn-s")); //false
console.log(ValidateFunction("kkkkkkkddkkkkkkkkkkkk-s")); //true
console.log(ValidateFunction("jsldi-s")); //false
console.log(ValidateFunction("aide")); //false
