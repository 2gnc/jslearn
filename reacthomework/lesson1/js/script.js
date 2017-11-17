'use strict';

loop.runLoop( 1, () => { console.log( 'greetings!' ) } );

areaCalc.calculeteArea( 2, 3 ).print();

let one = dm.makeManager( 'vasya', 27, '01-01-1990', 100000, 'IT' ),
		two = dm.makeManager( 'dima', 20, '01-01-1997', 100000, 'IT' ),
		three = dm.makeDeveloper( 'petya', 30, '01-01-1987', 100000, 'IT' ),
		four = dm.makeDeveloper( 'kolyan', 30, '01-01-1987', 100000, 'IT' ),
		five = dm.makeDeveloper( 'nikita', 30, '01-01-1987', 100000, 'IT' );

one.addDeveloper( three );
one.addDeveloper( four );
three.setManager( two );
five.setManager( two );

one.displayInfo();
two.displayInfo();
three.displayInfo();
four.displayInfo();
five.displayInfo();


 ( /** @lends Task04 */ function(){

 })();











