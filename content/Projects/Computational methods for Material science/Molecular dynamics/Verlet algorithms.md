### Verlet Algorithm

We expand the position using a Taylor series stopping at the second order.
Using the forward-Euler and the backward-Euler expansion together

$$
\begin{aligned}
\bar{r}_i(t+\delta t) &= \bar{r}_i(t)+ \bar{v}_i(t)\delta t +\frac{1}{2}\bar{a}_i(t)\delta t^2+ \frac{1}{3!}\bar{a}'_i(t)\delta t^3 + \mathcal{O}(\delta t^4) \\
\bar{r}_i(t-\delta t) &= \bar{r}_i(t)- \bar{v}_i(t)\delta t +\frac{1}{2}\bar{a}_i(t)\delta t^2 - \frac{1}{3!}\bar{a}'_i(t)\delta t^3 + \mathcal{O}(\delta t^4) \\
\end{aligned}
$$

Adding these 2 together we obtain:

$$\bar{r}_i(t+\delta t) = 2\bar{r}_i(t)- \bar{r}_i(t-\delta t) +\bar{a}_i(t)\delta t^2 + \mathcal{O}(\delta t^4)$$

Also subtracting the second from the first:

$$ \bar{v}_i(t)= \frac{1}{2 \delta t}\left[ \bar{r}_i(t+\delta t)-\bar{r}_i(t-\delta t) \right]+\mathcal{O}(\delta t^2) $$

