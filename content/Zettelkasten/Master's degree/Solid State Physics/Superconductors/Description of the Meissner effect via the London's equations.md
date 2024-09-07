
![[Immagini/Description of the Meissner effect via the London's equations.png|300]]

Suppose to have a semi-infinite superconductor as in figure, and an homogeneous (constant magnitude and direction over the entire region of interest) magnetic field $\bar{B}=(0,B_{0y},0)$ in the vacuum part ($x<0$) and we don't know how this field behaves inside the material.

Let's begin by studying the general characteristics of $\bar{B}$ inside the material.
Due to the continuity condition of Maxwell's equations, given 2 mediums $B_{\perp,1}=B_{\perp,2}$.
This permits us to conclude that, at the boundary $x=0$ we have $\bar{B}=(B_x(0)=0,B_y(0)=B_{0y},B_z(0)=0)$ where all the component are considered function of only $x$ due to the problem symmetry (we can take any $y$ at the boundary position an obtain the same result). 
Note the following: one now has to take in principle the magnetic field in the material as $\bar{B}=(B_x(x),B_y(x),0)$ (because the superconductor material is 2d).
But using the Maxwell's equation $\nabla \cdot \bar{B}=0$ inside the material we obtain the following constraint:

$$ \frac{\partial B_x}{\partial x} + \frac{\partial B_y}{\partial y}=0 \iff \frac{\partial B_x}{\partial x}=0$$

But given the initial condition on the boundary we can conclude that  $B_x(x)=0$ everywhere inside the material, so that one has in the end  $\bar{B}=(0,B_y(x),0)$.

First we study the form of $\bar{j}_s$ inside the material $(x>0)$ by applying the Maxwell's equation $\nabla \times \bar{B} = \mu_0\bar{j}_s$. We have:

$$\bar{j}_s = \frac{1}{\mu_0} \nabla \times \bar{B} = 
\frac{1}{\mu_0} 
\begin{Vmatrix} 
\hat{i} & \hat{j} & \hat{k}  \\
\partial_x & \partial_y & \partial_z \\
0 & B_y & 0
\end{Vmatrix} = -\frac{1}{\mu_0}(\partial_zB_y\hat{i}-\partial_xB_y\hat{k}) = \frac{1}{\mu_0}\partial_xB_y\hat{k}   $$

Given that $\partial_zB_y=0$, we can write: $\bar{j}_s=\left( 0,0,  \frac{1}{\mu_0}\partial_xB_y \right) \equiv \left( 0,0, j_{sz} \right)$.
Note that there is no material along the z-direction. We are imagining in this instance a vector normal to the superconductor plate.

Now if we apply the [[Zettelkasten/Master's degree/Solid State Physics/Superconductors/Laplacian form of the London's equations|Laplacian form of the London's equations]] to this problem, we obtain:


$$\begin{cases}
\nabla^2 \bar{j}_s  = \frac{1}{\Lambda^2_L}\bar{j}_s \\
\nabla^2 \bar{B}  = \frac{1}{\Lambda^2_L}\bar{B}
\end{cases}
\iff
\begin{cases}
\left( 0,0, \nabla^2j_{sz} \right)  = \frac{1}{\Lambda^2_L}\left( 0,0, j_{sz} \right) \\
(0,\nabla^2B_y,0)  = \frac{1}{\Lambda^2_L}(0,B_y,0)
\end{cases}
$$

Let' analyze the equation for the magnetic field, the one for the current density is the same in nature.
We have:

$$ \frac{\partial^2 B_y}{\partial x^2} + \frac{\partial^2 B_y}{\partial y^2}+ \frac{\partial^2 B_y}{\partial z^2}  = \frac{1}{\Lambda^2_L}B_y \iff \frac{\partial^2 B_y}{\partial x^2}   = \frac{1}{\Lambda^2_L}B_y $$

Given that we showed in the beginning that $B_y$ is a function of $x$.
Finally this can be converted in to an ODE (given that $B_y$ is a function of only $x$) that can be solved easily.
We obtain:

$$\bar{B}= B_y(x)\hat{i} \qquad B_y(x) = Ae^{-x/\Lambda_L} + Be^{x/\Lambda_L} \qquad B_y(0)=B_{0y} $$

Moreover there is the additional constraint $\lim_{x \to +\infty} B_y(x) = 0$, because we must have a vanishing magnetic field due to Meissner effect.
We obtain in the end the solution:

$$\bar{B}= B_y(x)\hat{i} \qquad B_y(x) = B_{0y}e^{-x/\Lambda_L} $$

And with the same ansatz, we find for the current density:

$$\bar{j}_s= j_{sz}(x)\hat{k} \qquad j_{sz}(x) = j_{0z}e^{-x/\Lambda_L} \qquad j_{0z}=\lim_{x \to 0^+}\frac{1}{\mu_0}\partial_xB_y(x) $$

This calculations explain why we called $\Lambda_L$ penetration length.