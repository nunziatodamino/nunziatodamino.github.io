We begin our discussion by presenting a lemma:
 -  Lemma - For any function $\phi$ of the configurations $\{s_i\}$:
$$ \text{Tr}\ \phi(\{s_i\}) = \text{Tr}\ \phi(\{-s_i\}) $$

Moreover, if we write the Hamiltonian in the uniform magnetic field case:

$$ \mathscr{H}(H,J,\{s_i\}) = -J\sum_{<i,j>}s_is_j - \sum_i H_i s_i$$

Is clear that by reversing the spins:

$$ \mathscr{H}(H,J,\{s_i\}) = \mathscr{H}(-H,J,\{-s_i\})  $$

Let's now evaluate how the partition function behaves.

$$
\begin{aligned}
\mathcal{Z}_N(H,J,\{s_i\}) &=  \text{Tr} \exp\left( -\beta \mathscr{H}{H}(H,J,\{s_i\}) \right)= \text{Tr} \exp\left( -\beta \mathscr{H}{H}(-H,J,\{-s_i\}) \right) = \text{Tr} \exp\left( -\beta \mathscr{H}{H}(-H,J,\{s_i\}) \right) \\&= \mathcal{Z}_N(-H,J,\{s_i\})  
\end{aligned}
$$

Here we proved briefly that the partition function is an even function respect to $H$. Note that we used the Hamiltonian property and the lemma subsequently.
This property can be transposed easily to the free energy, by taking the $-k_bT\ln(\cdot)$ operator to both sides:

$$ F_N(H,J,\{s_i\}) = F_N(-H,J,\{s_i\}) $$

And of course, the same can by said about the bulk term of the free energy, by dividing by $N$ and taking the thermodynamic limit:

$$ f_b(H,J,\{s_i\}) = f_b(-H,J,\{s_i\}) $$

All this trickery is important for the following : **the global spin flip symmetry that implies all these relations, implies also that the finite size Ising model cannot display a transition to the ferromagnetic phase if $H=0$, i.e. $m = 0$ always.**

- **Proof** We prove this briefly. From the last equality, we recall from what we saw in [[Projects/Equilibrium Statistical Mechanics/The Ising Model/Order parameter in the Ising model|Order parameter in the Ising model]]:

$$ m_N(H,J,\{s_i\})=\frac{\partial f_b(H,J,\{s_i\})}{\partial H} = \frac{\partial f_b(-H,J,\{s_i\})}{\partial H} = -\frac{\partial f_b(-H,J,\{s_i\})}{\partial(- H)} =- m_N(-H,J,\{s_i\}) $$

Where in the RHS we multiply and divide by -1. Here is useful to recall that each of this expression happens at a constant $T$, or also at a constant $\beta$, so we can write alternatively:

$$ m_N(H,\beta)= - m_N(-H,\beta) \qquad \forall H,N, \beta $$

Then clearly if we set $H = 0$:

$$ m_N(0,\beta)= - m_N(0,\beta) \qquad \forall \beta,N $$

This equality can be true if and only if (simply imagine $m_N=x$ and solve for $x$) :

$$ m_N(0,\beta)= 0 \qquad \forall \beta,N $$
