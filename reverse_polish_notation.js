var evalRPN = function(tokens) {
    let s = [];

    for(let i = 0; i < tokens.length; i++){
        if(tokens[i] != "+" && tokens[i] != "/" && tokens[i] != "-" && tokens[i] != "*"){
            s.push(parseInt(tokens[i]));
        }else{
            let x = s.pop();
            let y = s.pop();
            if(tokens[i] == "+"){
                s.push(x + y);
            }
            if(tokens[i] == "-"){
                s.push(y - x);
            }
            if(tokens[i] == "*"){
                s.push(x * y);
            }
            if(tokens[i] == "/"){
                s.push(parseInt(y / x));
            }
        }
    }

    return s[0];
};


console.log(evalRPN(["2","1","+","3","*"]));