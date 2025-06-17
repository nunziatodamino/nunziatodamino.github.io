In general we saw that is not always possible to solve exactly models, especially as the dimension increases.
So we have to employ some type of approximation.

**One of the most successful is the mean field approximation: the core idea is that we neglect the correlation between fluctuations of the order parameter**

So, if $S$ is the system's order parameter, in a mean field approximation :

$$ (S_i-\braket{S_i})(S_j-\braket{S_j}) \simeq 0 \qquad \forall i,j $$

Or mathematically equivalently but  better :

$$ \text{Cov}(S_i,S_j) = \braket{(S_i-\braket{S_i})(S_j-\braket{S_j})} \simeq 0 \qquad \forall i,j $$

I.e. fluctuations at site $i$ does not influence fluctuations at site $j$ (i.e. are not correlated)
### Flaws and limitations

First we will establish a criterion for which the mean field approach is a good approximation: the so called [[Projects/Equilibrium Statistical Mechanics/Mean field approach/Ginzburg criterion|Ginzburg criterion]].

Moreover, because the mean field approach neglects fluctuations by design, we can expect some problems in the neighborhood of the critical temperature, where it's prediction will not be precise.
This happens because near $T_c$ the correlation length diverges, as:

$$ \xi \sim |T-T_c|^{-\nu} $$

So we are trying to describe a system that is extremely correlated with the approximation that is not correlated at all, i.e. a stupid idea.
This become worse as the dimension decrease, so we will also establish a [[Projects/Equilibrium Statistical Mechanics/Mean field approach/Critical dimension via the Ginzburg criterion|critical dimension]] that satisfies the [[Projects/Equilibrium Statistical Mechanics/Mean field approach/Ginzburg criterion|Ginzburg criterion]] under which the application of the mean field approach is a bad approximation. 

**Note that the assumption underlying MFT — that fluctuations are uncorrelated — implies that the connected correlation function $G_c(i,j)=0, \forall i\neq j$, by construction. This is an artifact of the approximation, not a physical prediction.**
One can also solve this problem by avoiding to evaluate the correlation function via definition but restating it via non-zero quantities. This leads to the linear response theory and the so called [[Projects/Equilibrium Statistical Mechanics/Mean field approach/Fluctuation-dissipation theorem|Fluctuation-dissipation theorem]].

