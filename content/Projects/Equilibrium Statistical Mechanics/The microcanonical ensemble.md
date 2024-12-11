Suppose we want to describe an isolated system (this automatically implies that the number of particles $N$ is fixed) where the energy $E$ and the volume $V$ are fixed.
Let's see, from an ensemble point of view, the effect of this restriction with an example first.
![[Images/NVE.png| 300]]
Suppose to have, at time $t$, an ensemble with no energy constraint. We will have that all the possible points in the phase space, i.e. the microstates, are available.
Now we fix an energy between $E$ and $E+ \Delta$. We see that only the microstates in the plotted shells are available to the ensemble. We make then the following remark.
Restricting the energy to a certain gap implies that, other than the energy, we are fixing particular positions in the phase space for the microstates, so that one can say that to fix a certain energy means to fix the generalized coordinates of the microstates $\mathbb{q}$ in the phase space.
Note that is not necessary to say that also the conjugate momenta $\mathbb{p}$ are fixed. This because, in fixing the energy, one can evaluate the conjugate momenta by $E=\mathscr{H}(\mu)$, where with the last symbol we indicate the Hamiltonian evaluated at the microstate coordinate of interest.

We now move to a general description.
Supposed the same premises we have a macrostate given by $M=(E,\mathbb{q})$. We say that all the possible microstates corresponding to this macrostate constitute the microcanonical ensemble.
One can define the probability to find a particular microstate $\mu$ in a point of the phase space in this way:

$$ d\mathbb{P}_{(E,\mathbb{q})}(\mu) = \frac{1}{\tilde{N}}
\begin{cases}
1 \qquad \mbox{if}\ E=\mathscr{H}(\mu) \\
0 \qquad \mbox{elsewhere}
\end{cases} $$

Where $\tilde{N}$ is the total number of microstates associated to the macrostate $M$. Namely, considering the example before, we have that the microstate is either on the energy shell, or not, coherently with the [[Fundamental postulate of equilibrium statistical mechanics]].
The probability can be written in a more compact form utilising the Dirac delta:

$$ d\mathbb{P}_{(E,\mathbb{q})}(\mu) = \frac {1}{\tilde{N}} \delta(E-\mathscr{H}(\mu)) $$

In a more pedantic, yet useful, way one can indicate the particular microstate $\mu$ with its phase space coordinates $\mu = (\mathbb{q},\mathbb{p})$, so that one can write:

$$ d\mathbb{P}_{(E,\mathbb{q})}(\mu) = \frac {1}{\tilde{N}} \delta(E-\mathscr{H}(\mathbb{q},\mathbb{p})) $$

Now we use the definition from [[Classical statistical mechanics]], i.e. $d\mathbb{P} = \rho(\bar{\mathbb{q}},\bar{\mathbb{p}},t)dV$ so that one has in the end:

$$\rho(\bar{\mathbb{q}},\bar{\mathbb{p}},t) =  \frac {1}{dV\tilde{N}} \delta(E-\mathscr{H}(\mathbb{q},\mathbb{p})) $$

In order to connect later this with the quantum counterpart we consider $dV = h^{3N}N!$ so that:

$$\rho(\bar{\mathbb{q}},\bar{\mathbb{p}},t) = \frac{1}{\tilde{N}}  \frac {1}{h^{3N}N!} \delta(E-\mathscr{H}(\mathbb{q},\mathbb{p})) $$

Finally, in order to find the total number of microstates $\tilde{N}$ we impose the normalisation condition:

$$ \int_{\Gamma} \rho(\bar{\mathbb{q}},\bar{\mathbb{p}},t)dV = 1 \qquad \Rightarrow \qquad  \int_{\Gamma}  \frac{1}{\tilde{N}}  \frac {1}{h^{3N}N!} \delta(E-\mathscr{H}(\mathbb{q},\mathbb{p}))dV = 1 $$

So that, in the end:

$$\tilde{N} = \int_{\Gamma} \frac {1}{h^{3N}N!} \delta(E-\mathscr{H}(\mathbb{q},\mathbb{p}))dV$$

Finally, the entropy of the system can be obtained by:

$$ S = k_B \ln \tilde{N} $$


