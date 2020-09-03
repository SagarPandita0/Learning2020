# Learning2020

## Problem Statement

We want to create an application for hospital management. It should have the follow features :-

1. Patient comes for treatment. Patient has to give his name , Address, phone number and What problem he had. Name , Phonnumber are compulsory fields.
2. Patient can visit the hospital multiple times, System should log the visit date and time. A history has to be made of all visits the patient attends.For every visit date and time is compulsory. 
3. Every patient can have allergies. System should have the ability to put allergy name , small description and number of years he has this allergy. Allergies are maintain patient specific and not visit specific.
4. Patient can have multiple problems. So like a patient can have fever , cough .While entering problem system should have ability to put problem description , number of days he has this problem. Problems are tracked at visit level.
5. Patient is allocated to doctor who gives him treatments.At any time only one Patient will be allocated to a doctor.
6. For every problem there will be medications. For one problem there are can be mutliple medications.
7. A medication will have name , description( 3 times in day)
8. Hospital have staffs which are Nurses , doctors  and  ward boys.
9. All staff should have name , joining date and department.
10. Doctor has Name , education like he is MD MS . 
11. Patient can be attended by Multiple Nurses and Ward boys but treated by only one Doctor.

Create patient model with the above features and validation and ability to print report which will print all patient details.


## HMS
Currently HMS has code that showcases :-
- [x] Private
- [x] Public
- [x] Protected
- [x] Internal
- [x] Inheritance of a class.
- [x] Abstract Class.

## BoxUnbox
* Boxing[Stack -> Heap] and Unboxing[Heap -> Stack] are computationally expensive processes. When a value type is boxed, a new object must be allocated and           constructed. To a lesser degree, the cast required for unboxing is also expensive computationally. 
* Use **Generics** to avoid this performance issue altogether!

## Delegates
* Here I showed declaration, instantiation, and use of a delegate that can be used to reference method[Adding Number here] that take an integer parameter and         returns an integer value.

## UserDefinedExceptions
* Here we learn that there are 2 types of Exceptions, Standard and Custom.
* Standard ones have lots of restrictions in terms of what all errors can be displayed to the user.
* User defined Exceptions circumvent the restrictions of standard class. Here we have the flexibility to output any type of custom message to the user, making the     whole UX/UI better.
