
let num=6;
flag=0
      for (let i=2; i <= num/2; i++ )
        {
          if ( num % i == 0 )
               flag=1 
          
        }
                if (flag == 1 )
                    console.log("not prime")
                else
                        console.log( "is prime");