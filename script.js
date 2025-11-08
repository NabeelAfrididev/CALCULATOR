let buttons = document.querySelectorAll("button");
let place_holder = document.querySelector(".place-holder");
let expression = "";
let result;

buttons.forEach((btn) => {
    btn.addEventListener("click", (info_click) => {
        let btn_text = info_click.target.innerHTML;  // text of click button
        if (btn_text === "C") {
            expression = "";
            place_holder.value = "";
        }
        else if (btn_text === "=") {
            try {
                let safe_exp = expression.replace(/x/g, "*").replace(/÷/g, "/");

                result = eval(safe_exp);
                place_holder.value = result;
                expression = result.toString();
            }
            catch {
                expression = "";
                place_holder.value = "Error";
            }
        }
        else {
            expression += btn_text;
            place_holder.value = expression;
        }
    })
})