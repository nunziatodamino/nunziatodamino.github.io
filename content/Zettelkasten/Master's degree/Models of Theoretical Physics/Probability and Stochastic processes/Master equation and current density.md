Suppose to consider the [[Zettelkasten/Master's degree/Models of Theoretical Physics/Probability and Stochastic processes/Master equation]]:

$$ \partial_t \mathbb{P}(m,t) =  \sum_{m' \in E} \left[\mathcal{T}_t(m|m')\mathbb{P}(m',t)- \mathcal{T}_t(m'|m)\mathbb{P}(m,t)\right] $$

And to call:

$$ J_{m'\to m} \equiv\mathcal{T}_t(m|m')\mathbb{P}(m',t)- \mathcal{T}_t(m'|m)\mathbb{P}(m,t) $$

Then we can rewrite the master equation as:

$$ \partial_t \mathbb{P}(m,t) =  \sum_{m' \in E} J_{m'\to m} = - \sum_{m' \in E} J_{m\to m'} $$

Where we used the trivial, but extremely important:

$$J_{m'\to m} = - J_{m\to m'}$$

We now compare directly this equation with the continuity equation:

$$ \partial_t \rho_n(\bar{r},t)= -\bar{\nabla}\cdot \bar{j}(\bar{r}, t) $$

We see that the 2 equations are structurally the same, and we can interpret $J_{m'\to m}$ as a probability current for the particles going from state $m'$ to state $m$.
