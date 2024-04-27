
We begin by writing Maxwell's equations in a medium:

$$ 
\begin{cases}
\nabla \cdot \bar{D} = \rho_{free} \\
\nabla \cdot \bar{B} = 0 \\
\nabla \times \bar{E} + \frac{\partial \bar{B}}{\partial t} = 0 \\
\nabla \times \bar{H} = \bar{J}_{free} + \frac{1}{c_m^2}\frac{\partial \bar{D}}{\partial t}
\end{cases}
$$

We now consider this equations when there are no EM sources, i.e. $\rho_{free}=0$, $\bar{J}_{free}= \bar{0}$ , and in the hypothesis that the medium in which these equations are written is a linear dielectric and also a paramagnetic, or a diamagnetic material, i.e. we can write for the fields:

$$ \bar{D} = \varepsilon_0\varepsilon_r \bar{E} \qquad \bar{B} = \frac{1}{\mu_0 \mu_r} \bar{H}$$

If moreover we consider that the fields are oscillating, i.e. $\bar{E}=\bar{E}_0e^{-i \omega t}$, $\bar{H}=\bar{H}_0e^{-i \omega t}$, plugging all together and doing the calculation we can write:

$$ 
\begin{cases}
\nabla \cdot \varepsilon_0\varepsilon_r \bar{E}_0 =0 \\
\nabla \cdot \mu_0 \mu_r\bar{H}_0 = 0 \\
\nabla \times \bar{E}_0  = i \omega \mu_0 \mu_r \bar{H}_0 \\
\nabla \times \bar{H}_0 = -i \omega \varepsilon_0\varepsilon_r \bar{E}_0
\end{cases}$$

Is now easy to show that if one does the curl of the last 2 equations, one obtains:

$$ 
\begin{cases}
\nabla^2\bar{E}_0 + k^2 \bar{E}_0 =0 \\
\nabla^2\bar{H}_0 + k^2 \bar{H}_0 =0 \\
\end{cases}$$

Where $k^2 = \omega^2 \varepsilon_0\varepsilon_r \mu_0 \mu_r$. These are the so called Helmoltz equations for the EM field.


### Digression on how to solve the vectorial form of the Helmoltz equation

In order to solve them one must use a trick, because is known mathematically the solution for the Helmoltz equation for a scalar function, but is not immediate for a vectorial function.

Suppose we have a system of Helmotz equations of the type:

$$ 
\begin{cases}
\nabla^2\bar{M} + k^2 \bar{M} =0 \\
\nabla^2\bar{N} + k^2 \bar{N} =0 \\
\end{cases}$$

If we consider a scalar function $\Psi$ such as (where $\bar{\alpha}$ is a generic uniform (constant respect to the coordinates) vector.) :

$$ \bar{M} = \nabla \times (\bar{\alpha}\Psi) \qquad \bar{N} = \frac{1}{k} \nabla \times \bar{M} $$

First we subsitute in the first equation, and we obtain:

$$ \nabla^2\left(\nabla \times (\bar{\alpha}\Psi)\right) + k^2 \left(\nabla \times (\bar{\alpha}\Psi)\right) =0  $$

$$ \nabla \times \nabla^2(\bar{\alpha}\Psi) +\nabla \times k^2(\bar{\alpha}\Psi) =0  $$

$$\nabla \times \bar{\alpha}\left( \nabla^2\Psi + k^2\Psi \right) =0   $$

Where we exchanged order of operators and utilised the hypothesis that $\alpha$ is a uniform vector.
Now if we consider the second equation:

$$ \nabla^2\left(\frac{1}{k} \nabla \times \bar{M}\right) + k^2 \left(\frac{1}{k} \nabla \times \bar{M}\right) =0  $$

$$  \frac{1}{k}\nabla \times \nabla^2\bar{M} +\frac{1}{k}\nabla \times k^2\bar{M} =0   $$

$$\frac{1}{k} \nabla \times \left( \nabla^2\bar{M} + k^2\bar{M} \right) =0    $$

Where we used the fact that $k$ is defined such as is uniform in space.
From this reasoning on can conclude that, in order to solve the system, one has to solve:

$$ \nabla^2\Psi + k^2\Psi = 0  $$

And the construct the vectors as prescribed. This is easier because solution of the Helmoltz equation for a scalar function are known. In spherical coordinates: 

$$\Psi (r, \theta, \varphi)= \sum_{\ell=0}^\infty \sum_{m=-\ell}^\ell \left( a_{\ell m} j_\ell ( k r ) + b_{\ell m} y_\ell(kr) \right) Y^m_\ell (\theta,\varphi) $$

 Here $j_\ell ( k r )$ and $y_\ell(kr)$ are the spherical Bessel functions, and $Y^m_\ell (\theta,\varphi)$ are the spherical harmonics.

### Multipolar expansion - derivation

The following field is written using the concept of electric harmonics and magnetic harmonics.
Instead of using $\Psi$, is more useful to split it in an even and odd part:

$$\Psi_{emn} = j_n(kr)P_n^m(\cos\vartheta) \cos m \varphi \qquad \Psi_{omn} = j_n(kr)P_n^m(\cos\vartheta) \sin m \varphi$$

Then one can define the even and odd part of the electric and magnetic harmonics in the following way:

$$\bar{M}_{emn} = \nabla \times (\bar{r}\Psi_{emn}) \qquad \bar{M}_{omn} = \nabla \times (\bar{r}\Psi_{omn}) $$

$$\bar{N}_{emn} = \frac{1}{k} \nabla \times \bar{M}_{emn} \qquad \bar{N}_{omn} = \frac{1}{k} \nabla \times \bar{M}_{omn}$$

So that one can write the electric field as:

![[Pasted image 20230619105727.png|500]]

Note that we using as index $n$ instead of $l$. It is possible to prove that the coefficients in the electric field expansion follows the relations:

![[Pasted image 20230519183033.png|500]]
![[Pasted image 20230519183200.png|500]]

## Consequences of generalized Mie theory

In this section we will present the results without proof.

### Far-field analysis - cross section expressions

Of paramount importance are the expression of the cross sections in the far field, especially the extinction one, due to is use in the [[Bouguer-Lambert-Beer law]].
We report in the following the expressions found:

![[Pasted image 20230519183423.png|500]]

In the application is easier to consider an approximation by cutting the l index to a specified value.
One can prove that for $l=1$  and together $R<<\lambda$ , we obtain the dipolar approximation.
Note that we can appreciate the extend of the full Mie theory only if we are out of the dipolar approximation $R<<\lambda$. So that if we restrict ourselves in the visible range, we are able to appreciate a significant difference only for larger particles, as shown in the following:

![[Pasted image 20230703120156.png|300]]
![[Pasted image 20230703120227.png|300]]

### Rayleigh scattering

One can prove that for the condition $R<<\lambda$, but considering all the multipole expansion, one obtain the expression for the Rayleigh scattering