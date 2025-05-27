Suppose that we want to know the electrons and holes densities in an homogeneous semiconductor at $T\neq 0$.
Before evaluating directly these quantities we proceed in doing some considerations.

First we will consider an homogeneous semiconductor at $T\neq 0$ a semiconductor with no heterojunctions, made of one kind of semiconductor and with constant doping, i.e. with constant donor density $N_d$ (or acceptor density $N_a$) such that $\nabla_{\bar{r}}N_d =0$ (equivalently $\nabla_{\bar{r}}N_a =0$).

Moreover in our initial analysis we will restrict ourselves to the study of system under no influences of external electric and magnetic fields, and most importantly we will consider them at a thermal equilibrium , i.e. fixed $T$ so that $\partial_t T =0$ for long periods of time and $\nabla_{\bar{r}}T = 0$.

Under these condition we can state that electrons are distributed in the material according to the [[Projects/Equilibrium Statistical Mechanics/Miscellanea/Fermi-Dirac statistics|Fermi-Dirac statistics]], so that the occupation function for electrons is $f^e_n(\bar{k}) = f_{FD}(E_n(\bar{k}), E_F)$ while for the holes is simply $f^h_n(\bar{k}) = 1- f_{FD}(E_n(\bar{k}), E_F)$

![[Images/Electrons and holes densities in an homogeneous semiconductor.png|400]]

Notice that these occupation function have the same value at the Fermi level.

We can now proceed to the state counting.
We start with the electrons. Called $n_{electron}$ the electron density in the material:

$$ n_{electron} = n_{k-states} = 2 \frac{1}{V}\frac{V_{k-spaces}}{\delta^3k} = \frac{1}{4 \pi^3}\sum_n\int_{BZ}d^3k f_n^e(\bar{k}) $$

Now we can use the DOS definition to simplify the integral:

$$  \frac{1}{4 \pi^3}\sum_n\int_{BZ}d^3k f_n^e(\bar{k}) = \int_{E_c}^{+\infty}dE\rho(E)f_{FD}(E,E_F)$$

Is interesting to see graphically the product of the functions inside the integral:

![[Images/Electrons and holes densities in an homogeneous semiconductor-1.png|500]]

The same idea can be applied verbatim to the holes case, to obtain:

$$n_{holes} =  \int_{E_c}^{+\infty}dE\rho(E)(1-f_{FD}(E,E_F)) $$

In this case the 2 function product is the following:

![[Images/Electrons and holes densities in an homogeneous semiconductor-2.png|500]]

Giving that in a material there will be both electrons and holes I can evaluate both quantities and so end with a representation like this:

![[Images/Electrons and holes densities in an homogeneous semiconductor-3.png|400]]

**Is now clear intuitively that moving the Fermi level changes the number density of electrons and holes.
Specifically when the Fermi level increases electron density increases and hole density reduces, while if the Fermi level decreases the viceversa happens.**

This is shown in the following picture:

![[Images/Electrons and holes densities in an homogeneous semiconductor-4.png|400]]

