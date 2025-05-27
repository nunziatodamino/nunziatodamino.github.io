### Verlet Algorithm

We expand the position using a Taylor series stopping at the fourth order.
Using the forward-Euler and the backward-Euler expansion together

$$
\begin{aligned}
\bar{r}(t+\Delta t) &= \bar{r}(t)+ \bar{v}(t)\Delta t +\frac{1}{2}\bar{a}(t)\Delta t^2+ \frac{1}{3!}\bar{a}'(t)\Delta t^3 + \mathcal{O}(\Delta t^4) \\
\bar{r}(t-\Delta t) &= \bar{r}(t)- \bar{v}(t)\Delta t +\frac{1}{2}\bar{a}(t)\Delta t^2 - \frac{1}{3!}\bar{a}'(t)\Delta t^3 + \mathcal{O}(\Delta t^4) \\
\end{aligned}
$$

Adding these 2 together we obtain:

$$\bar{r}(t+\Delta t) = 2\bar{r}(t)- \bar{r}(t-\Delta t) +\bar{a}(t)\Delta t^2 + \mathcal{O}(\Delta t^4)$$

One can note that this equation satisfies time reversibility an is simplectic.
Note that with this algorithm we are able to evaluate velocities only if we know the trajectory at a successive timestep. In fact subtracting the second equation from the first:

$$ \bar{v}(t)= \frac{1}{2 \Delta t}\left[ \bar{r}(t+\Delta t)-\bar{r}(t-\Delta t) \right]+\mathcal{O}(\Delta t^2) $$

Note that we have in the position update we have a problem in the initialization.
We can use Verlet from step 2 onwards, to go from step 0 to 1 we have to use another lower tier algorithm, such as the [[Zettelkasten/Master's degree/Numerical methods for soft matter/Molecular dynamics/Forward Euler algorithm|Forward Euler algorithm]].

### Velocity Verlet

We rewrite the forward and backward Euler :

$$
\begin{aligned}
\bar{r}(t+\Delta t) &= \bar{r}(t)+ \bar{v}(t)\Delta t +\frac{1}{2}\bar{a}(t)\Delta t^2+ \frac{1}{3!}\bar{a}'(t)\Delta t^3 + \mathcal{O}(\Delta t^4) \\
\bar{r}(t-\Delta t) &= \bar{r}(t)- \bar{v}(t)\Delta t +\frac{1}{2}\bar{a}(t)\Delta t^2 - \frac{1}{3!}\bar{a}'(t)\Delta t^3 + \mathcal{O}(\Delta t^4) \\
\end{aligned}
$$

And in the second equation we consider $t' = t - \Delta t$, in order to obtain:

$$
\begin{aligned}
\bar{r}(t+\Delta t) &= \bar{r}(t)+ \bar{v}(t)\Delta t +\frac{1}{2}\bar{a}(t)\Delta t^2+ \frac{1}{3!}\bar{a}'(t)\Delta t^3 + \mathcal{O}(\Delta t^4) \\
\bar{r}(t') &= \bar{r}(t'+\Delta t)- \bar{v}(t'+\Delta t)\Delta t +\frac{1}{2}\bar{a}(t'+\Delta t)\Delta t^2 - \frac{1}{3!}\bar{a}'(t'+\Delta t)\Delta t^3 + \mathcal{O}(\Delta t^4) \\
\end{aligned}
$$

....

To connect with the Trotter expansion
