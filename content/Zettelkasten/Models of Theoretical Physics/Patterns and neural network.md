The main purpose of a neural network is to store information. 

We can define information, in the context of the [[Hopfield model]] as a particular configuration of the neural network, that can be also called pattern, that when is reached doesn't change, i.e. it represent a stable point for the activation dynamics. 

Suppose that in a neural network of N neuron up to $P$ patterns can be achieved, or memorized.
Then by indexing the pattern with the letter $\mu$, one can write each pattern as the vector:

$$ \bar{\xi}^{\mu}= (\xi_1^\mu,\xi_2^\mu,\dots,\xi_N^\mu) \qquad \xi_i^{\mu}= \pm 1 $$

If we now define the synaptic efficiency $J_{ij}$ as:

$$ J_{ij}(t_n) = \begin{cases} 0 \qquad \text{if}\ i =j\qquad(\text{Hebb's rule}) \\ \frac{1}{N} \sum_{\mu=1}^{P} \xi_i^{\mu}(t_n)\xi_j^{\mu}(t_n) \qquad \text{if}\ i \neq j\qquad(\text{Memory})
\end{cases} $$

We can show that this definition is equivalent to have memory in the system, i.e. the patterns exists.
Let's recall the generic activation dynamics rule:

$$ S_{i}(t_{n+1}) = \text{signum} \left(\sum_{j=1}^N J_{ij}S_j(t_n)\right)$$

If we want to investigate if our configuration is a pattern, then one has to evaluate:

$$ \xi^{\mu}_{i}(t_{n+1}) = \text{signum} \left(\sum_{j=1}^N J_{ij}\xi^{\mu}_j(t_n)\right)$$

I.e. think that one starts in the pattern, and if we find that $\xi^{\mu}_{i}(t_{n+1})=\xi^{\mu}_{i}(t_{n}), \ \forall i, \forall \mu$ we are in business.
By making the calculations one finds:

$$ \begin{aligned} \xi^{\mu}_{i}(t_{n+1}) & = \text{signum} \left(\sum_{j=1}^N J_{ij}\xi^{\mu}_j(t_n)\right) = \text{signum} \left(\frac{1}{N}\sum_{j=1}^N \sum_{\nu=1}^{P} \xi_i^{\nu}(t_n)\xi_j^{\nu}(t_n)\xi^{\mu}_j(t_n)\right) =\\ &= \text{signum}\left(\frac{1}{N} \sum_{\nu=1}^{P} \xi_i^{\nu}(t_n)\sum_{j=1}^N\xi_j^{\nu}(t_n)\xi^{\mu}_j(t_n)\right) =\text{signum}\left(\sum_{\nu=1}^{P} \xi_i^{\nu}(t_n)\delta_{\nu\mu}\right) = \\ & = \text{signum}\left(\xi_i^{\nu}(t_n)\right)=\xi_i^{\nu}(t_n) \qquad\forall i,\forall\mu  \end{aligned}    $$

Which shows what we want.
Note that  we used implicitly the following orthogonality relation:

$$\frac{1}{N}\sum_{j=1}^N\xi_j^{\nu}(t_n)\xi^{\mu}_j(t_n)=\delta_{\mu \nu}$$

>[!info] **proof**

