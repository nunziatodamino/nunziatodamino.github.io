We study the monoatomic linear chain by using [[Zettelkasten/Master's degree/Solid State Physics/Lattice dynamics/The harmonic approximation|The harmonic approximation]]

In this case, there is no need to identify the crystal structure, as it is implicit since it is possible to define only one Bravais lattice in one dimension. Therefore, once any atom is chosen, denoting by $a$ its lattice constant, a Bravais lattice structure is established with the following law (vector notation is unnecessary):

$$R = na \qquad n \in \mathbb{Z}$$

Then the the total potential energy can be written as:

$$\mathcal{E}({r_1,r_2,\dots r_N })  = \frac{1}{2} \sum_{n}\sum_{n'} \phi(|na -n'a + u(na, t) - u'(n'a, t)|) \equiv  \frac{1}{2} \sum_{n}\sum_{n'} \phi(|na -n'a + u_n - u_{n'}|) $$

Where the last position is to simplify the notation.
We now expand the 2 body potential $\phi$ in [[Zettelkasten/Master's degree/Basic Mathematics/A different way to see the Taylor series|Taylor's series]]:

$$ \begin{aligned}\phi(|(n-n')a +(u_n-u_{n'})|)  \simeq &\ \phi(|(n-n')a|) + \phi'(|(n-n')a|)(u_n-u_{n'}) + \\ & + \phi''(|na-n'a|)\frac{(u_n-u_{n'})^2}{2!} + o((u_n-u_{n'})^3)\end{aligned} $$

Where we have used the shorthand notation $\phi' = \dfrac{d\phi}{d(r-r')}$.
Let's analyze the various terms. The first term represents one of the contributions of the lattice's potential energy, that is, the energy required to build it (think of the analogy with electrostatics). We call the sum over the lattice of these terms the cohesive energy.
The second term is zero because it represents the derivative of the potential energy evaluated at its minimum, which is by definition 0.
So if I define:

$$\tilde{K}_{n,n'} = \frac{1}{2}\phi''(|na-n'a|) = \left(\frac{d^2\phi}{d(r-r')^2}\right)_{r-r'=(n-n')a}$$

So that one can write:

$$\phi(|r-r'|) \simeq \phi(|(n-n')a|) + \tilde K_{n,n'}(u_n-u_{n'})^2 \qquad \forall\ n,n'\in \mathbb{Z}$$

And so we think of each atom being somehow connected to another atom by a spring. Despite this being a significant simplification, it does not help us much, as to obtain the equations of motion, we need first to sum over the entire lattice:

$$ U_{tot}  =  \frac{1}{2}\sum_{n}\sum_{n'}\phi(|na-n'a|) +  \frac{1}{2}\sum_{n}\sum_{n'}\tilde{K}_{n,n'}(u_n-u_{n'})^2  $$

We then introduce a further simplification, namely that a lattice point can only interact with its nearest neighbor (In this case there are only 2 nearest neighbors for $n$: $n+1$ and $n-1$.). In this way, the expression greatly simplifies, becoming:

$$ U_{tot}  =  \frac{1}{2}\sum_{n}\sum_{n'}\phi(|na-n'a|) + \frac{\tilde{K}}{2}\sum_{n=1}^N(u_n-u_{n+1})^2  $$

Where $N$ is the total number of atom in the chain (more formally should be $\infty$)
Because of the following symmetry: $\tilde{K}_{n-1,n}=\tilde{K}_{n,n+1}$, we can write only $\tilde{K}$ and this term can be put outside of the sum.
In the end we obtain:

$$ U_{tot}  =  U_0 +  \frac{\tilde{K}}{2}\sum_{n=1}^N(u_n-u_{n+1})^2 $$


We call the first term cohesive energy. We have also denoted with $\tilde{N}$ the number of nearest neighbors, which in the case of a linear chain is 2.
So that, when we solve the equations of motion, in this approximation:

$$\begin{aligned} & M\frac{d^2u_m}{dt^2} = -\frac{\partial U_{tot}}{\partial u_m} \\
& M\frac{d^2u_m}{dt^2} = - \frac{\tilde{K}}{2}\sum_{n=1}^N2(u_n-u_{n+1})(\delta_{m,n}-\delta_{m,n+1}) \\
& M\frac{d^2u_m}{dt^2} = - \tilde{K}\sum_{n=1}^N(u_n-u_{n+1})(\delta_{m,n}-\delta_{m-1,n}) \\
& M\frac{d^2u_m}{dt^2} = - \tilde{K}\left[(u_m-u_{m+1})-(u_{m-1}-u_{m}))\right] \\
& M\frac{d^2u_m}{dt^2} = \tilde{K}\left[u_{m+1}+u_{m-1}-2u_{m}\right] \\



\end{aligned} $$

It is extremely interesting to note now that this equation is a discretized form of the D'Alembert equation (see [[Zettelkasten/Master's degree/Basic Mathematics/Forward and backward approximation for derivatives]] ). This allows us to make several observations.

The first, simplest, is to assume that this equation has a plane wave as its solution. The second, more subtle, is that if we move away from the lattice, the discretization disappears, and we can see the motion of a crystal as the propagation of a wave inside it.
Upon these considerations one propose as solution of the equation:

$$u_n(R,t) = Ae^{i(kR-\omega t)} = Ae^{i(kna-\omega t)} $$

If we then substitute in equation of motion, we can find the law for $\omega$:

$$ \begin{aligned}& -M\omega^2Ae^{ikna}e^{-i\omega t} = \tilde{K}Ae^{-i\omega t}(e^{ik(n+1)a}+e^{ik(n-1)a}-2e^{ikna})\\
&-M\omega^2Ae^{ikna}e^{-i\omega t} = \tilde{K}Ae^{ikna}e^{-i\omega t}(e^{ika}+e^{-ika}-2)\\
& -M\omega^2= \tilde{K}(e^{ika}+e^{-ika}-2)\\
& \omega^2= \frac{\tilde{K}}{M}(-e^{ika}-e^{-ika}+2) \\
& \omega^2= \frac{2\tilde{K}}{M}(1-\cos(ka)) \\
& \omega^2= \frac{4\tilde{K}}{M}\sin^2\left(\frac{ka}{2}\right)
\end{aligned} $$

Therefore we obtain:

$$\omega(k)= \sqrt{\frac{4\tilde{K}}{M}} \left| \sin\left(\frac{ka}{2}\right) \right|$$

![[Images/Pasted image 20230215181144.png|400]]

We see a plot limited to $k$ values within the first Brillouin zone. 
