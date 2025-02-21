The idea is the same as [[Projects/Numerical methods for soft matter/Molecular dynamics/Correction for the potential energy due to simple truncation|Correction for the potential energy due to simple truncation]].
We have
$$ u_i(r) = \frac{1}{2} \int_0^{+\infty} dr\ 4\pi r^2\rho(r)u(r) $$

Then we use the definition of the truncated and shifted potential: $u^{tr-sh}(r) = u(r)-u(r_c)$, so that:

$$ u_i(r) = \frac{1}{2} \int_0^{+\infty} dr\ 4\pi r^2\rho(r)[u^{tr-sh}(r)+u(r_c)] $$

We split in this way:

$$ u_i(r) = \frac{1}{2} \int_0^{+\infty} dr\ 4\pi r^2\rho(r)u^{tr-sh}(r) + \frac{1}{2} \int_0^{+\infty} dr\ 4\pi r^2\rho(r)u(r_c) $$

Now we split the first:

$$\int_0^{+\infty} dr\ 4\pi r^2\rho(r)u^{tr-sh}(r) = \int_0^{r_c} dr\ 4\pi r^2\rho(r)u^{tr-sh}(r) +\int_{r_c}^{+\infty} dr\ 4\pi r^2\rho(r)[u(r)-u(r_c)]  $$

Putting all together we obtain

$$ u_i(r) = \frac{1}{2} \left[\int_0^{r_c} dr\ 4\pi r^2\rho(r)u^{tr-sh}(r) +\int_{r_c}^{+\infty} dr\ 4\pi r^2\rho(r)u(r) +\int_0^{r_c} dr\ 4\pi r^2\rho(r)u(r_c)\right] $$

So that in the end one has:

$$ U_{tot} = \sum_{i,j | i<j}u^{tr-sh}(r_{ij}) + \frac{N\rho}{2} \int_{r_{cut}}^{+\infty} dr\ 4\pi r^2u(r) + \frac{u(r_c)}{2} \int_0^{r_c} dr\ 4\pi r^2\rho(r)$$
