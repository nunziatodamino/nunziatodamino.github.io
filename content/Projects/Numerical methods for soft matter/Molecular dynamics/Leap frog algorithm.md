The idea is to define half-timestep updates

$$ \bar{v}\left(t - \frac{\Delta t}{2}\right) \equiv \frac{\bar{r}(t) - \bar{r}(t - \Delta t)}{\Delta t} \qquad \bar{v}\left(t + \frac{\Delta t}{2}\right) \equiv \frac{\bar{r}(t+\Delta t) - \bar{r}(t )}{\Delta t} $$

Then from the forward half-timestep:

$$ \bar{r}(t+\Delta t) = \bar{r}(t) + \bar{v}\left(t + \frac{\Delta t}{2}\right)\Delta t $$

The velocity can be obtain by following the same procedure in the [[Projects/Numerical methods for soft matter/Molecular dynamics/Verlet algorithms|Verlet algorithm]] and recasting the position update:

$$
\begin{aligned}
\bar{r}(t+\Delta t) &= 2\bar{r}(t)- \bar{r}(t-\Delta t) +\bar{a}(t)\Delta t^2 + \mathcal{O}(\Delta t^4) \\
\bar{r}(t+\Delta t) - \bar{r}(t) &= \bar{r}(t)- \bar{r}(t-\Delta t) +\bar{a}(t)\Delta t^2 + \mathcal{O}(\Delta t^4) \\
\bar{v}\left(t + \frac{\Delta t}{2}\right)\Delta t &= \bar{v}\left(t - \frac{\Delta t}{2}\right)\Delta t +\bar{a}(t)\Delta t^2 + \mathcal{O}(\Delta t^4) \\
\bar{v}\left(t + \frac{\Delta t}{2}\right) &= \bar{v}\left(t - \frac{\Delta t}{2}\right) +\bar{a}(t)\Delta t + \mathcal{O}(\Delta t^3) \\
\end{aligned}
$$

