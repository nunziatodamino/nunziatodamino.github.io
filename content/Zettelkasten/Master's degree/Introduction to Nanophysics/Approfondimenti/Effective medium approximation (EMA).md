Suppose we have a sample in which spherical nanoclusters are dispersed.
In the treatment given in [[Zettelkasten/Master's degree/Introduction to Nanophysics/Approfondimenti/Mie theory - Dipolar approximation]] we implied that the distance between clusters is such that the dipolar interaction between them is negligible.
Of course this is not always the case, and we need a theory to describe the mutual interaction between nanoparticles upon interaction with an EM wave.

![[Pasted image 20230529102511.png|600]]

We will present here 2 approaches, one described in detail, and one just briefly stated, but either way the idea behind them is the same : we want to substitute the inhomogeneous dielectric function surrounding the cluster with an homogeneous one.

### Maxwell-Garnett Theory

- $\varepsilon_m = 1$ derivation

We start by deriving the equations for $\varepsilon_m = 1$ (vacuum case) and then with a formal substitution we will find the general formula.
Notice that this process is the same in deriving the Clausius-Mossotti equation.
Consider an assembly of spherical particles in a medium with dielectric function $\varepsilon_m$.
We now turn on an electric field $\bar{E}_0$ inside the assembly. This will lead, in the dipolar approximation, in a the formation of an electric dipole for each nanocluster.
Moreover each of this dipole generates a local electric field which can interact with the other clusters.
We call $\bar{E}_{loc}$ the total electric field , the one induced by the assembly in this way and the external one.
Let's try to evaluate the polarization contribution of this field:

$$ \bar{P} = \rho \bar{p}_{loc} = \rho\varepsilon_0\alpha\bar{E}_{loc}  $$

Where $\rho$ is the NP's concentration and $\alpha$ is the polarizability.
The presence of this polarization leads to an electric field that can be evaluated by the following:

![[Pasted image 20230529105323.png|300]]

$$ E_P = k_e \iint_{\Sigma} \frac{\sigma \cos \vartheta d\Sigma}{r^2}  k_e \iint_{\Sigma} \frac{\bar{P} \cdot \hat{n} \cos \vartheta d\Sigma}{r^2} =  k_e \iint_{\Sigma} \frac{P \cos^2 \vartheta d\Sigma}{r^2} = k_e \iint_{\Omega} {P \cos^2 \vartheta d\Omega} =  $$

$$ k_e P \int_0^{2\pi}d\varphi \int_0^{\pi}\cos^2 \vartheta \sin\vartheta d\vartheta = k_e P 2\pi \frac{2}{3} = \frac{P}{3 \varepsilon_0} $$

Where we use the 2 steradiant definitions $d\Omega = \frac{d\Sigma}{r^2}$ and $d\Omega=\sin\vartheta d\vartheta d\varphi$.
So we have a total field:

$$ \bar{E}_{loc} = \bar{E}_0 +\bar{E}_P = \bar{E}_0 +\frac{\bar{P}}{3 \varepsilon_0} $$

If we now insert this result in the first one we obtained, we can find an expression of the polarization vector which depend only on the external field:

$$ \bar{P} =\rho\varepsilon_0\alpha\bar{E}_{loc}= \rho\varepsilon_0\alpha\left(\bar{E}_0 +\frac{\bar{P}}{3 \varepsilon_0} \right) \qquad \iff \qquad \bar{P} =\frac{3\rho\varepsilon_0\alpha}{3-\rho\alpha}\bar{E}_0 $$

So in principle, is like we have an effective dielectric function, defined by $\bar{P} = \varepsilon_0\chi\bar{E}_0 = \varepsilon_0(\varepsilon_{eff}-1)\bar{E}_0$.
By equating the 2 we obtain a polarizability that depends only from this effective dielectic function:

$$ \varepsilon_0(\varepsilon_{eff}-1)\bar{E}_0 = \frac{3\rho\varepsilon_0\alpha}{3-\rho\alpha}\bar{E}_0 \qquad \iff\qquad \alpha = \frac{3(\varepsilon_{eff}-1)}{\rho(\varepsilon_{eff}+2)}  $$

The last piece is to find the value of $\varepsilon_{eff}$. In order to do this we can write the polarisability using the result derived in the [[Zettelkasten/Master's degree/Introduction to Nanophysics/Approfondimenti/Mie theory - Dipolar approximation]]:

$$ \alpha = {4 \pi R^3} \frac{\varepsilon(\omega)-\varepsilon_m}{\varepsilon(\omega) + 2 \varepsilon_m}  \qquad \Rightarrow \qquad \alpha = 3V\frac{\varepsilon-1}{\varepsilon+2} $$

Where we use the usual convention $\varepsilon_r \equiv\varepsilon$, and equate the 2 results:

$$ \frac{3(\varepsilon_{eff}-1)}{\rho(\varepsilon_{eff}+2)} = 3V\frac{\varepsilon-1}{\varepsilon+2} \qquad \iff \qquad \frac{\varepsilon_{eff}-1}{\varepsilon_{eff}+2} = f\frac{\varepsilon-1}{\varepsilon+2}$$

Where we use the concept of filling fraction $f=\rho V \in [0,1]$.

- $\varepsilon_m \neq 1$ case

Upon the formal substitution:

$$ \varepsilon_{eff} \to \frac{\varepsilon_{eff}}{\varepsilon_m} \qquad \varepsilon \to \frac{\varepsilon}{\varepsilon_m} $$

Is possible to obtain the general formula:

$$\frac{\varepsilon_{eff}-\varepsilon_m}{\varepsilon_{eff}+2\varepsilon_m} = f\frac{\varepsilon-\varepsilon_m}{\varepsilon+2\varepsilon_m}$$

Let's see an experimental results for gold NP's.
If $f\to 0$ we regain the results obtained in the dipolar approximation, because we have the our NP's are sparse inside our sample so that their distance is such that the dipolar interaction is negligible.
For higher f we a natural redshift of the resonance peak, so that we can consider the filling fraction a tunable parameter for L-SPR control.
==Moreover the magnitude of the filling fraction can establish if our system can described by the indipendent particle approximation.
As a rule of thumb, if $f<0.1$ one can still get a very good description of optical properties of the system by just using the independent particle approximation==

![[Pasted image 20230529145240.png|500]]

If $f\to 1$ Maxwell-Garnett theory does not reproduce well experimental results, and we must resort to a more sophisticated theory.

### Bruggemann theory (high $f$)

In case of samples in which $f \simeq 1$ one can obtain $\varepsilon_{eff}$ by the following convex sum:

$$f\frac{\varepsilon-\varepsilon_{eff}}{\varepsilon+2\varepsilon_{eff}}+(1-f)\frac{\varepsilon_m-\varepsilon_{eff}}{\varepsilon_m+2\varepsilon_{eff}}=0$$
