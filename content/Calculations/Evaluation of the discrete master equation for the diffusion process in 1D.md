![[Diffusion_1d.png|400]]

Note that what we want to evaluate is the conditional probability:

$$ \mathbb{P}(x_{i},t_{1}|x_{i_0},t_{0}) $$

Note that if we postulate that a particle can move only of an amount of $l$ for each timestep $\Delta t$, we have only 3 possibilities, corresponding in the sum of 3 probabilities, given the fact that the events are independent:

$$  \mathbb{P}(x_{i},t_{1}|x_{i_0},t_{0})  \equiv w_{i}(t_{1}) = P_{-}\delta_{i,i_0-1} + P_0\delta_{i,i_0} + P_{+}\delta_{i,i_0+1}$$

Namely, it can go to the left with probability $P_{-}$, it can stay still with probability $P_{0}$ and it can go to the right with probability $P_{+}$.

Moreover if we postulate that the particle must move at every timestep, namely $P_0=0$, we can simplify our expression:

$$w_{i}(t_{1}) = P_{-}\delta_{i,i_0-1}  + P_{+}\delta_{i,i_0+1}$$

Now we continue for the following time $t_2$ and propose the same question: what is the probability to find the particle in the position $x_{j}$ at the time $t_{2}$, given the fact that in the previous time $t_1$ the particle is in the position $x_{i'}$.

![[Diffusion_1d_2.png|400]]

We see from the figure that now we have 3 possibilities, and if we postulate that each jump, given the direction, has the same probability independently of the index number, we obtain:

$$  \mathbb{P}(x_{j},t_{2}|x_{i},t_{1})  \equiv w_{j}(t_{2}) = P^2_{-}\delta_{j,i_0-2} +2P_{-}P_{+} \delta_{j,i_0} + P^2_{+}\delta_{j,i_0+2}$$

Now, by refactoring:

$$w_{j}(t_{2}) = P^2_{-}\delta_{j,i_0-2} +2P_{-}P_{+} \delta_{j,i_0} + P^2_{+}\delta_{j,i_0+2}=$$

$$ = P_{-}\left( P_{-}\delta_{j,i_0-2}  + P_{+}\delta_{j,i_0}\right) + P_{+}\left( P_{-}\delta_{j,i_0}  + P_{+}\delta_{j,i_0+2}\right)  $$

Using the Kronecker delta translation invariance property, i.e. :  $\delta_{a,b} = \delta_{a\pm,b\pm c}$, we can finally rewrite:

$$
 = P_{-}\left( P_{-}\delta_{j+1,i_0-1}  + P_{+}\delta_{j+1,i_0+1}\right) + P_{+}\left( P_{-}\delta_{j-1,i_0-1}  + P_{+}\delta_{j-1,i_0+1}\right) = P_{-}w_{j+1}(t_1) + P_{+}w_{j-1}(t_1)$$

By induction one can show that :

$$ w_{j}(t_{n}) = P_{-}w_{j+1}(t_{n-1}) + P_{+}w_{j-1}(t_{n-1})$$
