Suppose to extend in the continuum limit the considerations made upon the discrete master equation in [[Zettelkasten/Master's degree/Models of Theoretical Physics/Probability and Stochastic processes/Diffusion process in 1D - microscopic description]]. We begin by recalling it:

$$ w_{i}(t_{n}) = \sum_j W(jl,n\Delta t|il,0)\ w_{j}(0) $$

We extend this formula in the continuum limit as the following:

$$ W(x,t) = \int dx_0\ \tilde{W}(x,t|x_0,t_0)W(x_0,t_0) $$

Let's what happens when this equation is put in the diffusion equation:

$$ \partial_tW(x,t)-D\partial_x^2W(x,t)=0 $$

$$ \partial_t \left(\int dx_0\ \tilde{W}(x,t|x_0,t_0)W(x_0,t_0)\right) - \partial_x^2D \left(\int dx_0\ \tilde{W}(x,t|x_0,t_0)W(x_0,t_0)\right) =0 $$

$$  \partial_t\tilde{W}(x,t|x_0,t_0)-D\partial_x^2\tilde{W}(x,t|x_0,t_0)=0  $$

Because $W(x_0,t_0)$ is an arbitrary function that doesn't depent on $x$ and $t$.
We then conclude, as we saw in [[Zettelkasten/Master's degree/Models of Theoretical Physics/Probability and Stochastic processes/Diffusion process in 1D - PDE resolution]], that:

$$\tilde{W}(x,t|x_0,t_0)=\frac{1}{\sqrt{2\pi}}\int_{\mathbb{R}}dk\ e^{ikx}c(k,t_0)e^{-Dk^2(t-t_0)}$$

Where:

$$c(k,t_0)=\frac{1}{\sqrt{2\pi}}\int_{\mathbb{R}}dx\ e^{-ikx}W(x_0,t_0)$$

So that in the end :

>[!info] **Diffusion equation propagator**
>$$\tilde{W}(x,t|x_0,t_0)=\frac{1}{2\pi}\int_{\mathbb{R}}dk\ e^{ikx}\left( \int_{\mathbb{R}}dx\ e^{-ikx}W(x,t_0) \right)e^{-Dk^2(t-t_0)}$$


Is easy to show that, in the specific case in which $W(x,t_0)=\delta(x-x_0)$ we obtain:

$$ \tilde{W}(x,t|x_0,t_0) = \frac{1}{\sqrt{4\pi D(t-t_0)}}e^{-\frac{(x-x_0)^2}{4D(t-t_0)}} $$

Finally, note that, in this case:

$$ W(x,t) = \int dx_0\ \tilde{W}(x,t|x_0,t_0)W(x_0,t_0) = \int dx_0\ \frac{1}{\sqrt{4\pi D(t-t_0)}}e^{-\frac{(x-x_0)^2}{4D(t-t_0)}}W(x_0,t_0) $$

We set $x-x_0 = -y$, so that:

$$=\int dy\ \frac{1}{\sqrt{4\pi D(t-t_0)}}e^{-\frac{y^2}{4D(t-t_0)}}W(y+x,t_0)=-\int dy\ \frac{1}{\sqrt{4\pi D(t-t_0)}}e^{-\frac{y^2}{4D(t-t_0)}}\delta(x+y-x_0)=$$

$$ = \int dy\ \frac{1}{\sqrt{4\pi D(t-t_0)}}e^{-\frac{y^2}{4D(t-t_0)}}\delta(y-(x_0-x))= \frac{1}{\sqrt{4\pi D(t-t_0)}}e^{-\frac{(x_0-x)^2}{4D(t-t_0)}}= \frac{1}{\sqrt{4\pi D(t-t_0)}}e^{-\frac{(x-x_0)^2}{4D(t-t_0)}} $$

So that we can state that, for  $W(x,t_0)=\delta(x-x_0)$ :

$$  W(x,t)= \tilde{W}(x,t|x_0,t_0)$$