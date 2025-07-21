//******this in global space******//
var a=10;
if you write someyhing inside a function it is functional scope
what ever there is outside on the top of the code is global space

this keyword in global space behaves as aglobal object
global object=>value of this keyword

**what is the value of this inside global space
=>its a global object that can be different,it can be window it can be global depending upon where you are running that piece of code

This behave differently in strict mode and notstrict mode
how to convert a code into strict mode
=>just write "use strict" om the top of the code

if this is inside a function its value depends on the strict and nonstrict mode 
in unstrict mode the value will be window and in strict mode the value will be undefined
why?
there is a phenomena this substitution 
if the value of this keyword is undefined or null the this will be replaced with global object