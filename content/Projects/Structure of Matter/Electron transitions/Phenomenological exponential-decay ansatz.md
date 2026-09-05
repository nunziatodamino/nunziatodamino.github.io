Consider a 2 level system:

![[Phenomenological exponential-decay ansatz.png|500]]

Consider now the probability to have a spontaneous emission (as evaluated in the [[Absorption and emission]] note), and lets call it $W_{ba}^{\text{spont}} \equiv A_{ba}$. Then the population equation of level $B$ is simply:

$$
\begin{aligned}
\frac{dN_b}{dt}&=-A_{ba}N_b \quad\to \quad N_b(t)=N_b(0)e^{-A_{ba}t}.
\end{aligned}
$$

We can consider $1/A_{ba}$ the characteristic time for a spontaneous transition. 

More generally, the lifetime $\tau_b$ of the state $|\varepsilon_b\rangle$ is due to the total spontaneous-transition probability per unit time to all possible final states $|\varepsilon_a\rangle$:

$$
\tau_b=\frac{1}{\displaystyle\sum_a A_{ba}}.
$$

In other words, the probability at time $t$ for an atom to stay in $|\varepsilon_b\rangle$ is

$$
\begin{aligned}
\frac{dP_b(t)}{dt}=-\frac{1}{\tau_b}P_b(t) \quad \to \quad
P_b(t)=e^{-t/\tau_b}P_b(0).
\end{aligned}
$$

Since $P_b(t)=|c_b(t)|^2$, we expect:

$$
c_b(t)=e^{-t/(2\tau_b)}c_b(0).
$$

This last equation constitutes the main ingredient of our ansatz, i.e. we are saying that in light of this phenomenological model, the survival probability amplitude decays exponentially.

This is not true in general as other emission or absorption mechanism can compete together, but is just a way to simplify calculation for those particular atoms (or systems) in which the spontaneous emission mechanism is the main one.