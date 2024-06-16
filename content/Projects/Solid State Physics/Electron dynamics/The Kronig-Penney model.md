This model permits to solve the one-electron periodic problem analytically in 1 dimension.

We choose as the periodic potential in our Hamiltonian a series of square well potential, of width $b$ and depth $-V_0$, centered upon the ion position in the lattice.
In the limit in which $b\to 0$, $V_0 \to +\infty$ and the product $bV_0$ remains constant, this potential becomes a Dirac comb, in which each Dirac delta is centered upon a position of the Bravais lattice:

$$V(x) = -V_0b \sum_{n=-\infty}^{+\infty} \delta(x-na)$$

![[Immagini/The Kronig-Penney model_image.png|400]]

In order to solve the periodic problem one must remember how to tackle the Dirac delta potential problem, which we restate here with its main feature:
In a system subject to the potential $V(x) = -\alpha\delta(x)$, with $\alpha>0$ (delta potential well) one has the following Schrodinger equation, in the neighborhood of the $x=0$ position, and radius, say, $\epsilon$:

$$- \frac{\hbar^2}{2m}\frac{d^2\psi}{dx^2} -\alpha\delta(x)\psi(x) = E\psi(x)$$

If we then integrate in this neighborhood:

$$\begin{aligned} - \frac{\hbar^2}{2m}\int_{-\epsilon}^{+\epsilon}dx\frac{d^2\psi}{dx^2} -\alpha\int_{-\epsilon}^{+\epsilon}dx\delta(x)\psi(x) = E\int_{-\epsilon}^{+\epsilon}dx\psi(x) \\
- \frac{\hbar^2}{2m}\left[ \frac{d\psi}{dx} \right]_{-\epsilon}^{+\epsilon}-\alpha\psi(0) =E\int_{-\epsilon}^{+\epsilon}dx\psi(x) \\

- \frac{\hbar^2}{2m}\left[ \left(\frac{d\psi}{dx}\right)_{x=+\epsilon}-\left(\frac{d\psi}{dx}\right)_{x=-\epsilon} \right]-\alpha\psi(0) =E\int_{-\epsilon}^{+\epsilon}dx\psi(x)\end{aligned}$$

In the limit $\epsilon \to 0^+$, the RHS is 0, because we have the integral of a continuous function over a zero measure set, We have in the end:

$$\left[ \frac{d\psi}{dx} \right]_{x=0^+}-\left[ \frac{d\psi}{dx} \right]_{x=0^-}=-\frac{2m\alpha}{\hbar^2} \psi(0)$$

So in a Dirac delta potential well the wave function is continuous but its derivative has a discontinuity jump has evaluated in the formula.

Now we have to solve the problem differentiating by bound and unbound states.
Given the fact that this is a periodic problem, we solve it in the region of space $0<x<2a$ for simplicity. When interested in solutions in other regions of space we propagate them by Bloch theorem.

Starting from unbounded states ($E>0$) we have a generic solution in form of traveling waves:

$$ \psi(x) =\begin{cases} Ae^{ikx}+Be^{-ikx} \qquad \text{if}\ a<x<2a \\
Ce^{ikx}+De^{-ikx} \qquad \text{if}\ 0<x<a \end{cases} \qquad \mbox{where} \qquad k = \sqrt{\frac{2mE}{\hbar^2}} $$

We now impose the various boundary conditions, starting from Bloch theorem   :

$$\begin{aligned} 
\psi(x) &= e^{iqa}\psi(x-a) \qquad q \in 1^{st}\ \text{BZ} \\
Ce^{ikx}+De^{-ikx}&=e^{iqa}(Ae^{i(k-a)x}+Be^{-i(k-a)x}) \\
e^{ikx}(C-Ae^{iqa}e^{ika})+e^{-ikx}(D-Be^{iqa}e^{-ika})&=0
\end{aligned}$$

Given that $e^{ikx}$ and $e^{-ikx}$ are independent coefficients, the above equation is true only if:

$$ C=Ae^{iqa}e^{ika}=e^{i(k+q)a} \qquad D=Be^{iqa}e^{-ika}=e^{i(q-k)a}$$

Now we impose continuity of the wavefunction in $x=a$:

$$\begin{aligned} 
Ae^{ika}+Be^{-ika} = Ce^{ika}+De^{-ika} \\
e^{ika}(A-C) + e^{-ika} (B-D) = 0
\end{aligned}$$

Notice now that we cannot state that $e^{ika}$ and $e^{-ika}$ are independent, because they are numbers in this case.

Finally we evaluate the derivative discontinuity jump in $x=a$. We have:

$$\begin{aligned}
\left[ \frac{d\psi}{dx} \right]_{x=a^+}-\left[ \frac{d\psi}{dx} \right]_{x=a^-}&=\frac{2m\alpha}{\hbar^2} \psi(a) \\
ik(Ae^{ika}-Be^{-ika})-ik(Ce^{ika}-De^{-ika})&=-\frac{2m\alpha}{\hbar^2} (Ae^{ika}+Be^{-ika}) \\
e^{ika}\left(ikA-ikC+\frac{2m\alpha}{\hbar^2}A\right) + e^{-ika}\left(ikD-ikB+\frac{2m\alpha}{\hbar^2}B\right) &=0

\end{aligned}$$

Finally we can put all the conditions together. First we plug the Bloch condition in the differentiability boundary conditions:

