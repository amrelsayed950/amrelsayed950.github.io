
// $(".child-div").resizable();
// alert('Hello, World!')

window.onload = function () {

    // "use strict";
    const buttonBigger = document.getElementById('decoration');

    const malkov = document.getElementById('malkov');
    const textArea = document.querySelector('.story');
    const bling = document.getElementById('bling');
    const igpay = document.getElementById('igpay-a');

    function changeSize() {
        const style = getComputedStyle(textArea);
        let size = style.fontSize.split('p');
        size = parseInt(size[0]);
        size++;
        textArea.style.fontSize = `${size}px`;
    };

    function textStyle() {
        document.querySelector('.story').classList.toggle('showFont');

    };

    function interval() {
        i = setInterval(function () {
            changeSize();
        }, 500);
    }


    function pigIt(str){
        let strArr = str.split(' ');
        let pigLatin = [];
      
        for(let word of strArr){
          if((/([a-zA-Z])/).test(word)){
            pigLatin.push(word.substring(1) + word[0] + "ay");
          }else{
            pigLatin.push(word);
          }
        }
        return pigLatin.join(" ");
      }

    function igpayAtinlay() {
        let str = textArea.value;
        textArea.value = pigIt(str);
        // let vowels = ['a', 'e', 'i', 'o', 'u'];
        // let newStr = "";

        // if (vowels.indexOf(str[0]) > -1) {
        //     newStr = str + "-yay";
        //     textArea.value = newStr;
        // } else {
        //     let firstMatch = str.match(/[aeiou]/g) || 0;
        //     let vowel = str.indexOf(firstMatch[0]);
        //     newStr = str.substring(vowel) + '-' + str.substring(0, vowel) + "ay";
        //     textArea.value = newStr;
        // }
    };



    function malkovitch() {
            let words = textArea.value;
            var arr = words.split(/\s+/);
            var result = "";
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].length >= 5) {
                    arr[i] = "Markovitch";
                }
                result += arr[i] + " ";
            }
            textArea.value = result;
    };

    function main() {
        // buttonBigger.addEventListener('click', () => changeSize());
        buttonBigger.addEventListener('click', () => interval());



        document.querySelector('.btnStop').addEventListener('click', () => {
            // clearInterval(setInterval(interval, 2000));          
            clearInterval(i)
        });

        bling.addEventListener('change', e => {
            if (e.target.checked) {
                textStyle();
                document.body.style.backgroundImage = "url('img/dollar.jpg')";
            } else {
                textStyle();
                document.body.style.backgroundImage = "";
            }
        });

        igpay.addEventListener('click', () => {
            console.log('hello');
            igpayAtinlay()
        });
    
    
        malkov.addEventListener('click', () => malkovitch());


    };
    main();
}


