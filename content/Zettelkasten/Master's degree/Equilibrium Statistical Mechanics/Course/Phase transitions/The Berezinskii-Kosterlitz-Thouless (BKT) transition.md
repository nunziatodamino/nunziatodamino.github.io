Although we have [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/The Ising Model/The Mermin-Wagner theorem|shown]] that in $d=2$ the XY model cannot display a phase transition in the canonical sense, i.e. in having a change of the order parameter, we show in this note that is possible nonetheless to define a special type of phase transition without long range order.
We start from the fact that one can show that the autocorrelation function for the spin has form:

$$
\braket{S(0)S(\bar{r})} = 
\begin{cases}
e^{-|\bar{r}|/\xi} &\text{for}\ T\gg1, \ \xi = \frac{L}{\ln(2T/K)} \\
\left(\frac{|\bar{r}|}{L}\right)^{-\eta} &\text{for}\ T\ll1, \ \eta = \frac{T}{2 \pi K} \\
\end{cases}
$$

From this we can see that **in the low temperature limit the autocorrelation function ad the behavior typical of the one at critical point.**
Note that there are many differences. This not happens at a single value of $T$, given that $\eta$ is temperature dependent.
But happens over the interval $(0, T_{BKT}]$ (Note that we exclude 0 because at $T=0$ the autocorrelation function is 1, so that we can imply that there is maximum correlation $\forall\bar{r}$, i.e. there is long range order. Note that this is overkill in general to imply long range. It suffices that the autocorrelation function does not decay with the distance.).
This condition is called quasi-long range order and is a considered a special phase transition, called Berezinskii-Kosterlitz-Thouless (BKT) transition.

This happens because in the system, other than spin waves, there are [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Phase transitions/Vortices in the 2D XY model|vortices]].
