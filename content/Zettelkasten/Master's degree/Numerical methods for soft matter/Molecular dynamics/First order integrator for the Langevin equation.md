
We consider $\eta(t) = \frac{dw}{dt}$, where $w(t)$ is a Wiener process, so that $w(s) = \int_0^s \eta(t)dt$.
We now evaluate the correlation function between 2 Wiener processes :

$$ \langle w(s)w(s') \rangle = \langle \int_0^s \eta(t)dt\int_0^{s'} \eta(t')dt' \rangle = \int_0^s\int_0^{s'} dt dt' \langle \eta(t)\eta(t')\rangle = \int_0^s\int_0^{s'} dt dt' \delta(t-t') $$

In order to solve the last part, we have to recall the Dirac delta property :

$$ \int_a^b dx\delta(x-c) = 
\begin{cases}
1 & c \in[a,b] \\
0 & c \notin[a,b] \\
\end{cases}
$$

And distinguish 2 cases:
- $s > s'$:
Then we write the integral as:

$$\int_0^s\int_0^{s'} dt dt' \delta(t-t') = \int_0^{s'} dt'\int_0^{s} dt \delta(t'-t) = \int_0^{s'} dt' = s'$$

In this way is guaranteed that $t \in [0,s]$, so the inner integral is 1.

- $s' > s$:
Then we write the integral as:

$$\int_0^s\int_0^{s'} dt dt' \delta(t-t') = \int_0^{s} dt\int_0^{s'} dt' \delta(t-t') = \int_0^{s} dt = s$$

In this way is guaranteed that $t' \in [0,s']$, so the inner integral is 1.

We conclude in the end:

$$ \langle w(s)w(s') \rangle = \min(s,s') $$