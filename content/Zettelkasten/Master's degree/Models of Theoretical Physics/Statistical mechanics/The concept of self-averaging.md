Suppose we want to evaluate the free energy:

$$ F_{J} = -\frac{1}{\beta} \ln Z_J $$

In the context of [[Zettelkasten/Master's degree/Models of Theoretical Physics/Statistical mechanics/The Sherrington-Kirkpatrick (S-K) model]] the partition function depends on quenched random variables, so also the free energy will be a random variable.

So its calculation seems impossible: because we should or fix a particular outcome for the $J_{ij}$ and evaluate a result that is not general, also even if I have all the couplings they must be fixed in some way.

Let's introduce the concept of self-averaging.
Let's extract from the Gaussian distribution 2 possible outcomes, i.e. $J^{(0)}=\{J_{ij}^{(0)}\}_{i<j}$ and $J^{(1)}=\{J_{ij}^{(1)}\}_{i<j}$.
Is clear that:

$$ F_{J^{(0)}} \neq F_{J^{(1)}} $$

==The self-averaging property of the free energy tells us precisely that the difference between these two values is irrelevant in the thermodynamic limit ==, i.e., the standard deviation of $F_{J}$ is negligible with respect to its average value, defined as:

$$ \overline{F_J} = \int_{\mathbb{R}} \prod_{i<j}dJ_{ij}P(J_{ij})F_J  $$

Then if we evaluate the variance associated to the random variable $F_{J}$, one can prove:

$$ \lim_{N\to +\infty}\frac{\sigma_{F_J}}{\overline{F_J}} \sim \frac{1}{\sqrt{N}} \qquad \text{where}\ \sigma_{F_J} = \sqrt{\overline{F^2_J}-(\overline{F_J})^2} $$

So that one can conclude that, up to fluctuations, any choice of the disordered couplings yields the same result.

So in the following we will not be interested in the specific free energy per disordered coupling, but to the average per spin:

$$ \overline{f}_J \equiv \frac{\overline{F_J}}{N} = \frac{1}{N}\int_{\mathbb{R}} \prod_{i<j}dJ_{ij}P(J_{ij})F_J =  -\frac{1}{N\beta}\int_{\mathbb{R}} \prod_{i<j}dJ_{ij}P(J_{ij})\ln Z_J = -\frac{1}{N\beta} \overline{\ln Z_J} $$

If we want to evaluate the expression in the thermodynamic limit:

$$ \overline{f_J} = \lim_{N\to +\infty}
-\frac{1}{N\beta} \overline{\ln Z_J}$$




