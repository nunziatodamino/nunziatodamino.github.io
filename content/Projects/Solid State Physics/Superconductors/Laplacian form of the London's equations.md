First we recall the [[Projects/Solid State Physics/Superconductors/Old phenomenological theory - The London's equations|London's equations]]:

$$ 
\begin{cases}
\bar{E} = \lambda_L \frac{d \bar{j}_s }{dt} \\
\bar{B} = - \lambda_L \left(\nabla \times \bar{j}_s \right) \\
\nabla \times \bar{B} = \mu_0\bar{j}_s
\end{cases}
$$

We want to rewrite them in a Laplacian form before to show that they correctly predict the Meissner effect.

First we take an intermediate result: by taking the divergence of the last equation one obtains that $\nabla \cdot \bar{j}_s = 0$.

- Now we start by taking the curl of the second equation:

$$ 
\begin{aligned}
\nabla \times\bar{B} &= - \lambda_L \nabla \times\left(\nabla \times \bar{j}_s \right) \\
\mu_0 \bar{j}_s &= - \lambda_L \left(\nabla(\nabla \cdot \bar{j}_s) - \nabla^2 \bar{j}_s  \right) \\
\mu_0 \bar{j}_s &=  \lambda_L  \nabla^2 \bar{j}_s  
\end{aligned}
$$

Where we used the result proved before. If we now define

$$ \Lambda^2_L = \frac{\lambda_L}{\mu_0} = \frac{m}{\mu_0n_se^2} $$

We can write our equation as:

$$\nabla^2 \bar{j}_s  = \frac{1}{\Lambda^2_L}\bar{j}_s$$

Which is a simple eigenvalue equation.

- The other can be obtained by taking the curl of the third equation:

$$ 
\begin{aligned}
\nabla \times\left(\nabla \times \bar{B}\right) &= \mu_0\nabla \times\bar{j}_s \\
\nabla(\nabla \cdot\bar{B}) - \nabla ^2 \bar{B} &= -\frac{\mu_0}{\lambda_L}\bar{B} \\
 \nabla ^2 \bar{B} &= \frac{\mu_0}{\lambda_L}\bar{B} \\
\end{aligned}
$$

Where we used the non-existence of magnetic mono-poles condition.
Then we can write:

$$\nabla^2 \bar{B}  = \frac{1}{\Lambda^2_L}\bar{B}$$

Again, an eigenvalue equation.

We put together the 2 results:

>[!info] **Laplacian form of the London's equations**
>$$\begin{cases}
>\nabla^2 \bar{j}_s  = \frac{1}{\Lambda^2_L}\bar{j}_s \\
>\nabla^2 \bar{B}  = \frac{1}{\Lambda^2_L}\bar{B}
>\end{cases}$$

