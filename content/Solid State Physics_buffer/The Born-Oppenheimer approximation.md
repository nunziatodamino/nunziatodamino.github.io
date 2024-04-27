We consider the following many-body problem. We have N atoms, each of which possesses Z electrons. 

We write the time-independent Schrodinger equation for this system.

$$\hat{H}\Psi(\bar{R}_1,\bar{R}_2,\dots,\bar{R}_N,\bar{r}_1,\bar{r}_2, \dots\bar{r}_n) = E\Psi(\bar{R}_1,\bar{R}_2,\dots,\bar{R}_N,\bar{r}_1,\bar{r}_2, \dots\bar{r}_n) $$

With $n=ZN$.

Uppercase coordinates represent nuclear positions and lowercase coordinates represent electronic positions. 

Assuming Coulombian interaction between particles, the Hamiltonian is:

$$\hat{H} = \hat{T}_N +\hat{T}_e +\hat{V}_{NN}+\hat{V}_{eN}+\hat{V}_{ee} $$

With evident symbolism. Furthermore, in the position eigenbasis, such operators have an explicit form.

$$\braket{\bar{R}, \bar{r}|\hat{H}|\Psi} = \left[ -\frac{\hbar^2}{2M}\sum_I^N\nabla^2_I +-\frac{\hbar^2}{2m}\sum_i^n\nabla^2_i + \frac{1}{2}k_e\sum_{I,J}\frac{Z^2e^2}{|\bar{R}_I-\bar{R}_J|}- \frac{1}{2}k_e\sum_{i,J}\frac{Ze^2}{|\bar{r}_i-\bar{R}_J|} + \frac{1}{2}k_e\sum_{i,j}\frac{e^2}{|\bar{r}_i-\bar{r}_j|} \right]\Psi(\bar{R}, \bar{r})$$

Where we used the shorthand notation $(\bar{R}_1,\bar{R}_2,\dots,\bar{R}_N,\bar{r}_1,\bar{r}_2, \dots\bar{r}_n) \equiv (\bar{R},\bar{r})$ and used uppercase indices for the nuclear positions and lowercase indices for the electronic ones. One observe also that the sign changes in the electron-nucleus potential due to the fact that is am attractive potential.

Solving this equation for a typical number of atoms and electrons is analytically impossible and computationally infeasible. For this reason, we use the so-called adiabatic approximation. 

A justification is given [[Justification of the adiabatic approximation|here]], where we also derive the important relations:

$$\nabla_{\bar{R}_I} \Phi_e(\bar{R},\bar{r}) = 0 \qquad \hat{T}_N\Psi = \Phi_e\hat{T}_N\Phi_N $$

Where we implicitly separated the wave function into a nuclear part and an electronic part.
Now we are able to simplify the many body equation. One has:

$$(\hat{T}_N +\hat{T}_e +\hat{V}_{NN}+\hat{V}_{eN}+\hat{V}_{ee})\Psi(\bar{R}, \bar{r}) =E \Psi(\bar{R}, \bar{r})$$

$$(\hat{T}_N +\hat{T}_e +\hat{V}_{NN}+\hat{V}_{eN}+\hat{V}_{ee})\Phi_N\Phi_e = E\Phi_N\Phi_e$$

$$\Phi_e\hat{T}_N\Phi_N +(\hat{T}_e +\hat{V}_{NN}+\hat{V}_{eN}+\hat{V}_{ee})\Phi_N\Phi_e = E\Phi_N\Phi_e$$

$$\Phi_e\hat{T}_N\Phi_N +\Phi_N(\hat{T}_e +\hat{V}_{NN}+\hat{V}_{eN}+\hat{V}_{ee})\Phi_e = E\Phi_N\Phi_e$$

$$\Phi_N(\hat{T}_e +\hat{V}_{NN}+\hat{V}_{eN}+\hat{V}_{ee})\Phi_e = E\Phi_N\Phi_e-\Phi_e\hat{T}_N\Phi_N $$

We divide by $\Psi = \Phi_N\Phi_e$

$$\frac{1}{\Phi_e}(\hat{T}_e +\hat{V}_{NN}+\hat{V}_{eN}+\hat{V}_{ee})\Phi_e = E-\frac{1}{\Phi_N}\hat{T}_N\Phi_N $$

We have a PDE equation with separated variables, so that this admit solution only if both members are equal to a constant:

$$
\begin{cases}
\frac{1}{\Phi_e}(\hat{T}_e +\hat{V}_{NN}+\hat{V}_{eN}+\hat{V}_{ee})\Phi_e = C \\
E-\frac{1}{\Phi_N}\hat{T}_N\Phi_N = C
\end{cases}
$$

