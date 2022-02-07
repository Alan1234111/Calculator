class Calc {
  constructor() {
    let result = [];
    let types = [];
    let count = 0;
    let change = false;
    let themeNumber = 0;

    // THEME
    this.butonTheme = document.querySelector(".button");
    this.circle = document.querySelector(".circle");
    this.numbers = document.querySelector(".numbers");
    this.wall = document.querySelector(".wall");
    this.result = document.querySelector(".result");
    this.calc = document.querySelector(".calc");
    this.sectionTheme = document.querySelector(".theme");
    this.mode = document.querySelector(".mode");
    this.circle = document.querySelector(".circle");
    // calculation
    this.scrrenCalc = document.querySelector(".calculation");
    // buttons
    this.buttons = document.querySelectorAll(".numbers div");

    this.butonTheme.addEventListener("click", () => {
      if (themeNumber == 2) {
        themeNumber = 0;
      } else {
        themeNumber++;
      }
      if (themeNumber == 0) {
        this.circle.style.marginLeft = "5%";
        this.circle.style.backgroundColor = "var(--keyBgcRed)";
        document.body.style.backgroundColor = "var(--veryDarkBlueMain)";
        this.wall.style.backgroundColor = "var(--veryDarkBlueMain)";
        this.sectionTheme.style.backgroundColor = "var(--veryDarkBlueMain)";
        this.mode.style.backgroundColor = "var(--veryDarkBlueMain)";
        this.result.style.backgroundColor = " var(--veryDarkBlueScreenBgc)";
        this.butonTheme.style.backgroundColor = "var(--veryDarkBlueScreenBgc)";
        this.numbers.style.backgroundColor = "var(--veryDarkBlueScreenBgc)";
        this.calc.style.color = "var(--LightGrayisHorange)";

        this.buttons.forEach((button) => {
          const number = button.dataset.number;

          if (number == "del" || number == "reset") {
            button.style.backgroundColor = "var(--keyShadow)";
          } else if (number == "=") {
            button.style.backgroundColor = "var(--keyBgcRed)";
          } else {
            button.style.backgroundColor = "var(--LightGrayisHorange)";
            button.style.color = "var(--Verydarkgrayishblue)";
          }
        });
      } else if (themeNumber === 1) {
        this.circle.style.marginLeft = "35%";
        this.circle.style.backgroundColor = "var(--Orange)";
        document.body.style.backgroundColor = "var(--lightGrey)";
        this.wall.style.backgroundColor = "var(--lightGrey)";
        this.sectionTheme.style.backgroundColor = "var(--lightGrey)";
        this.mode.style.backgroundColor = "var(--lightGrey)";
        this.result.style.backgroundColor = "var(--Verylightgray)";
        this.butonTheme.style.backgroundColor = "var(--GrayishRed)";
        this.numbers.style.backgroundColor = "var(--GrayishRed)";

        this.calc.style.color = "var(--Verydarkgrayishyellow)";

        this.buttons.forEach((button) => {
          const number = button.dataset.number;

          if (number == "del" || number == "reset") {
            button.style.backgroundColor = "var(--Darkmoderatecyan)";
          } else if (number == "=") {
            button.style.backgroundColor = "var(--Orange)";
          } else {
            button.style.backgroundColor = "var(--Lightgrayishyellow)";
          }
        });
      } else if (themeNumber == 2) {
        this.circle.style.marginLeft = "68%";
        this.circle.style.backgroundColor = "var(--Purecyan)";
        document.body.style.backgroundColor = "var(--Verydarkviolet)";
        this.wall.style.backgroundColor = "var(--Verydarkviolet)";
        this.sectionTheme.style.backgroundColor = "var(--Verydarkviolet)";
        this.mode.style.backgroundColor = "var(--Verydarkviolet)";
        this.result.style.backgroundColor = "var(--Verydarkviolets)";
        this.butonTheme.style.backgroundColor = "var(--Verydarkviolets)";
        this.numbers.style.backgroundColor = "var(--Verydarkviolets)";
        this.calc.style.color = "var(--Lightyellow)";
        this.buttons.forEach((button) => {
          const number = button.dataset.number;

          if (number == "del" || number == "reset") {
            button.style.backgroundColor = "var(--Darkviolet)";
          } else if (number == "=") {
            button.style.backgroundColor = "var(--Purecyan)";
          } else {
            button.style.backgroundColor = "var(--Darkviolet)";
            button.style.color = "var(--Lightyellow)";
          }
        });
      }
    });

    this.buttons.forEach((button) => {
      button.addEventListener("click", () => {
        button.classList.add("clicked");

        window.setTimeout(() => {
          button.classList.remove("clicked");
        }, 300);

        const number = button.dataset.number;

        const changeType = parseInt(number, 10);

        if ((typeof changeType === "number" && number > -1) || number == ".") {
          if (change) {
            this.scrrenCalc.textContent = "";
            change = false;
          }

          this.scrrenCalc.textContent += number;
          const valuesOfCalc = parseInt(this.scrrenCalc.textContent, 10);
          result[count] = valuesOfCalc;

          console.log(result);
        } else if (
          number == "+" ||
          number == "-" ||
          number == "*" ||
          number == "/" ||
          number == "=" ||
          number == "reset" ||
          number == "del"
        ) {
          if (number == "reset") {
            result = [];
            count = 0;
            this.scrrenCalc.textContent = "";
            return;
          } else if (number == "del") {
          }
          count++;
          change = true;

          if (count >= 2) {
            count = 1;
          }

          if (number == "=") {
            const sign = types[0];

            switch (sign) {
              case "+":
                this.scrrenCalc.textContent = result[0] + result[1];
                result[0] = result[0] + result[1];

                break;
              case "-":
                this.scrrenCalc.textContent = result[0] - result[1];
                result[0] = result[0] - result[1];
                break;
              case "*":
                this.scrrenCalc.textContent = result[0] * result[1];
                result[0] = result[0] * result[1];
                break;
              case "/":
                this.scrrenCalc.textContent = result[0] / result[1];
                result[0] = result[0] / result[1];
                break;
            }

            console.log(result);
          } else {
            types[0] = number;
          }

          console.log(types);
        }
      });
    });
  }
}

const calc = new Calc();
