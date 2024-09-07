This is an extension of the [[Zettelkasten/Master's degree/Introduction to Nanophysics/Approfondimenti/Mie theory - Dipolar approximation]], in which we consider the nanocluster to be spherical, but not uniform in composition.

![[Pasted image 20230527162546.png|400]]

We consider the following: a nanocluster composed by an internal core of radius $R$ and dielectric function $\varepsilon_C$ covered by a shell of thickness $d$ and dielectric function $\varepsilon_S$.
This nanocluster is embedded in a non absorbing medium with dielectric function $\varepsilon_m$.

We obtain in this situation the following expression for $\sigma_{ext}$:

$$ \sigma_{ext} = 4\pi \frac{\omega}{c}\varepsilon_m^{1/2}\Im(\alpha) $$

Where for the polarizability $\alpha$ we consider the expression:

$$ \alpha = 4\pi(R+d)^3\frac{(\varepsilon_S-\varepsilon_m)(\varepsilon_C+2\varepsilon_m) + \left(\frac{R}{R+d}\right)^3(\varepsilon_C-\varepsilon_S)(\varepsilon_m+2\varepsilon_S)}{(\varepsilon_S+2\varepsilon_m)(\varepsilon_C+2\varepsilon_S) + \left(\frac{R}{R+d}\right)^3(\varepsilon_C-\varepsilon_S)(2\varepsilon_S-\varepsilon_m)} $$

We obtain the dipolar approximation expression (single core) for $R' = R+d$ and $\varepsilon_S=\varepsilon_C$.

## Cloaking effect

We notice that, in principle, if we have $\alpha=0$ we obtain $\sigma_{ext} =0$, or in other words the nanocluster is invisible. 
We now study if this condition is possible or not.
By imposing $\alpha=0$ we obtain:

$$(\varepsilon_S-\varepsilon_m)(\varepsilon_C+2\varepsilon_m) + \left(\frac{R}{R+d}\right)^3(\varepsilon_C-\varepsilon_S)(\varepsilon_m+2\varepsilon_S) = 0$$

$$ \left(\frac{R}{R+d}\right)^3(\varepsilon_C-\varepsilon_S)(\varepsilon_m+2\varepsilon_S) = (\varepsilon_m-\varepsilon_S)(\varepsilon_C+2\varepsilon_m)$$

$$ \left(\frac{R}{R+d}\right)^3 \frac{(\varepsilon_C-\varepsilon_S)}{(\varepsilon_C+2\varepsilon_m)}

 = \frac{(\varepsilon_m-\varepsilon_S)}{(\varepsilon_m+2\varepsilon_S)}$$

This equation can be solved only graphically. We try to solve it for a gold core and a generic shell:
This plot is for a particular value of the f (filling fraction of the core).

![[Pasted image 20230527165244.png|500]]

Unfortunately, at optical frequencies this is not easily obtainable.
The problem is that the $\varepsilon_2$ of the shell (green) should be a negative value, which is not normally the case for standard materials because $\varepsilon_2$ is related to extinction coefficent, as seen in [[Zettelkasten/Master's degree/Introduction to Nanophysics/Approfondimenti/Bouguer-Lambert-Beer law]] so that a negative $\varepsilon_2$ implies a gain in energy when a medium is traversed. 
