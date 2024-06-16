We recall [[Projects/Solid State Physics/Electron dynamics/The central equation in 1 dimension]]:


$$\left(E^0_{k-G} - E\right)C_{ k - G} + \sum_{G'}C_{ k -G'}V_{G'-G}=0$$

We want to study the case of the quasi free electron, i.e. $V \sim 0$. This is equivalent to the condition for which all Fourier coefficients in the potential expansion are 0.
So the central equation reduces to:

$$\left(E^0_{k-G} - E\right)C_{ k - G} =0$$

Given that $C_{ k - G}\neq0$, because else we will have a zero wave function, the solution is:

$$ E^0_{k-G} = E$$

For all of the $N$ possible values of the $\bar{k}$ vector. So other then the energy of the free electron model $E= \frac{\hbar^2k^2}{2m}$ all the other energies that differs from this of a reciprocal space vector are allowed.
We have different way of visualize them.
The first way is called **extended scheme**, in which we plot all the parabolas as stated in the equation:


![[Immagini/Quasi free electrons via the central equation in 1 dimension_2.png|300]]

Now, given that for a given value of $E$ we have multiple equal value, all correspondent to $\bar{k}$ values differing from one another up to a reciprocal space vector $\bar{G}$, we can plot all the values in the first Brillouin zone without losing information:

![[Immagini/Quasi free electrons via the central equation in 1 dimension.png|300]]

This way of showing the energy is called **reduced scheme** and is the preferred way in literature.

Now we focus on the wavefunctions.
If we consider the Bloch orbital expansion in 1 dimension:

$$ \Psi_{n,k}(x) = \sum_{G'}C_{k-G'} e^{i(k-G')x}= \sum_{G'}\phi_{k-G'}  $$

Now we can evaluate specifically the plane waves (we are considering $G_0=0$, and using the fact that $G_{-m}=-G_m$) for the different values of $k-G$:

$$
\begin{cases}
\phi_{k}=C_{k} e^{ikx} \qquad \text{with energy}\ E=E^0_{k} \\
\phi_{k\pm G_1}=C_{k\pm G_1} e^{i(k\pm G_1)x} \qquad \text{with energy}\ E=E^0_{k\pm G_1} \\
\phi_{k\pm G_2}\propto e^{i(k\pm G_1)x} \qquad \text{with energy}\ E=E^0_{k\pm G_2}\\
\vdots
\end{cases}
$$

Given that, we have:

$$ \begin{aligned}
\Psi_{n,k}(x) &= \sum_{l=-\infty}^{+\infty} C_{k-\frac{2 \pi}{a}l} e^{i(k-\frac{2 \pi}{a}l)x} = C_ke^{ikx}+\sum_{l=1}^{+\infty} C_{k-\frac{2 \pi}{a}l} e^{i(k-\frac{2 \pi}{a}l)x}+C_{k+\frac{2 \pi}{a}l} e^{i(k+\frac{2 \pi}{a}l)x} = \\
&= \left(C_k+\sum_{l=1}^{+\infty} C_{k-\frac{2 \pi}{a}l} e^{-i\frac{2 \pi}{a}lx}+C_{k+\frac{2 \pi}{a}l} e^{i\frac{2 \pi}{a}lx} \right)e^{ikx}= \left(\sum_{l=-\infty}^{+\infty} C_{k-\frac{2 \pi}{a}l} e^{-i\frac{2 \pi}{a}lx}\right)e^{ikx} = u_{nk}(x) e^{ikx} 
\end{aligned}

$$

Which is, of course, consistent with the Bloch theorem.









