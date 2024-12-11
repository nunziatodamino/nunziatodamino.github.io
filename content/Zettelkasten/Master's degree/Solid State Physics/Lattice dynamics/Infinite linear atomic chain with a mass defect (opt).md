Real solid have never pure cristalline structures, but present often impurities or defects.
We want to study what the presence of impurities causes respect to the general case in the simplest case possible, i.e the presence of a single impurity in an infinite linear chain.

As shown in the figure, let's consider an infinite monoatomic chain, remove an atom from position $n=0$ and replace it with one with mass $M$.

![[Images/Infinite linear atomic chain with a mass defect.png|500]]


With this operation the system loses its translational invariance, and we cannot write a single equation in order to solve the system but write site-specific equations to solve the motion.
In the context of [[Zettelkasten/Master's degree/Solid State Physics/Lattice dynamics/The harmonic approximation]], and as seen in the [[Zettelkasten/Master's degree/Solid State Physics/Lattice dynamics/Infinite monoatomic linear chain]] we can easily write:

$$ 
\begin{aligned}
& m \frac{d^2 u_n }{dt^2} = \tilde{K}[u_{n+1}+u_{n-1}-2u_n] \qquad n\neq 0 \\
& M \frac{d^2 u_0 }{dt^2} = \tilde{K}[u_{1}+u_{-1}-2u_0] \qquad n= 0 \\
\end{aligned}
$$

In order to solve the system for all $n$, we must propose as solution of the system:

$$ u_n = Ae^{-\kappa |n|a -i\omega t} \qquad \kappa \in \mathbb{C} $$

By substituting we find:

$$ 
\begin{aligned}
& m \omega^2 = \tilde{K}[2-e^{\kappa a}-e^{-\kappa a}] \qquad n\neq 0 \\
& M \omega^2 = 2\tilde{K}[1-e^{-\kappa a}] \qquad n= 0 \\
\end{aligned}
$$

The details can be found [[linear monoatomic chain with mass defect - calculations.pdf|here]]
Now, far from the impurity we expect to have the same solution of the infinite linear chain. So that, for $n>>0$ we can obtain the solution of the infinite linear chain by setting $\kappa = ik$.

For knowing what happens in the neighborhood of the impurity we can make the hypothesis that the frequency is the same as the one in $n=0$.
So, for $n\in B(0,\rho)$, by equating the 2:

$$ \tilde{K}[2-e^{\kappa a}-e^{-\kappa a}] = \frac{2m}{M} \tilde{K}[1-e^{-\kappa a}] $$

In order to solve more easily the equation we set $x=e^{\kappa a}$. We obtain:

$$ \begin{aligned}
&\left[2-x-\frac{1}{x}\right] = \frac{2m}{M} \left[1-\frac{1}{x}\right] \\
&\left[2x-x^2-1\right] = \frac{2m}{M} \left[x-1\right] \\
&\left[x^2-2x+1\right] = -\frac{2m}{M} \left[x-1\right] \\
& (x-1)\left[\left(x-1\right)+\frac{2m}{M} \right] =0 \\
\end{aligned} $$

That has 2 solutions, the trivial $x=1\ \to \kappa =0$ and the more meaningful:

$$ x = 1-\frac{2m}{M} \qquad \Rightarrow \qquad \kappa a = \log \left(1-\frac{2m}{M}\right) \\ $$

Notice that, because $\kappa \in \mathbb{C}$, we must use in principle the complex logarithm.
Then , if one substitute this value in the equation of motion for $n= 0$ obtains:

$$\begin{aligned} & M \omega^2 = 2\tilde{K}\left[1-\frac{1}{1-\frac{2m}{M}}\right]  \\
& \omega^2 = \frac{2\tilde{K}}{M}\left[\frac{2m}{M}\frac{1}{\frac{2m}{M}-1}\right] 
\end{aligned}$$

We now study different cases, according to the different condition on the argument of the logarithm.

If we impose that the logarithm must be real, i.e. :

$$ 1-\frac{2m}{M} >0  \qquad \Rightarrow \qquad M>2m$$  
Then $\kappa \in \mathbb{R}$.  Can be either $\kappa < 0$ if $0<1-\frac{2m}{M}<1$ or $\kappa > 0$ if $1-\frac{2m}{M}>1$ 
In either cases the frequency $\omega$ is imaginary.
So we have:
- $(\kappa < 0)$ decays in times, diverges in space (**??????**) , non-physical solution
- $(\kappa > 0)$ decays in times, decays in space

If the logarithm can be complex, we have :

$$ 1-\frac{2m}{M} <0  \qquad \Rightarrow \qquad M<2m$$

Then $\log\left( 1-\frac{2m}{M} \right) = \ln\left(\frac{2m}{M} -1 \right) + i\pi$ by complex logarithm definition.
In order to avoid a divergent solution, we must impose moreover $\frac{2m}{M} -1>1$ in order to guarantee that $\Re(k)>0$
Finally, this lead to a real frequency, so, in the end a solution oscillating in time and decaying in space, that can be found by substitution:

$$ u_n = Ae^{-\kappa |n|a -i\omega_d t} = Ae^{-|n|( \ln\left(\frac{2m}{M} -1 \right) + i\pi) -i\omega_d t} = A \frac{(-1)^{|n|}}{\left(\frac{2m}{M} -1\right)^{|n|}}e^{i \omega_d t} \qquad n\in B(0,\rho)  $$

Where :

$$ \omega_d^2 = \frac{2\tilde{K}}{M}\left[\frac{2m}{M}\frac{1}{\frac{2m}{M}-1}\right] \qquad \text{where}\ 0<\frac{2m}{M} -1<1  $$

So we introduced another vibrational mode to the system that decays as we go far away from the impurity. Thus this mode is said to be localized.
Moreover we observe that:

$$ \omega_d > \sqrt{\frac{4 \tilde K}{M}} = \omega_{\text{no defects}} $$
