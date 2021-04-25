## Part 1a
1) 20
2) 20
3) 20
4) Error because variables declared with let are only visible within their own code blocks so it is illegally trying to access result
5) Error because we are trying to assign a constant variable after it has already been declared.
6) Since there was in error in line 9, it won't be executed because the program is terminated but we can't access constants outside of the scope as well.
## Part 1b
1) 3, since we declared i with the var and var variables don't have block scope so it outputs i after running the for loop through the length of prices
2) Line 13 outputs 150 since at the end of the loop, the var discountedPrice is assigned to 300 * (1-0.5).
3) Line 14 outputs 150 as well since it takes the discountedPrice variable and multiplies it by 100 and divides by 100 which outputs 150.
4) It outputs the discounted array, [50,100,150] since it takes each element in prices and multiplies it by 0.5, the discount.
5) It outputs an error that i is not defined since we defined i with as a let variable and since it is defined within the for loop, it is technically a part of that block and out of scope.
6) It outputs an error that discountedPrice is not defined because we define the variable within the block of the for loop so it is not within scope.
7) 150, since we define finalPrice outside of the for loop, the variable is still within scope so line 7 still assigns the variable to be the element at i times the discount 
8) It outputs the same discounted array in question 4, [50,100,150] because we define the variable outside of the for loop so all the assignments are still functional.
9) It causes an error that i is not defined because we define i within the for loop which is a part of the block so it is not within scope.
10) 3, since length is a constant value, it is simply the prices.length value which is 3.
11) It ouputs [50,100,150] because we are still updating the discountedPrice variable to the array properly within scope.
12) 
    A. student.name
    B. student['Grad Year']
    C. student.greeting()
    D. student['Favorite Teacher'].name
    E. student.courseLoad[0]
13) 
    A. '32' since integer 2 maps to its exact string representation so the strings so the strings are concatenated.
    B. 1 since 3 maps to its integer representaion and the - applies to integers
    C. 3 becuase null maps to 0 so 3+0=3
    D. '3null' because 3 and null map to their string representations and the two strings are concatenated.
    E. 4 because true maps to 1 so 1+3=4
    F. 0 because both false and null map to 0 
    G. 3 undefined since 3 and undefined map to their string representations and the strings are concatenated.
    H. NaN beause undefined is mapped to NaN and since we use the - operand, it only applies to numbers.
14)
    A. true since '2' is mapped to its integer represenation so 2>1
    B. false since they're both strings, they are compared lexocographically and '12' comes before '2'
    C. true because '2' is mapped to its integer representation
    D. false, the === compares the value and the type and we are comparing a string and integer
    E. false because true is mapped to 1 and 1 does not equal 2
    F. true because both are the same type and equate to true
15) The == operand compares the equality of two values with type conversion while the === checks for equality before type conversion. This is why part C and D have different outputs because the === checks for data types as well.

17) [2,4,6] Since we called modifyArray with doSomething as a parameter, we will be calling this callback function on each index of our parameter array. Each element gets multiplied by 2 and then we push this new value to our newArray that we will return. 

19) 1 4 3 2 since 2 has a 1 second delay time for it being outputed.
