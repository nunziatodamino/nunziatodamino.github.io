This are the early types of [[Projects/Numerical methods for soft matter/Monte Carlo methods/Random numbers generation/Pseudorandom number generator (PRNG)|PRNG]], and generally considered bad.

They are defined by the affine transformation:

$$ I_n = \left(aI_{n-1}+b \right)\mod(m) \qquad m=2^w-1 $$

Where we recall that the modulo operation $a \mod b$ is an operation between integers that gives back the remainder of the quotient ( $4 \mod 2 = 0$, $5 \mod 2 = 1$, etc...  )

Note that these types can be extended using for example:

$$ I_n = \left(aI_{n-1}+bI_{n-2} \right)\mod(m) \qquad m=2^w-1 $$

Or if one is fancy:

$$ I_n =  \sum_{j=1}^pa_jI_{n-j}\mod(m) \qquad m=2^w-1 $$

For some $p$.
**Whatever the complication, these PRNG are not good and should be avoided.**
