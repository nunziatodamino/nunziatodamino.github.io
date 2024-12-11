The Hopfield model is an [[Zettelkasten/Master's degree/Models of Theoretical Physics/Statistical mechanics/The ''Ising model'' framework|Ising-like model]] used for describing neural networks.

Suppose we consider a neural network in which each neuron can be either excited $(S_i=+1)$ or at rest $(S_i=-1)$.
A neuron will be activated only if the incoming electrical signal to the neuron overcomes a threshold. 
When this threshold is overcome, the neuron becomes excited, if not the neuron is at rest. 

Suppose we want to describe how many signals arrives at a neuron in site $i$.
This description can be made by the local field term

$$ h_i=\sum_{j=1}^N J_{ij}(S_j+1)$$

Where $N$ are the $i$-site first-neighbors. Notice that this term is well defined, because if a neighboring neuron is inactive there is no contribution in the $i$-site.
The $J_{ij}$ can be either:

$$ J_{ij} = \begin{cases} +1 \qquad \text{Excitatory synapse} \\
-1 \qquad \text{Inhibitory synapse} \\
\end{cases} $$

Notice that if the $S_j$ follows a stochastic update rule, then also the local field $h_i$ will follow its own stochastic update rule.

Suppose now that the signal threshold for a site is fixed at $\vartheta_i^*$ , then is clear that for a site $i$ the dynamical rule will be:

$$ S_{i}(t_{n+1}) = \text{signum}(h_i(t_n)-\vartheta_i^*) \qquad \text{where}\ h_i(t_n)=\sum_{j=1}^N J_{ij}(S_j(t_n)+1) $$

Meaning that if at timestep $t_n$ the value $h_i(t_n) > \vartheta_i^*$ the neuron is activated at time $t_{n+1}$, i.e. $S_{i}(t_{n+1})=1$.
Conversely, if at timestep $t_n$ the value $h_i(t_n) < \vartheta_i^*$ the neuron is at rest at time $t_{n+1}$, i.e. $S_{i}(t_{n+1})=-1$.

For simplification one can define the threshold as:

$$ \vartheta_i^* = \sum_{j=1}^N J_{ij}$$

So that we can write in the end:

$$ \begin{aligned} S_{i}(t_{n+1}) & = \text{signum}(h_i(t_n)-\vartheta_i^*) = \text{signum} \left(\sum_{j=1}^N J_{ij}(S_j(t_n)+1)-\sum_{j=1}^N J_{ij}\right) =\\ & = \text{signum} \left(\sum_{j=1}^N J_{ij}S_j(t_n)\right) \end{aligned} $$
