**If an electric charge is introduced into a metal, e.g. by the inclusion of a charged defect, then in the vicinity of this charge there is a perturbation in the otherwise homogeneous electron concentration which compensates or screens the electric field of the charge**

Let's treat this problem in the context of the [[Zettelkasten/Master's degree/Solid State Physics/Electron dynamics/Free electron model for metals (Sommerfeld model)]].

Suppose a positive charge is introduced in a solid. 

Then the neighboring electrons will surround the positive charge, leading to local change in potential per electron $\delta V$. We also assume this perturbation is small, i.e. $|e\delta V|<<E_F$.
Let's now consider the density of states of the neighboring electrons. This will shift of a quantity $e\delta  V$, because we are assuming that every neighboring gains the same energy.

![[Thomas-Fermi model for screening.png|300]]

So there will be $\delta n$ electrons above the Fermi energy level. Considering that the Fermi energy is a state function, and we are at thermal equilibrium, the system must conserve its Fermi energy, so that these $\delta n$ electrons must lose energy.
One can evaluate this number by using the following approximation:

$$ \delta n \simeq D(E_F)e\delta V  $$

Where we are approximating the $\delta n$ area with the box of width $D(E_F)$ and height $|e|\delta V$. This approximation is valid only in the context of small perturbations.
We can now evaluate $\delta V$ by using the Poisson's equation. By considering $-e\delta n = \delta \rho$:

$$ \nabla^2(\delta V) = - \frac{\delta \rho}{\varepsilon_0} \qquad \iff \qquad \nabla^2(\delta V) = - \frac{e\delta n}{\varepsilon_0} =  \frac{D(E_F)e^2}{\varepsilon_0} \delta U \equiv \frac{1}{\lambda^2_{TF}}\delta U $$

Where we defined the Thomas-Fermi length as:

$$\lambda_{TF} = \sqrt{\frac{\varepsilon_0}{D(E_F)e^2}}$$

We can do better and estimating this length by using the [[Zettelkasten/Master's degree/Solid State Physics/Electron dynamics/DOS in the Free Electron Model]] expression at the Fermi energy $D(E_F) = \frac{3}{2} \left( \frac{N}{E_F} \right)$. From here we use $\frac{1}{2}mv_F^2=E_F$, and the expression for [[Zettelkasten/Master's degree/Solid State Physics/Electron dynamics/Plasmons description using the Jellium model|plasma frequency]] $\omega_P^2=\frac{e^2n_0}{{m\varepsilon_0}}$.
We obtain:

$$\lambda_{TF} = \sqrt{\frac{\varepsilon_0}{\frac{3}{2} \left( \frac{N}{E_F} \right)e^2}} = \sqrt{\frac{2\varepsilon_0{E_F}}{3 {N} e^2}} = \sqrt{\frac{m\varepsilon_0v_F^2}{3 {N} e^2}}=\sqrt{\frac{m\varepsilon_0v_F^2}{3V n e^2}} = \frac{1}{\sqrt{3V}} \frac{v_F}{\omega_P}$$

**c'è un problema di dimensionalità, si dovrebbe ridefinire la DOS per unità di volume per sistemare il tutto**

Typical values for $\lambda_{TF}$ are $\sim 1\  \mathring{\text{A}}$
This is the range of the screening potential. We can see it by solving the Poisson equation in polar coordinates.
By assuming that $\delta V$ has spherical symmetry $\nabla ^2 \to \frac{1}{r^2}\frac{\partial}{\partial r} \left(   r^2 \frac{\partial}{\partial r} \right)$ we obtain as solution of the ODE:

$$ \delta V(r) = A \frac{e^{-r/\lambda_{TF}}}{r} $$

Notice that this potential has the form of a [[Yukawa potential]].

We can get the constant $A$ in the non-screening limit $\nabla^2(\delta V)\to 0\ \Rightarrow\  \lambda_{TF} \to \infty$. 
Supposing the defect has a positive charge $Ze$ we obtain: 

$$ \delta V(r) = k_e Ze \frac{e^{-r/\lambda_{TF}}}{r} $$

In this form is clear that the potential decays exponentially governed by the decaying length $\lambda_{TF}$ .
As in these cases we can say that in $\sim 3 \lambda_{TF}$ the function is $\sim 0$.
We now see in a plot the difference between the un-screened and screened potentials:

![[Thomas-Fermi model for screening_potentials.png|400]]
