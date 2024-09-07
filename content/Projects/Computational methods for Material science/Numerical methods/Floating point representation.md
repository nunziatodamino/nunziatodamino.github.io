One distinctive feature of computer-assisted mathematics is that instead of computing with elements of continuous fields (e.g., the real or the complex numbers), one operates on a discrete, finite set of digital objects. 

**The real numbers, for instance, can essentially only be represented by infinite strings of digits, and the operations on them can be seen as acting on those infinite strings.** 
**However, computation on a digital computer cannot carry out such operations, since only finite strings of digits can be manipulated.**

In order to overcome this limitation the most widespread system is floating-point arithmetic, and specifically the floating-point arithmetic covered by the IEEE-754 standard

In this standard the number is represented in scientific notation using 2 as a base:

$$ M \cdot 2^E $$

The IEEE standard requires that $M$ be normalized, that is, of the form $\pm1.F$, where $F$ is the fractional part.
One can generalize to a generic base, but is irrelevant to our purposes.

We see in the following how a float_32 is composed:

![[Floating point representation.png]]