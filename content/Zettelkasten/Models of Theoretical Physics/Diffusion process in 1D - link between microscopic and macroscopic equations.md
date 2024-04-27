We start by considering the most general form of discrete master equation:

$$w_{i}(t_{n+1}) = P_{-}w_{i+1}(t_{n}) + P_{+}w_{i-1}(t_{n})$$

In order to consider the continuum limit of this equation we must change from the PMF to the PDF by using :
$w_i(t_n) = {2l}W(x,t)$ as seen [[Passage from diffusion PMF to diffusion PDF|here]], so that we obtain:

$${2l}W(x,t+\Delta t) = 2P_{-}{l}W(x-l,t) + 2P_{+}{l}W(x+l,t)$$

$$W(x,t+\Delta t) = P_{-}W(x-l,t) + P_{+}W(x+l,t)$$

Now we expand in Taylor series in [[A different way to see the Taylor series|this]] way, given that we consider in the continuum limit $\Delta t \to 0$ and $l\to 0$:

$$ W(x,t+\Delta t) = W(x,t)+\partial_t W(x,t)\Delta t + \mathcal{O}(\Delta t^2) $$

$$ W(x-l,t)=W(x,t)-\partial_x W(x,t)l+ \frac{1}{2} \partial^2_x W(x,t)l^2 + \mathcal{O}(l^3) $$

$$ W(x+l,t)=W(x,t)+\partial_x W(x,t)l+ \frac{1}{2} \partial^2_x W(x,t)l^2 + \mathcal{O}(l^3) $$

Finally, we put all together, and we find that:

$$ W(x,t)+\partial_t W(x,t)\Delta t+ + \mathcal{O}(\Delta t^2) =$$

$$ =P_{-}\left( W(x,t)-\partial_x W(x,t)l+ \frac{1}{2} \partial^2_x W(x,t)l^2 + \mathcal{O}(l^3) \right) + P_{+}\left(W(x,t)+\partial_x W(x,t)l+ \frac{1}{2} \partial^2_x W(x,t)l^2 + \mathcal{O}(l^3)\right) $$

Now we use the fact that $P_++P_-=1$ to cancel the $W(x,t)$ term and to make a unique term in the RHS form the second order position derivative. We obtain in the end:

$$ \partial_t W(x,t)\Delta t + \mathcal{O}(\Delta t^2) =(P_+ -P_-)\partial_x W(x,t)l + \frac{1}{2} \partial^2_x W(x,t)l^2 + \mathcal{O}(l^3) $$

By dividing all by $\Delta t$ we obtain:

$$ \partial_t W(x,t) + \mathcal{O}(\Delta t) =(P_+ -P_-)\partial_x W(x,t)\frac{l}{\Delta t} + \frac{1}{2} \partial^2_x W(x,t)\frac{l^2}{\Delta t} + \mathcal{O}(\frac{l^3}{\Delta t}) $$

$$ \partial_t W(x,t) + \mathcal{O}(\Delta t) =2\frac{(P_+ -P_-)}{l}\frac{l^2}{2\Delta t}\partial_x W(x,t) + \frac{l^2}{2\Delta t}\partial^2_x W(x,t) + \mathcal{O}(\frac{l^3}{\Delta t}) $$

Where we also manipulated the expression in order to let appear the factor $\frac{l^2}{2\Delta t}$.
Now we make an important consideration. In order to have proper convergence not only $\frac{l^2}{2\Delta t}\to 2D$, but also we must impose some condition over $\frac{(P_+ -P_-)}{l}$.
This convergence implies naturally that the probabilities will depend on the scale of the process. Specifically we see that, dimensionally:

$$ \left[2\frac{(P_+ -P_-)}{l}\frac{l^2}{2\Delta t}\right] = \frac{m}{s} $$

So we can define this term in the limit as a velocity:

$$2\frac{(P_+ -P_-)}{l}\frac{l^2}{2\Delta t} \to v \qquad \text{for }\Delta t\to 0\ \text{and }l\to 0$$

We call this term drift velocity. Moreover one can reverse this to express the probabilities in term of the drift velocity and the scale $l$:

$$ P_{\pm}=\frac{1}{2}\left(1\pm\frac{lv}{2D}\right)+\mathcal{O}(l^2) $$

Leading to the observation that the symmetric random walk has zero drift velocity.
Note also that in the specified limit the $\mathcal{O}$ terms tends to zero, so that one can write in the continuum limit:


>[!iinfo] **Non-symmetric diffusion equation**
>$$ \partial_t W(x,t) =v\partial_x W(x,t) + D\partial^2_x W(x,t)  $$

For a symmetric random walk $(v=0)$ we obtain:

$$ \partial_t W(x,t) = D\partial^2_x W(x,t)  $$

That is the diffusion equation seen in [[Diffusion process in 1D - macroscopic description]], for which solution we refer to [[Diffusion process in 1D - PDE resolution]].

If one wants instead solve the non-symmetric problem, the solution can be found in [[Diffusion process in 1D - non-symmetric diffusion equation resolution]]

