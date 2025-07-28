**NOTE** This note is a slight generalization of the [[Zettelkasten/Master's degree/Models of Theoretical Physics/Statistical mechanics/Curie-Weiss model solution with h=0|Curie-Weiss model solution with h=0]].

Here we study the [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/The Ising Model/The spin-1 Ising model|The spin-1 Ising model]], considering that the interaction is between all spins rather than the nearest neighbors. Than clearly the Hamiltonian of the system is:

$$ -\mathscr{H} = \frac{J_0}{2}\sum_{i,j} s_is_j + H \sum_i  s_i$$

Note that this presents a problem as is: the interaction term is $\mathcal{O}(N^2)$, where $N$ is the number of spins. This implies that the thermodynamic limit is ill-defined, as energy per spin diverges in the limit.
This implies that $J_0$ must be redefined, as the thermodynamic limit must exists. The only possible redefinition is $J_0=J/N$. This implies that the energy is this time $\mathcal{O}(N)$, and this time in the thermodynamic limit the **energy per spin exists finite**.
This reasoning in this context is called **Kac's prescription**.

In the end the right Hamiltonian to consider is :

$$ -\mathscr{H} = \frac{J}{2N}\sum_{i,j} s_is_j + H \sum_i  s_i$$

This leads to the canonical partition function:

$$ \mathcal{Z}(J,H,\beta) = \text{Tr}\ e^{-\beta\mathscr{H}} = \sum_{\{s\}} e^{\frac{J\beta}{2N}\sum_{i,j} s_is_j + \beta H \sum_i  s_i}  $$

Note that, given that there are no restriction on the double sum $\sum_{i,j} s_is_j = \sum_i s_i \sum_j s_j = \left(\sum_i s_i\right)^2$ , one has in the end:

$$ \mathcal{Z}(J,H,\beta) = \text{Tr}\ e^{-\beta\mathscr{H}} = \sum_{\{s\}} e^{\frac{K}{2N}\left(\sum_i s_i\right)^2 + H \sum_i  s_i}  $$

Where we set $K=J\beta$ and $h = \beta H$.
In order to treat this partition function we can use the [[Zettelkasten/Master's degree/Models of Theoretical Physics/Mathematical methods/Gaussian integrals|Hubbard-Stratonovich transformation]] for the quadratic term. 

*A note on the transformation. If one applies the transformation mathematically, i.e. $a = N/K$ and $b = x = \sum_i s_i$ one obtains a results that is equivalent mathematically but cannot be recasted easily in a "mean-field" form.*
*One as instead to use the equivalent  $a = NK$ and $b = Kx$ . In this way both terms are proportional to the field strength and we obtain the mean-field form.*

By applying the transformation:

$$\mathcal{Z}(h,K) = \text{Tr} \sqrt{\frac{NK}{2 \pi}} \int dy\ e^{-\frac{NK}{2}y^2 +Kxy+hx} $$

Note now that only the trace acts only on the terms containing $x$, so :

$$\mathcal{Z}(h,K) =\sqrt{\frac{NK}{2 \pi}} \int dy\ e^{-\frac{NK}{2}y^2}\left[\text{Tr}\ e^{+Kxy+hx}\right] $$

Now we evaluate the term in the square bracket:

$$\begin{aligned} 
\text{Tr}\ e^{Kxy+hx} 
&= \sum_{s_1=\pm1}\dots\sum_{s_N=\pm1}  e^{(Ky+h)\sum_is_i} =\sum_{s_1=\pm1}\dots\sum_{s_N=\pm1}\prod_{i=1}^n  e^{(Ky+h)s_i} = \\ 
&= \sum_{s_1=\pm1}e^{(Ky+h)s_i}\dots\sum_{s_N=\pm1}  e^{(Ky+h)s_N} =  [2\cosh(Ky+h)]^N
\end{aligned}$$

Note that in the trace only the sum over the i-th spin survives.
In the end one obtains

$$\mathcal{Z}(h,K) = \sqrt{\frac{NK}{2 \pi}} \int dy\ e^{-\frac{NK}{2}y^2}[2\cosh(Ky+h)]^N $$

We now recast the integrand in the following form:

$$\begin{aligned}
\mathcal{Z}(h,K) &= \sqrt{\frac{NK}{2 \pi}} \int_{\mathbb{R}} dy\ e^{-\frac{NK}{2}y^2}e^{\ln [2\cosh(Ky+h)]^N}\\ 
&= \sqrt{\frac{NK}{2 \pi}} \int_{\mathbb{R}} dy\ e^{N[-\frac{K}{2}y^2+\ln(2\cosh(Ky+h))]} \equiv \sqrt{\frac{NK}{2 \pi}} \int_{\mathbb{R}} dy\ e^{N\mathscr{L}(K,h,y)}
\end{aligned}$$

Now the integral in the thermodynamic limit can be solved by [[Zettelkasten/Master's degree/Models of Theoretical Physics/Mathematical methods/The Laplace method|The Laplace method]]. In general one can state that in the thermodynamic limit

$$
\mathcal{Z}(h,K) \sim e^{N\mathscr{L}(K,h,y^*)}
$$

Where $y^*$ is the point in which the function $\mathscr{L}$ attain its maximum over $\mathbb{R}$. If one studies the function $\mathscr{L}(K,h,y)$ over $\mathbb{R}$, one can show that the maximum satisfies the self-consistent equation:

$$y^* = \tanh(Ky^*+h)$$

That is solved usually via graphical methods.

Note that, once we have found this point, the bulk free energy follows swiftly:

$$ f_b = -\frac{1}{\beta N}\ln\mathcal{Z} \sim -k_BT \mathscr{L}(K,h,y^*) $$
 