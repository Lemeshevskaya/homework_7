next:
    for (var i = 2; i <= 1000; i++) {
        for (var j = 2; j < i; j++) {
            if ( i % j == 0) continue next;
        }
        console.log(i); //простое число
        }

