             /* Game Function
        - Player must guess a number between min and max
        - Player must gets a certain amount of guesses
        - Notify the player of guesses remaining
        - Notify the player of the correct anwser if loose
        - Let the player choose to play again
        */
        // Game values
        let min = 1, //minvalue
            max = 10, // maxvalue
            winningNum = 2,
            guessesLeft = 3;

        // UI Elements
        const game = document.querySelector('#game'),
            minNum = document.querySelector('.min-num'),
            maxNum = document.querySelector('.max-num'),
            guessBtn = document.querySelector('#guess-btn'),
            guessInput = document.querySelector('#guess-input'),
            message = document.querySelector('.message');

        // Assign UI min max
        minNum.textContent = min
        maxNum.textContent = max;

        guessBtn.addEventListener('click', ()=>{
            let guess = parseInt(guessInput.value);
            console.log(guess)

            if(isNaN(guess) || guess < min || guess > max && guessInput.value === ""){
                setMessage(`Enter a number between ${min} and ${max}`, 'red' )
            }
            
            if(guess === winningNum){
                // setMessage(`${guess} is the correct anwser!`, 'green')
                gameOver(true, `${guess} is the correct anwser! YOU WIN!`)
            }
            else {
                if(guessesLeft === 0){
                    setMessage(`Game Over! you lost. The correct anwser was ${winningNum}`, 'red')
                }
                else if(guess != winningNum){
                guessesLeft -= 1
                    setMessage(`Incorrect!, you have ${guessesLeft} guess remaining!`, 'red')
                    // gameOver(false, )
                }
            }
            
        })

        function setMessage(msg, theme){
            guessInput.style.borderColor = theme;

            message.textContent = msg;
            message.style.color = theme;
        }

        function gameOver(won, msg){
            let color;
            won ? color = "green" : color = "red"

            guessInput.disabled = true;
            message.textContent = msg;


            setMessage(msg, color)
        }

        // // Game values
        // let min = 1,
        //     max = 10,
        //     winningNum = 2,
        //     guessesLeft = 3;

        // // UI Elements
        // const game = document.querySelector('#game'),
        //     minNum = document.querySelector('.min-num'),
        //     maxNum = document.querySelector('.max-num'),
        //     guessBtn = document.querySelector('#guess-btn'),
        //     guessInput = document.querySelector('#guess-input'),
        //     message = document.querySelector('.message');

        // // Assign UI min max
        // minNum.textContent = min;
        // maxNum.textContent = max;

        // // Listen for guess
        // guessBtn.addEventListener('click', function(){
        //     let guess = parseInt(guessInput.value)
        //     console.log(guess)

        //     // Validate
        //     if(isNaN(guess) || guess < min || guess > max){
        //         setMessage(`Please enter a number between ${min} and ${max}`, 'red')
        //     }

        //     // check if won
        //     if(guess === winningNum){
        //         // Game over - won
        //         setWon(true, 'green')
        //         setMessage(`${winningNum} is correct!, YOU WIN!`, 'green')
        //     } else{ 
        //         // Wrong Number
        //         guessesLeft -= 1

        //         if(guessesLeft === 0){
        //             //Game over - lost

        //             setWon(true, 'red')
        //             setMessage(`Game Over, you lost, The correct number was ${winningNum}`, 'red')
        //         }
        //         else {
        //             // Game continues - anwser wrong
        //             guessInput.style.borderColor = 'red'
        //             guessInput.value = ''
        //             setMessage(`${guess} is not correct, ${guessesLeft} guesses left `, 'red')
        //         }
        //     }
        // })

        // // Set message
        // function setMessage(msg, color){
        //     message.style.color = color;
        //     message.textContent = msg;
        // }
        // function setWon(disabled, success){
        //     guessInput.disabled = disabled;
        //     guessInput.style.borderColor = success;
        // }

    