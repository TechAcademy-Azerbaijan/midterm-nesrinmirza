const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
    /* 
    Istifadəçinin daxil etdiyi dəyişəni qəbul edirik. 
    Giriş veriləni String type olur. Number type-a çevirmək üçün parseInt() metodundan istifadə edirik.
    Vergüllə daxil edilmiş sətri iki fərqli ədədə bölmək üçün split metodundan istifadə edirik.
    */
    var input = result.input; // "12,5"
    var numbers = input.split(','); // ['12', '5']
    var n = parseInt(numbers[0]); // Ilk daxil olunmuş ədədi alırıq. Nümunə - 12 
    

    for (i=1; i<=n;i++ ) {

        if ((n%i==0)&&(i%2!=0)) {
    
            console.log(i);      
        } 
    }

});
