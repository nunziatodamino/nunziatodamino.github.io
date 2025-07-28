The Kadanoff argument connects [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Scaling and Renormalization group/Widom's scaling hypothesis|Widom's scaling hypothesis]] directly to the microscopic block‐spin construction by identifying the homogeneity parameter with the lattice rescaling factor $\ell$. 
Consider a generic Ising model. Consider then it's correlation length $\xi$. We now partition the lattice in in blocks of size $\sim la$ chosen such that:

$$ a \ll l\ll \xi $$

So that the spins inside the block can considered uncorrelated.
Now we define a block spin (or super spin) for each block in the following way:

$$ S_I = \frac{\frac{1}{l^d} \sum_{i\in I}s_i}{\braket{\frac{1}{l^d} \sum_{i\in I}s_i}} = \frac{m_I}{\braket{m_C}}$$

Where the average is considered to be the thermal average. In case of an ergodic system we can consider it the simple ensemble average:

$$ S_I = \frac{\frac{1}{l^d} \sum_{i\in I}s_i}{\frac{1}{N_{\text{blocks}}}\sum_I\left(\frac{1}{l^d} \sum_{i\in I}s_i\right)} $$

This has the effect to [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Mean field approach/Ginzburg-Landau theory/Partition function coarse-graining|coarse-grain]] the system:

![[Images/Kadanoff argument.png|400]]

Now the idea is the we want to describe the new system with an Hamiltonian.

>[!info] **First assumption**
>We assume that the coarse Hamiltonian has the same functional form (and value) of the microscopic Hamiltonian but written respect the superspins:
>
$$ -\beta\mathscr{H}_C = K_l\sum_{\braket{IJ}}S_IS_J +h_l \sum_IS_i $$
>
**Note that this assumption is wrong in general and is just an approximation**.

We now explore the property of this new coarse-grained system.
First the number of spin blocks can be easily evaluated as :

$$ N_{\text{blocks}} = \frac{N_{\text{spins}}}{l^d}  $$

I.e. the number of spins divided the size of a block.
Also the correlation length will be rescaled:

$$\xi_l = \frac{\xi}{l}$$

Due to this one can make a prediction about the reduced temperature.
In the neighborhood of the critical temperature $\xi \sim |t|^{-\nu}$ so by inversion $|t| \sim  \xi^{-1/\nu}$ . Now, given that $\xi_l <\xi \to \xi^{-1/\nu} < \xi_l^{-1/\nu'} \to |t| < |t_l|$. Note that for $t>0$ we have $t_l>t$ while for $t<0$ we have $t_l<t$.
We conclude that rescaling has the effect of pushing the system away from criticality.
We can also evaluate the field rescale relation from the idea that the field term in the microscopic Hamiltonian is the same in the coarse Hamiltonian (by definition of $S_I$ we have $\sum_{i\in I}s_i = l^d\braket{m_C}S_I$) :

$$ h \sum_is_i= h \sum_I\sum_{i\in I}s_i = h \sum_Il^d\braket{m_C}S_I = h\braket{m_C}l^d \sum_IS_I = h_l \sum_IS_I  $$

So that we find the scaling relation:

$$h_l = h\braket{m_C}l^d $$

We can make scaling assumption also over the free energy.
As the Hamiltonian as the same functional form (and value) of the microscopic one, then the same will happen for the canonical partition function and consequently for the free energy. The only thing that changes is the density, where in one case we divide by $N_{\text{blocks}}$ and in one for $N_{\text{spins}}$
Specifically, concentrating just on the singular part:

$$ 
\begin{aligned}
F^{\text{micro}}_{\text{sing}}(t,h) &= F^{\text{coarse}}_{\text{sing}}(t_l,h_l)\\
N_{\text{spins}}f^{\text{micro}}_{\text{sing}}(t,h) &= N_{\text{blocks}}f^{\text{coarse}}_{\text{sing}}(t_l,h_l)\\
N_{\text{spins}}f^{\text{micro}}_{\text{sing}}(t,h) &= \frac{N_{\text{spins}}}{l^d}f^{\text{coarse}}_{\text{sing}}(t_l,h_l)
\end{aligned}
$$

From which we obtain in the end:

$$ f^{\text{coarse}}_{\text{sing}}(t_l,h_l) = l^d f^{\text{micro}}_{\text{sing}}(t,h)$$

In order to continue we have to make a second hypothesis

>[!info] **Second assumption**
>The coarse reduced temperature and field have a specific form:
>$$ 
\begin{cases}
t_l =tl^{y_t} \\
h_l =hl^{y_h}
\end{cases}$$
>Where $y_t$ and $y_t$ are unknown positive scaling exponents.

In this way we can write the statement of the free energy as:

$$ f^{\text{micro}}_{\text{sing}}(t,h) = l^{-d}f^{\text{coarse}}_{\text{sing}}(tl^{y_t},hl^{y_h})$$

Now i can in theory choose any rescaling that respect the coarse graining. So i choose $l=|t|^{-1/y_t}$ and the expression becomes:

$$ f^{\text{micro}}_{\text{sing}}(t,h) =|t|^{-d/y_t} f^{\text{coarse}}_{\text{sing}}\left(\text{sgn}(t),\frac{h}{|t|^{\Delta'}}\right) \qquad \Delta' = \frac{y_h}{y_t}$$

We already saw an extremely similar equation. Specifically if we recall the second form of the [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Scaling and Renormalization group/Widom's scaling hypothesis|Widom's scaling hypothesis]] divided by the system volume:

$$ f_{\mathrm{sin}}(t,h) = |t|^{2-\alpha} f_{\mathrm{sin}}\left(\text{sgn}(t), \frac{h}{|t|^{\Delta}}\right)  $$

These 2 are the same equation if we set the following relations between exponents:

$$ 2-\alpha =\frac{d}{y_t} \qquad  \frac{y_h}{y_t} = \frac{3}{2}$$

Now we prove that $\frac{1}{y_t} = \nu$. By considering that:

$$ \xi_l = l^{-1}\xi \iff t^{-\nu}l^{-\nu y_t} = t^{-\nu}l^{-1} \iff l^{1-\nu y_t} = 1$$

From which we get $1-\nu y_t= 0 \iff \frac{1}{y_t} = \nu$. With this we are able to prove the hyperscaling relation:

$$ 2-\alpha = \nu d $$
