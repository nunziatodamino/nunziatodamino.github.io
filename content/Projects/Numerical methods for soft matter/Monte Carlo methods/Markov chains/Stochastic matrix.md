>[!note] **Definition - Stochastic matrix**
>Let $\{\xi_1, \xi_2, \dots, \}$ a [[Zettelkasten/Master's degree/Models of Theoretical Physics/Probability and Stochastic processes/Markov process|Markov process]] and $S = \{ s_1, s_2 , \dots\}$ the state space, either finite or countable.
One can associate to the pair $\{ \xi_t , t\geq 1\}$ the matrix:
>$$ P(t) = 
\begin{Vmatrix}
p_{11}(t) & p_{12}(t) & \dots& \\
p_{21}(t) & p_{22}(t) & \dots \\
\vdots
\end{Vmatrix} $$
Where $p_{ij}(t)$ is the transition probability from state $i$ to state $j$ at timestep $t$, defined as:
$$ p_{ij}(t) = \mathbb{P}(\xi_{t+1}=s_j|\xi_t= s_i) \equiv \mathbb{P}(\xi_{t+1}=j|\xi_t= i) $$

A note on notation.
One can, instead of labeling using a timestep $t$, just label with $n$ and use a notation of the type $P_n$.

Some properties of the stochastic matrix:
If we consider a row, we are summing over all the possible states at a specific timestep. So the probability must sum up to 1:

$$ \sum_jP_{ij}(t)=1\qquad \forall i, \ \forall t$$

Moreover each entry, given that is a probability, is positive and less equal than one:

$$ 0\leq P_{ij}(t) \leq 1\qquad \forall i,j,\ \forall t $$


Using the stochastic matrix we can give an easy definition of [[Projects/Numerical methods for soft matter/Monte Carlo methods/Markov chains/Homogeneous Markov process]].