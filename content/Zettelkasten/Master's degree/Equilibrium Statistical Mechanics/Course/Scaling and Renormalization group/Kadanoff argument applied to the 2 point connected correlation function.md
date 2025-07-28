Finally we can conclude the [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Scaling and Renormalization group/Kadanoff argument|Kadanoff argument]] by evaluating the 2 point connected correlation function in the coarse grain system:

$$ G_C(I,J) = \braket{S_IS_J} -\braket{S_I}\braket{S_J} $$

We want to connect this to the microscopic one:

$$ G_C(i,j) = \braket{s_is_j} -\braket{s_i}\braket{s_j} $$

The idea is quite simple. First we consider the superspin definition:

$$ S_I = \frac{1}{\braket{m_C}}\frac{1}{l^d} \sum_{i\in I}s_i$$

Then we recall that we saw that for the magnetic field we have one scaling relation $h_l = h\braket{m_C}l^d$ and the assumption $h_l = hl^{y_h}$. Putting these together we find that $\braket{m_C}=l^{y_h-d}$, so replugging this in the superspin definition:

$$ S_I = \frac{1}{l^{y_h}} \sum_{i\in I}s_i$$

Now if we consider the 2 point connected correlation function:

$$
\begin{aligned}
G_C(I,J) &= \braket{S_IS_J} -\braket{S_I}\braket{S_J} = \braket{\frac{1}{l^{y_h}} \sum_{i\in I}s_i\frac{1}{l^{y_h}} \sum_{j\in J}s_j} -\braket{\frac{1}{l^{y_h}} \sum_{i\in I}s_i}\braket{\frac{1}{l^{y_h}} \sum_{j\in J}s_j} = \\
&=\frac{1}{l^{2y_h}}\sum_{i\in I}\sum_{j\in J}\braket{s_is_j} -\braket{s_i}\braket{s_j} 
\end{aligned}
$$

Now we consider that the quantity inside the sums (that is the 2-point microscopic correlation function) is approximatively constant, as inside the block the spins are uncorrelated by construction. So, considering that there are $l^d$ blocks:

$$
\begin{aligned}
G_C(I,J) 
&=\frac{l^{2d}}{l^{2y_h}}\braket{s_is_j} -\braket{s_i}\braket{s_j} = l^{2(d-y_h)}G_c(i,j) 
\end{aligned}
$$

Now before continuing we consider the proper functional dependence of the $G_C$. Instead of the index notation $i,j$ we can consider the position notation $\bar{r}_{ij} = \bar{r_i}-\bar{r}_j$. In this way we can write:

$$
\begin{aligned}
G_C\left(\bar{r}_{IJ}, t_l, h_l \right)=G_C\left(\frac{\bar{r}_{ij}}{l}, tl^{y_t}, hl^{y_h} \right)= l^{2(d-y_h)}G_c(\bar{r}_{ij}, t, h) 
\end{aligned}
$$

Or equivalently:

$$
\begin{aligned}
G_c(\bar{r}_{ij}, t, h) =l^{2(y_h-d)}  G_C\left(\frac{\bar{r}_{ij}}{l}, tl^{y_t}, hl^{y_h} \right)
\end{aligned}
$$

Now we can choose a special scaling to extract the $t$ dependence on the coarse-grained correlation function : $l = |t|^{-1/y_t}$. In this way:

$$
\begin{aligned}
G_c(\bar{r}_{ij}, t, h) =|t|^{\frac{2(d-y_h)}{y_t}}  G_C\left(\frac{\bar{r}_{ij}}{|t|^{-1/y_t}}, \text{sgn}(t), \frac{h}{|t|^{\Delta}} \right)
\end{aligned}
$$

Now there is a tricky passage. We set $\frac{\bar{r}_{ij}}{|t|^{-1/y_t}} =1$ or equivalently $\frac{\bar{r}_{ij}}{l} =1 \iff \bar{r}_{ij} = l$. This means that for each position we are scaling the system in such a way that in the coarse grain system the position between spins is the value $l = |t|^{-1/y_t}$. So we are not performing just one coarse grain, but a continuous flow of coarse grains that changes with the distance. Is like we are performing a continuous zoom on the microscopic system to maintain fixed the distance in the coarse grain to $l$.

Notice that, given $\frac{\xi}{l} = \xi_l$, than $\xi = \xi_l l =\xi_l|t|^{-1/y_t} \sim |t|^{-\nu}$, so that we can say that $\nu = 1/y_t$.

Another thing that we can imply from this continuous rescaling is that $|\bar{r}_{ij}| = |t|^{1/y_t} \iff |t| =|\bar{r}_{ij}|^{-y_t}$.

We have then:

$$
\begin{aligned}
G_c(\bar{r}_{ij}, t, h) =|\bar{r}_{ij}|^{2(y_h-d)}  G_C\left(1, \text{sgn}(t), \frac{h}{|t|^{\Delta}} \right)
\end{aligned}
$$

For both branches $t>0$ and $t<0$ we have the same exponent.
Then if we confront this with the critical exponent definition of the correlation function:

$$ G_C \sim|r|^{2-\eta-d} $$

We obtain:

$$ 2-\eta-d = 2(y_h-d)$$




$$ $$


