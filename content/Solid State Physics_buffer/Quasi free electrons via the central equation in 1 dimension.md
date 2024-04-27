We recall [[The central equation in 1 dimension]]:

$$\left(E^0_{k-G} - E_{nk}\right)C_{ k - G} + \sum_{G'}C_{ k -G'}V_{G'-G}=0$$

We want to study the case of the quasi free electron, i.e. $V \sim 0$. This is equivalent to the condition for which all Fourier coefficients in the potential expansion are 0.
So the central equation reduces to:

$$\left(E^0_{k-G} - E_{nk}\right)C_{ k - G} =0$$

Given that $C_{ k - G}\neq0$, because else we will have a zero wave function, the solution is:

$$ E^0_{k-G} = E_{nk} \qquad G \in R.L.$$

So that if we consider the Bloch orbital expansion in 1 dimension:

$$ \Psi_{n,k}(x) = \sum_{G'}C_{k-G'} e^{i(k-G')x}= \sum_{G'}\phi_{k-G'} = \phi_{k-G} $$

Because from the equation only the coefficient $C_{ k - G}\neq0$.

Now we can evaluate specifically the plane waves (we are considering $G_0=0$, and using the fact that $G_{-m}=-G_m$) for the different values of $k-G$:

$$
\begin{cases}
\phi_{k}=C_{k} e^{ikx} \qquad \text{with energy}\ E_{1k}=E^0_{k} \\
\phi_{k\pm G_1}=C_{k\pm G_1} e^{i(k\pm G_1)x} \qquad \text{with energy}\ E_{2k}=E^0_{k\pm G_1} \\
\phi_{k\pm G_2}\propto e^{i(k\pm G_1)x} \qquad \text{with energy}\ E_{3k}=E^0_{k\pm G_2}\\
\vdots
\end{cases}
$$

Given that, for a fixed value of $k$ ,in the first Brillouin zone, we have $E_{1k}<E_{2k}<E_{3k}<\dots$ 



