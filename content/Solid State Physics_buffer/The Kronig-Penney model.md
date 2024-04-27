This model permits to solve the electron dynamics problem analitically in 1 dimension.

We choose as the periodic potential in our Hamiltonian a series of square well potential, of width $b$ and depth $-V_0$, centered upon the ion position in the lattice.
In the limit in which $b\to 0$, $V_0 \to +\infty$ but the product $bV_0$ remains constant, this potential becomes a Dirac comb, in which each Dirac delta is centered upon a position of the Bravais lattice:

$$V(x) = -V_0b \sum_{n=-\infty}^{+\infty} \delta(x-na)$$

In order to solve the periodic problem one must remember how to tackle the Dirac delta potential problem, which we restate here with is solution:
In a system subject to the potential $V(x) = \alpha\delta(x)$, one has the following Schrodinger equation, in the neighbourhood of the $x=0$ position, and radius, say, $\epsilon$:

$$- \frac{\hbar^2}{2m}\frac{d^2\psi}{dx^2} +\alpha\delta(x)\psi(x) = E\psi(x)$$

If we then integrate in this neighbourhood:

$$- \frac{\hbar^2}{2m}\int_{-\epsilon}^{+\epsilon}dx\frac{d^2\psi}{dx^2} +\alpha\int_{-\epsilon}^{+\epsilon}dx\delta(x)\psi(x) = E\int_{-\epsilon}^{+\epsilon}dx\psi(x)$$

$$- \frac{\hbar^2}{2m}\left[ \frac{d\psi}{dx} \right]_{-\epsilon}^{+\epsilon}+\alpha\psi(0) =E\int_{-\epsilon}^{+\epsilon}dx\psi(x)$$
  $$- \frac{\hbar^2}{2m}\left[ \left(\frac{d\psi}{dx}\right)_{x=+\epsilon}-\left(\frac{d\psi}{dx}\right)_{x=-\epsilon} \right]+\alpha\psi(0) =E\int_{-\epsilon}^{+\epsilon}dx\psi(x)$$

In the limit $\epsilon \to 0$, the RHS is 0, because we have the integral of a continous function over a zero measure set, also one has that $lim_{\epsilon \to 0}[-\psi'(-\epsilon)] =+\psi'(0)$ So that:

$$\left[ \frac{d\psi}{dx} \right]_{x=0}=\frac{m\alpha}{\hbar^2} \psi(0)$$

We consider now the general problem. Is clear that, in the regions of space where $x \neq na$, we have traveling wave solution:

$$ \psi(x) = Ae^{ikx}+Be^{-ikx} \qquad \mbox{where} \qquad k = \sqrt{\frac{2mE}{\hbar^2}} $$

Where we are implicitly considering $E>0$.
We now impose the boundary condition in $x=na$, so upon derivation:

$$\frac{d\psi}{dx} = ikAe^{ikx}+-ikBe^{-ikx}$$

$$-\frac{mV_0b}{\hbar^2}(Ae^{ikna}+Be^{-ikna})=-\frac{mV_0b}{\hbar^2} \psi(0)=\left[\frac{d\psi}{dx}\right]_{x=na}= ikAe^{ikna}+-ikBe^{-ikna}$$

By comparing the LHS and the RHS we obtain the constraint:

$$ -\frac{mV_0b}{\hbar^2}(A+B)= ik(A-B) $$

We obtain from this equation:

$$A=B\frac{ik-\frac{mV_0b}{\hbar^2}}{ik+\frac{mV_0b}{\hbar^2}}\frac{n'a}{n'a} \equiv B\frac{ikn'a-P}{ikn'a+P} $$

To obtain the second constraint one can use the Bloch theorem. One has:

$$\psi(x+n'a)= e^{iqn'a}\psi(x) \qquad q \in1^{st}BZ $$

So that:

$$Ae^{ik(x+n'a)}+Be^{-ik(x+n'a)}=e^{iqn'a}(Ae^{ikx}+Be^{-ikx})$$

giving the constraint:

$$Ae^{ikn'a}+Be^{-ikn'a}=e^{iqn'a}(A+B)$$

We then put together the 2 constraints:

$$B\frac{ikn'a-P}{ikn'a+P}e^{ikn'a}+Be^{-ikn'a}=e^{iqn'a}\left(B\frac{ikn'a-P}
{ikn'a+P}+B\right)$$

$$\frac{ikn'a-P}{ikn'a+P}e^{ikn'a}+e^{-ikn'a}=e^{iqn'a}\left(\frac{ikn'a-P}{ikn'a+P}+1\right)$$

$$(ikn'a-P)e^{ikn'a}+(ikn'a+P)e^{-ikn'a}=e^{iqn'a}\left(ikn'a-P +ikn'a+P\right)$$

$$(ikn'a-P)e^{ikn'a}+(ikn'a+P)e^{-ikn'a}=e^{iqn'a}2ikn'a$$

$$ikn'a(e^{ikn'a}+e^{-ikn'a})-P(e^{ikn'a}-e^{-ikn'a})=e^{iqn'a}2ikn'a$$

$$2ikn'a\cos(kn'a)-2iP\sin(kn'a)=e^{iqn'a}2ikn'a$$

$$kn'a\cos(kn'a)+P\sin(kn'a)=e^{iqn'a}kn'a$$

$$e^{iqn'a}=\cos(kn'a)-P\frac{\sin(kn'a)}{kn'a}$$

The last equation implies, given the fact that RHS is real, that $\Im(e^{iqn'a}) = 0$, so that we can write:

$$\cos(qn'a)=\cos(kn'a)-P\frac{\sin(kn'a)}{kn'a}$$

This equation implies a band structure for our system. This because the LHS is bounded between $(-1,+1)$, so that also the RHS must be. But this implies that only selected k can be admissible for our system , and therefore, only selected $E(k)$. We show here a plot that show the RHS plotted for a specific value of $P$. We see that the RHS lies within the bounds only when evaluated on the green lines.
![[Pasted image 20230212115953.png|500]]
Now let's see briefly how to treat the bound state (i.e. E<0).
In this case we will have the solutions:

$$ \psi(x) = A'e^{kx}+B'e^{-kx} \qquad \mbox{where} \qquad k = \sqrt{\frac{2m|E|}{\hbar^2}} $$

This will not change much our derivation, leading to (thanks to the formal substitution $k \to ik$) to the constraint:

$$\cos(qn'a)=\cosh(kn'a)-P\frac{\sinh(kn'a)}{kn'a}$$

The same considerations holds for this equation, with one fundamental difference: we know from quantum theory that a delta potential can have only one bound state, so we will expect only one band below the zero energy.
The adimensional $P$ parameter determines different regimes for the electron dynamics. We will show now the band plot for small $P$ (similar to the quasi-free regime) and for high P (similar to the tight binding regime), from the center to the border of the first Brillouin zone $(\Gamma-X)$

![[Pasted image 20230212123053.png|300]]