This constant will depend only on the nuclear positions (this can be implied by the second equation). So that:

$$
\begin{cases}
\frac{1}{\Phi_e(\bar{R}, \bar{r})}(\hat{T}_e +\hat{V}_{NN}+\hat{V}_{eN}+\hat{V}_{ee})\Phi_e(\bar{R}, \bar{r}) = C(\bar{R}) \\
E-\frac{1}{\Phi_N(\bar{R})}\hat{T}_N\Phi_N(\bar{R}) = C(\bar{R})
\end{cases}
$$

$$
\begin{cases}
(\hat{T}_e +\hat{V}_{NN}+\hat{V}_{eN}+\hat{V}_{ee})\Phi_e(\bar{R}, \bar{r}) = C(\bar{R})\Phi_e(\bar{R}, \bar{r}) \\
(\hat{T}_N +C(\bar{R}))\Phi_N(\bar{R}, \bar{r}) = E \Phi_N(\bar{R}, \bar{r})
\end{cases}
$$

We can find the constants $C(\bar{R})$ by solving the eigenvalue problem given in the first system of equations. These constant will be the energies of the system when the nuclei are considered fixed. We can call these energies adiabatic energies.
We note also that If we now think of the Hamiltonian as a kinetic plus a potential contribution, we can observe the following fact: the eigenvalues found by the first equation assume, in the second, the role of the potential.

Is not necessary in the application to derive the entire energy spectra of the adiabatic energies. This because the major properties of solids depend only on the ground state of these energies, so that one often solve :

$$
\begin{cases}
(\hat{T}_e +\hat{V}_{NN}+\hat{V}_{eN}+\hat{V}_{ee})\Phi_e(\bar{R}, \bar{r}) = \mathcal{E}(\bar{R})\Phi_e(\bar{R}, \bar{r}) \\
(\hat{T}_N +\mathcal{E}(\bar{R}))\Phi_N(\bar{R}, \bar{r}) = E \Phi_N(\bar{R}, \bar{r})
\end{cases}
$$

Where $\mathcal{E}(\bar{R}) \equiv C_0(\bar{R})$.
We can have a better insight on $\mathcal{E}(\bar{R})$ without solving the eigenvalue problem by taking the mean value over the electronic function (considering the eigenfunction properly normalised):

$$\braket{\Phi_e|\hat{T}_e +\hat{V}_{NN}+\hat{V}_{eN}+\hat{V}_{ee}|\Phi_e} = \mathcal{E}(\bar{R})$$

Using the projector $\hat{\mathbb{1}} = \int\ket{\bar{r}}\bra{\bar{r}}$ , we can isolate $V_{NN}$ which depends only on the uppercase coordinates, so that:

$$V_{NN}(\bar{R})+\braket{\Phi_e|\hat{T}_e+\hat{V}_{eN}+\hat{V}_{ee}|\Phi_e} = \mathcal{E}(\bar{R})$$

So that the ground state energy is the Coulomb potential term between nuclei corrected with a term denoted as screening term, that takes account of the electron presence in the system. This term is usually negative.

Finally, to complete our argument, we can show that the second equation can be replaced by a classical one.
This because the De Broglie wavelength associated to the nuclear wavefunction is much smaller that the relative distance $d$ between nuclei, so that the nuclei are distinguishable (i.e. classical) particles.
(e.g. in a Si crystal at room temperature, we a nearest neighbour distance of $d \sim 2.3 \mathring{A}$ and a De Broglie wavelength of $\lambda = h/p \sim 0.3 \mathring{A}$ where a rough estimate for $p$ is obtained by the equipartition theorem $K \sim \frac{3}{2}k_bT$  )

One has then the final form of the equations of the electronic and nuclear motion in the Born-Oppenheimer approximation:

>[!info] **Born-Oppenheimer approximation**
>The motion of a system of $N$ atoms, each of which has $Z$ electrons can be described by the following equations:
>$$ \begin{cases}
(\hat{T}_e +\hat{V}_{NN}+\hat{V}_{eN}+\hat{V}_{ee})\Phi_e(\{\bar{R}_I\}, \bar{r}) = \mathcal{E}(\{\bar{R}_I\})\Phi_e(\{\bar{R}_I\}, \bar{r}) \qquad \text{Electronic part} \\
M \frac{d^2\bar{R}_I}{dt^2} = -\frac{\partial\mathcal{E}(\{\bar{R}_I\})}{\partial\bar{R}_I} \qquad \text{Nuclear part}
\end{cases} $$
Where we have stressed in the first equation that the nuclear coordinates are fixed and not variables by using the curly brackets, while in the second they are not.
Notice also that the equations are ==not== decoupled.

