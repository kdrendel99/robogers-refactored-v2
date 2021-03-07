# _Robotic Mr. Rogers Neighborhood_

#### _This site's function is for me to practice coding in Javascript. Additonally, people may input a number that generates some fun results._

#### By _**Karlson Drendel**_

## Technologies Used

* _HTML_
* _CSS_
* _Javascript_
* _JQuery_
* _Bootstrap_


## Description

_I've build this site for practice with user input in Javascript. This is one of the more complex projects I've built to date, and I anticipate adding on to it with my free time. Feel free to take the test, and check out some of the provided material for your result!_

## Setup/Installation Requirements

* _Open terminal_
* _Create a desired directory to store repo clone using $ mkdir_
* _Navigate to local directory in terminal and enter $ git clone https://github.com/kdrendel99/Code-Review-3.git_
* _Use the '$ touch index.html' function to select, followed by '$ code .'_

## Known Bugs

_No bugs!_

## License
_MIT License_
_Copyright (c) 2021 Karlson Drendel_


## Specs 
Describe: beepBoop()

Test: "It should return 0 if the number 0 is inputted"
Expect(beepBoop(0).toEqual(0);

Test: "It should return with the numbers preceding the number the user inputted"
Expect(beepBoop(5)).toEqual(0,1,2,3,4,5);

Test: "It should replace the number 3 with "Won't you be my neighbor?" **note - 'neighbor' was used to shorthand in this commit
Expect:(beepBoop(4)).toEqual(0,1,2,Won't you be my neighbor?,4)

Test: "It should replace every number containing the number 3 with "Won't you be my neighbor?"
Expect: (beepBoop(14)).toEqual(0,1,2,WYBMN,4...11,12,WYBMN,14)

Test: "It should replace every number containing 2 with 'boop'."
Expect:(beepBoop(14)).toEqual(0,1,boop,neighbor,...,11,boop,neighbor,14)

Test: "It should replace every number containing 1 with 'beep'."
Expect: (beepBoop(14)).toEqual(0,beep,boop,neighbor,...,beep,boop,neighbor,beep).


## Contact Information

_Karlson Drendel - (360)-553-8451_
_[https://kdrendel99.github.io/portfolio-repo/]_
