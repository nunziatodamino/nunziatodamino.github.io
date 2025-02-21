This is extremely simple.
We sample a pseudorandom number $\xi_i$ from (0,1) using a [[Projects/Numerical methods for soft matter/Monte Carlo methods/Random numbers generation/Pseudorandom number generator (PRNG)|Pseudorandom number generator (PRNG)]] (this is guaranteed to be sampled from a uniform distribution in (0,1) ) and then perform the shift:

$$ X_i = (b-a)\xi_i +a $$

Then the $X_i$ is a random variable sampled from a uniform distribution in (a,b)