$$ 
\begin{aligned}
\begin{cases}
e^{ika}(A-Ae^{iqa}e^{ika}) + e^{-ika} (B-Be^{iqa}e^{-ika}) = 0 \\
e^{ika}\left(ikA-ikAe^{iqa}e^{ika}+\frac{2m\alpha}{\hbar^2}A\right) + e^{-ika}\left(ikBe^{iqa}e^{-ika}-ikB+\frac{2m\alpha}{\hbar^2}B\right) =0
\end{cases}\\
\begin{cases}
A(e^{ika}-e^{iqa}e^{2ika}) + B(e^{-ika}-e^{iqa}e^{-2ika}) = 0 \\
A\left(ike^{ika}-ike^{iqa}e^{2ika}+\frac{2m\alpha}{\hbar^2}e^{ika}\right) + B\left(-ike^{-ika}+ike^{iqa}e^{-2ika}+\frac{2m\alpha}{\hbar^2}e^{-ika}\right) =0
\end{cases} \\

\end{aligned}
$$

This system has non trivial solution if the coefficient matrix determinant is 0, which can be simplified in the form:

$$\begin{aligned}

(1-e^{iqa}e^{ika})\left(ik-ike^{iqa}e^{-ika}+\frac{2m\alpha}{\hbar^2}\right)-(1-e^{iqa}e^{-ika})\left(-ik+ike^{iqa}e^{ika}+\frac{2m\alpha}{\hbar^2}\right) &=0 \\

(1-e^{iqa}e^{ika})\left(1-e^{iqa}e^{-ika}+\frac{2m\alpha}{ik\hbar^2}\right)-(1-e^{iqa}e^{-ika})\left(-1+e^{iqa}e^{ika}+\frac{2m\alpha}{ik\hbar^2}\right) &=0 \\

2 - (e^{iqa}e^{-ika}+e^{iqa}e^{ika}) +e^{iqa}\left( -e^{ika}+e^{iqa}-\frac{2m\alpha}{ik\hbar^2}e^{ika}  -e^{-ika}+e^{iqa}+\frac{2m\alpha}{ik\hbar^2}e^{-ika}  \right) &=0 \\

2e^{-iqa} - e^{-ika}-e^{ika} -e^{ika}+e^{iqa}-\frac{2m\alpha}{ik\hbar^2}e^{ika}  -e^{-ika}+e^{iqa}+\frac{2m\alpha}{ik\hbar^2}e^{-ika}  &=0 \\

 2e^{-iqa} -2e^{-ika}-2e^{ika} +2e^{iqa}-\frac{2m\alpha}{ik\hbar^2}(e^{ika}-e^{-ika})  =0 \\
 
 -(e^{ika}+e^{-ika}) +(e^{iqa}+e^{-iqa})-\frac{m\alpha}{ik\hbar^2}(e^{ika}-e^{-ika})  =0 \\


\end{aligned}
$$

Using Euler identity we obtain:

$$ -2\cos(ka) +2\cos(qa)-\frac{2m\alpha}{k\hbar^2}\sin(ka)  =0 $$

And, in the end:

$$  \cos(qa) = \cos(ka)+\frac{m\alpha}{k\hbar^2}\sin(ka)   $$

Now we multiply the second term in RHS by the lattice constant $a$, and rewrite the condition as:

$$  \cos(qa) = \cos(ka)+P\frac{\sin(ka)}{ka} \qquad P\equiv\frac{m\alpha a}{k\hbar^2}= \frac{mV_0 b a}{k\hbar^2}  $$

This equation implies a band structure for our system. This because the LHS is bounded between $(-1,+1)$, so that also the RHS must be. But this implies that only selected $k$ can be admissible for our system , and therefore, only selected $E(k)=\frac{\hbar^2k^2}{2m}$ (the energy expression is simply obtained by inverting the $k$ expression in the solution). We show here a plot that show the RHS plotted for a specific value of $P$. We see that the RHS lies within the bounds only when evaluated on the bold lines.

![[Immagini/The Kronig-Penney model_compatibility.png|500]]

And consequently the graph of $E(\bar{k})$ restricted in the first Brillouin zone 

![[Immagini/The Kronig-Penney model_bands.png|500]]

Of course is striking the resemblance with the bands obtained in the [[Projects/Solid State Physics/Electron dynamics/Free electrons (Empty lattice) via the central equation in 1 dimension|Free electrons (Empty lattice) via the central equation in 1 dimension]] and the [[Projects/Solid State Physics/Electron dynamics/Quasi-free electrons via the central equation in 1 dimension|Quasi-free electrons via the central equation in 1 dimension]] method. The main control parameter is the adimensional parameter $P$. A low $P$ correspond to a situation similar to the empty lattice bands, while an high $P$ corresponds to a situation similar to the quasi-free bands (shown here in half Brillouin zone):

![[Pasted image 20230212123053.png|300]]


The last presented picture seems in contrast with the one present below, because present an energy band below 0, while the former doesn't. 
This can be easily explained by studying the case of the bound states (i.e. E<0).

In this case we will have the solutions:

$$ \psi(x) = A'e^{\kappa x}+B'e^{-\kappa x} \qquad \mbox{where} \qquad \kappa = \sqrt{\frac{2m|E|}{\hbar^2}} $$

This will not change much our derivation, leading to (thanks to the formal substitution $k \to -i\kappa$) to the constraint:

$$\cos(qa)=\cosh(ka)+P\frac{\sinh(ka)}{ka}$$

The same considerations holds for this equation, with one fundamental difference: we know from quantum theory that a delta potential can have only one bound state, so we will expect only one additional band below the zero energy.

