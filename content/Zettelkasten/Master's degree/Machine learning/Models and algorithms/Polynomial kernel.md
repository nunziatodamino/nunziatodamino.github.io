>[!info] **Polynomial kernel**
>
>$$ K(\bar{x}, \bar{x}') = (1+ \braket{\bar{x}, \bar{x}'})^N $$
### Derivation

Consider the homogeneous coordinates : $\bar{\eta} = (1, x_1, \dots, x_d)$ so that $\eta_0 = 1$.
Then we can rewrite:

$$ (1+ \braket{\bar{x}, \bar{x}'})^N = (\braket{\bar{\eta},\bar{\eta}'})^N = \left(\sum_{i=0}^d \eta_i \eta_i'\right)^N $$

Consider now:

$$\left(\sum_{i=0}^d \eta_i \eta_i'\right)^N = \prod_{k = 1}^N \sum_{i=0}^d \eta_i \eta_i' =\prod_{k = 1}^N(1 +\eta_1\eta_1'+\dots +\eta_d\eta_d') $$

This product of polynomials can be rewritten as a sum over all possible index:

$$ \prod_{k = 1}^N(1 +\eta_1\eta_1'+\dots +\eta_d\eta_d') = \sum_{j \in J} \prod_{i=1}^N \eta_{j_i}\eta'_{j_i} = \sum_{j \in J} \prod_{i=1}^N \eta_{j_i} \prod_{i=1}^N \eta'_{j_i} $$


where $J = I \times \dots \times I$ (N-cartesian product) and $I = \{0,1,\dots,d\}$.
Finally, by defining the embedding as $\psi_j(\bar{x}) = \prod_{i=1}^N \bar{\eta}(\bar{x})_{j_i}$, we obtain in the end:

$$ (1+ \braket{\bar{x}, \bar{x}'})^N = \braket{\psi(\bar{x}), \psi(\bar{x}')}$$

That concludes the proof.
