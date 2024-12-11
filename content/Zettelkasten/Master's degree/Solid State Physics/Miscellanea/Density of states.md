Understanding the concept of density of states is essential in the framework of Solid State Physics. We can provide a general mathematical discussion, but it might be simpler to first explain the density of states in the two forms we encounter, 










### Phonon Density of States

Consider a crystal, where any restrictions on its dimensions, followed by the application of [[Born-Von Karman boundary conditions]], result in a discretization of possible vibrational wave vectors $\bar{k}$. These wave vectors are obtained by solving equations derived from the [[Zettelkasten/Master's degree/Solid State Physics/Lattice dynamics/Lattice dynamics approach]].
In addition to the discretization, we have a dispersion relation divided into different branches $\omega_s(\bar{k})$, labeled according to their polarization and whether they are optical or acoustic modes (e.g., TO, LA, etc.) (which, we recall, do not depend on the discretization but only on the system being studied).
Finally, to proceed with the definition, we introduce the 4-tuple $(\bar{k}, \omega_s(\bar{k}))$ as a vibrational (or phononic) state.
We can define the vibrational density of states for branch $s$ as:

$$g_s(\omega)d\omega = \text{number of states for which }\omega_s\in [\omega, \omega+d\omega] $$

And naturally, the total density of states (or simply density of states) is defined as:

$$g(\omega)= \sum_sg_s(\omega)$$
#### A Note on Degenerate States
Suppose we have a system with 1-degenerate LA branch and 2-degenerate TA branches. In this case, we will only observe 2 dispersion relations, $\omega_{LA}(\bar{k})$ and $\omega_{TA}(\bar{k})$.
When calculating the density of states, we need to be careful because:

$$g(\omega) = \sum_sg_s(\omega) = g_{LA}(\omega) + g_{TA}(\omega) + g_{TA}(\omega) = g_{LA}(\omega) + 2g_{TA}(\omega)  $$

That is, we calculate the density of states for each branch, but we need to multiply the result by the 
corresponding degeneracy.

#### Note on Counting

Let's see how the counting is performed based on the previous definition:
![[Images/density of states.png]]

We take the dispersion relation, choose an interval $[\omega, \omega +d\omega]$ (the yellow strip), and count the number of points (states) within it.
Finally, we divide this number by the width of the strip ($d\omega$) to obtain the density of states at the value $\omega$.

We can extend this definition to make it analytically useful. Drawing inspiration from [[Zettelkasten/Master's degree/Solid State Physics/Miscellanea/On the conventions in Solid State]], the main idea for calculating the density of states is as follows:

$$ g_s(\omega)d\omega = \int_A w_s(\bar{k}) dk$$

Here, $w_s(\bar{k})$ is the density of states on branch $s$ per unit wave vector $\bar{k}$, and $A$ is the set defined as $A=\{ \bar{k}\  |\  \omega_s(\bar{k}) \in (\omega,\omega+d\omega)\}$.
It is observed that $w_s(\bar{k})$ is a constant function and does not depend on the set $A$. Given a system's dimensionality $d$:

$$w_s(\bar{k}) = \frac{V}{(2 \pi)^d}$$

where $V$ is the hypervolume (if $d=1$, it is a length; if $d=2$, it is an area, etc.).
With this view, it is possible to obtain an analytical expression for the density of states, which is expressed below in the case of three dimensions:

$$g_s(\omega) = \frac{V}{(2 \pi)^3} \int_{\text{shell}} dS_{\omega} \frac{1}{\nabla_{\bar{k}}(\omega_s(\bar{k}))} $$

For a proof, refer to [[Zettelkasten/Master's degree/Solid State Physics/Lattice dynamics/Examples in evaluating particular vibrational density of states]]
[[Zettelkasten/Master's degree/Solid State Physics/Electron dynamics/Electronic density of states]]
