/*function suma (op1,op2)
{
    let resultado = op1 + op2;
    console.log( op1 + "+" + op2 + "=" + resultado);
}*/
function suma (op1,op2,op3)
{
    let resultado = op1 + op2 + op3;
    console.log( op1 + "+" + op2 + "+" + op3 +"=" + resultado);
}

function resta (op1,op2)
{
    let resultado = op1-op2;
    console.log( op1 + "-" + op2 + "=" + resultado);
}
function producto (op1,op2)
{
    let resultado = op1*op2;
    console.log( op1 +"*" + op2 + "=" + resultado);
}
function division (op1,op2)
{
    let resultado = op1/op2;
    console.log( op1 + "/" + op2 + "=" + resultado);
}

module.exports={suma,resta,producto,division}
