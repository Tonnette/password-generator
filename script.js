document.getElementById("#generate").onclick = clickEvent;

function clickEvent() {
    alert("You must agree to at least one character type for your password in the following prompts:");


    var counter = 0;
    var userinputAll = [];

    while (counter < 1) {

        userSpecial = confirm("Do you want special characters in your password?");
        userNum = confirm("Do you want numbers in your password?");
        userLower = confirm("Do you want Lowercase characters in your password?");
        userUpper = confirm("Do you wnat Uppercase characters in your password?");

        userInputAll = [userSpecial, userNum, userLower, userUpper];

        for (var i = 0; i < userInputAll.length; i++) {
            if (userInputAll[i] === true) {
                counter++
            }
        }
    }

    if (userSpecial && userNum && userLower && userUpper) {
        do {
            var selection = parseInt(window.prompt("Please enter a password length between 8 - 128 characters", ""), 10);
        }
        while (isNaN(selection) || selection > 128 || selection < 8);

        console.log(selection)

        function generate(length = selection) {
            var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            var lowercase = 'abcdefghijklmnopqrstuvwxyz';
            var numbers = '0123456789';
            var symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';

            var all = uppercase + lowercase + numbers + symbols;

            var password = '';

            for (var index = 0; index < length; index++) {
                var character = Math.floor(Math.random() * all.length);
                password += all.substring(character, character + 1);
            }

            return password;


        }
        alert("Your password is " + generate());
        var myPassword = document.getElementById("password");
        myPassword.append(generate());





    } else if (userSpecial && userNum && userLower) {
        do {
            var selection = parseInt(window.prompt("Please enter a password length between 8 - 128 characters", ""), 10);
        }
        while (isNaN(selection) || selection > 128 || selection < 8);

        console.log(selection)

        function generate(length = selection) {
            var lowercase = 'abcdefghijklmnopqrstuvwxyz';
            var numbers = '0123456789';
            var symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';

            var all = lowercase + numbers + symbols;

            var password = '';

            for (var index = 0; index < length; index++) {
                var character = Math.floor(Math.random() * all.length);
                password += all.substring(character, character + 1);
            }

            return password;
        }
        alert("Your password is " + generate());
        document.body.children[2].append(generate());

    } else if (userSpecial && userNum) {
        do {
            var selection = parseInt(window.prompt("Please enter a password length between 8 - 128 characters", ""), 10);
        }
        while (isNaN(selection) || selection > 128 || selection < 8);

        console.log(selection)

        function generate(length = selection) {
            var numbers = '0123456789';
            var symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';

            var all = numbers + symbols;

            var password = '';

            for (var index = 0; index < length; index++) {
                var character = Math.floor(Math.random() * all.length);
                password += all.substring(character, character + 1);
            }

            return password;
        }
        alert("Your password is " + generate());
        document.body.children[2].append(generate());

    } else if (userSpecial) {
        do {
            var selection = parseInt(window.prompt("Please enter a password length between 8 - 128 characters", ""), 10);
        }
        while (isNaN(selection) || selection > 128 || selection < 8);

        console.log(selection)

        function generate(length = selection) {
            var symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';

            var all = symbols;

            var password = '';

            for (var index = 0; index < length; index++) {
                var character = Math.floor(Math.random() * all.length);
                password += all.substring(character, character + 1);
            }

            return password;
        }
        alert("Your password is " + generate());
        document.body.children[2].append(generate());

    } else if (userNum && userLower && userUpper) {
        do {
            var selection = parseInt(window.prompt("Please enter a password length between 8 - 128 characters", ""), 10);
        }
        while (isNaN(selection) || selection > 128 || selection < 8);

        console.log(selection)

        function generate(length = selection) {
            var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            var lowercase = 'abcdefghijklmnopqrstuvwxyz';
            var numbers = '0123456789';

            var all = uppercase + lowercase + numbers;

            var password = '';

            for (var index = 0; index < length; index++) {
                var character = Math.floor(Math.random() * all.length);
                password += all.substring(character, character + 1);
            }

            return password;
        }
        alert("Your password is " + generate());
        document.body.children[2].append(generate());

    } else if (userNum && userLower) {
        do {
            var selection = parseInt(window.prompt("Please enter a password length between 8 - 128 characters", ""), 10);
        }
        while (isNaN(selection) || selection > 128 || selection < 8);

        console.log(selection)

        function generate(length = selection) {
            var lowercase = 'abcdefghijklmnopqrstuvwxyz';
            var numbers = '0123456789';

            var all = lowercase + numbers;

            var password = '';

            for (var index = 0; index < length; index++) {
                var character = Math.floor(Math.random() * all.length);
                password += all.substring(character, character + 1);
            }

            return password;
        }
        alert("Your password is " + generate());
        document.body.children[2].append(generate());

    } else if (userNum) {
        do {
            var selection = parseInt(window.prompt("Please enter a password length between 8 - 128 characters", ""), 10);
        }
        while (isNaN(selection) || selection > 128 || selection < 8);

        console.log(selection)

        function generate(length = selection) {
            var numbers = '0123456789';

            var all = numbers;

            var password = '';

            for (var index = 0; index < length; index++) {
                var character = Math.floor(Math.random() * all.length);
                password += all.substring(character, character + 1);
            }

            return password;
        }
        alert("Your password is " + generate());
        document.body.children[2].append(generate());
    } else if (userLower && userUpper) {
        do {
            var selection = parseInt(window.prompt("Please enter a password length between 8 - 128 characters", ""), 10);
        }
        while (isNaN(selection) || selection > 128 || selection < 8);

        console.log(selection)

        function generate(length = selection) {
            var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            var lowercase = 'abcdefghijklmnopqrstuvwxyz';

            var all = uppercase + lowercase;

            var password = '';

            for (var index = 0; index < length; index++) {
                var character = Math.floor(Math.random() * all.length);
                password += all.substring(character, character + 1);
            }

            return password;
        }
        alert("Your password is " + generate());
        document.body.children[2].append(generate());

    } else if (userUpper) {
        do {
            var selection = parseInt(window.prompt("Please enter a password length between 8 - 128 characters", ""), 10);
        }
        while (isNaN(selection) || selection > 128 || selection < 8);

        console.log(selection)

        function generate(length = selection) {
            var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

            var all = uppercase;

            var password = '';

            for (var index = 0; index < length; index++) {
                var character = Math.floor(Math.random() * all.length);
                password += all.substring(character, character + 1);
            }

            return password;
        }
        alert("Your password is " + generate());
        document.body.children[2].append(generate());

    } else if (userLower) {
        do {
            var selection = parseInt(window.prompt("Please enter a password length between 8 - 128 characters", ""), 10);
        }
        while (isNaN(selection) || selection > 128 || selection < 8);

        console.log(selection)

        function generate(length = selection) {
            var lowercase = 'abcdefghijklmnopqrstuvwxyz';

            var all = lowercase;

            var password = '';

            for (var index = 0; index < length; index++) {
                var character = Math.floor(Math.random() * all.length);
                password += all.substring(character, character + 1);
            }

            return password;
        }
        alert("Your password is " + generate());
        document.body.children[2].append(generate());

    }
};