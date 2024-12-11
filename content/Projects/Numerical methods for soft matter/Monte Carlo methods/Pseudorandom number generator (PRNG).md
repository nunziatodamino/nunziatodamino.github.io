The base idea is the following.
We want to generate a sequence of integers $I_0, I_1, \dots, I_n$ with the constraint that the lat number in the sequence $0\leq I_n < 2^w$, where $w$ is the word's length in computer in which we run the generator, with the deterministic law:

$$ I_{n} = f(I_{n-1}) $$

The number $I_0$ is given by the user and is called in this context **seed**.
If then one wants a number between 0 and 1, then one can:

$$ \xi_n = \frac{I_n}{2^{w}-1} $$

In this way on can obtain a sequence of numbers $\{\xi_n\} \in (0,1)$. Note that the original sequence of integers is finite due to the constraint, so there must be some index $p$ in which it starts repeat itself ( imagine the typical overflow behavior of an integer in C). We can them state that the sequence that we have generated repeats every $T \sim 2^w$.

**Note that of course, by definition, this cannot be a sequence of true random numbers, and can only be called a sequence of pseudorandom numbers.

In order to produce number that seems random, they should have different characteristics:
A sequence of pseudo-random numbers is good if :
• The cycle of the sequence (i.e., the period after which the sequence repeats itself) is very large
• The sequence is made by uncorrelated numbers (so they do not look too close to a deterministic sequence
of numbers)

In the end is interesting to recall a phrase from J. Von Neumann:
“Anyone who considers arithmetical methods to produce random numbers is in a state of sin”