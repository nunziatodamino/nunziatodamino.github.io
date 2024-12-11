We now solve the equation obtained in [[Zettelkasten/Master's degree/Models of Theoretical Physics/Probability and Stochastic processes/Diffusion process in 1D - macroscopic description]] in a particular case.
We begin by the general statement:

>[!info] **The diffusion equation**
>$$ \frac{\partial \rho_n(\bar{r},t)}{\partial t}-\bar{\nabla}\cdot \left( D(\bar{r}) \bar{\nabla}\rho_n(\bar{r},t) \right)  = 0$$

Note that, in order to simplify the earlier considerations, one considers the diffusion coefficient constant, so that the equation reduces to:

$$ \frac{\partial \rho_n(\bar{r},t)}{\partial t}-D\nabla^2\rho_n(\bar{r},t)   = 0$$

Note that this equation is fundamentally identical to [[The heat equation]] from a mathematical point of view.

### 1-D resolution

In one dimensions the equation becomes:

$$ \frac{\partial \rho_n(x,t)}{\partial t}-D\frac{\partial^2 \rho_n(x,t)}{\partial x^2}   = 0$$

In order to be solved it must be equipped of the proper boundary and initial condition, given that is a problem in space and time. The simplest b.c are the Dirichlet boundary condition:

$$ \lim_{x\to\infty} \rho_n(x,t) = 0 $$

While for the initial condition we consider that all starts from a point $x_0$, i.e.

$$ \rho_n(x,t_0) = \delta(x-x_0) $$

In order to solve the PDE we have to do a Fourier expansion and it can be useful to use the Dirac notation in order to make the calculation simpler.

==NOTE : if one tries : $\braket{x|k} = \frac{1}{2\pi}e^{ikx}$ it doesn't work !==

By setting $\braket{x|k} = \frac{1}{\sqrt{2\pi}}e^{ikx}$ and $\braket{x|\rho_n(t)}=\rho_n(x,t)$ we can expand the $\ket{\rho_n(t)}$ in the $\ket{k}$ basis by using the completeness relationship of the $\ket{k}$ basis:

$$\rho_n(x,t)=\braket{x|\rho_n(t)}=\braket{x|\mathbb{1}|\rho_n(t)}=\int_{\mathbb{R}}dk\braket{x|k}\braket{k|\rho_n(t)}=\int_{\mathbb{R}}dk\braket{x|k}\braket{k|\mathbb{1}|\rho_n(t)}=$$

$$ = \int_{\mathbb{R}}dk\braket{x|k}\int_{\mathbb{R}}dx\braket{k|x}\braket{x|\rho_n(t)}=\frac{1}{\sqrt{2\pi}}\int_{\mathbb{R}}dk\ e^{ikx}\left (\frac{1}{\sqrt{2\pi}}\int_{\mathbb{R}}dx\ e^{-ikx}\rho_n(x,t)\right)=\frac{1}{\sqrt{2\pi}}\int_{\mathbb{R}}dk\ e^{ikx}c(k,t)$$

Where we define the Fourier coefficients : $c(k,t)=\frac{1}{\sqrt{2\pi}}\int_{\mathbb{R}}dx\ e^{-ikx}\rho_n(x,t)$

Now we plug our $\rho_n(x,t)$ expansion in the diffusion equation:

$$ \frac{\partial}{\partial t}\left[\frac{1}{\sqrt{2\pi}}\int_{\mathbb{R}}dk\ e^{ikx}c(k,t)\right]-D\frac{\partial^2 }{\partial x^2}\left[\frac{1}{\sqrt{2\pi}}\int_{\mathbb{R}}dk\ e^{ikx}c(k,t)\right]   = 0$$

$$ \frac{1}{\sqrt{2\pi}}\int_{\mathbb{R}}dk\ e^{ikx} \left( \partial_t c(k,t) +Dk^2c(k,t) \right)=0$$

$$ \partial_t c(k,t) +Dk^2c(k,t) =0$$

Which is a simple first order equation in time, with solution:

$$ c(k,t) = c(k,t_0)e^{-Dk^2(t-t_0)} $$

Finally, we need only to find $c(k,t_0)$ by its definition. In our case:

$$c(k,t_0)=\frac{1}{\sqrt{2\pi}}\int_{\mathbb{R}}dx\ e^{-ikx}\rho_n(x,t_0)=\frac{1}{\sqrt{2\pi}}\int_{\mathbb{R}}dx\ e^{-ikx}\delta(x-x_0) = \frac{1}{\sqrt{2\pi}} e^{-ikx_0}$$

Finally, we put all together:

$$\rho_n(x,t)=\frac{1}{\sqrt{2\pi}}\int_{\mathbb{R}}dk\ e^{ikx}c(k,t)=\frac{1}{\sqrt{2\pi}}\int_{\mathbb{R}}dk\ e^{ikx}c(k,t_0)e^{-Dk^2(t-t_0)}=\frac{1}{2\pi}\int_{\mathbb{R}}dk\ e^{ikx}e^{-ikx_0}e^{-Dk^2(t-t_0)}=$$

$$=\frac{1}{2\pi}\int_{\mathbb{R}}dk\ e^{ik(x-x_0)-Dk^2(t-t_0)}= \frac{1}{\sqrt{4\pi D(t-t_0)}}e^{-\frac{(x-x_0)^2}{4D(t-t_0)}}$$

Where we used the [[Zettelkasten/Master's degree/Models of Theoretical Physics/Mathematical methods/Gaussian integrals|translated Gaussian integral]].
