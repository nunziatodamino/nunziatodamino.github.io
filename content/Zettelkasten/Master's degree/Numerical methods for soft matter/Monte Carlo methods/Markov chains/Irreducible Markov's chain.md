>[!info] **Irreducible Markov's chain**
>We call a Markov's chain irreducible if all states pair $(i,j)\in S$ are [[Zettelkasten/Master's degree/Numerical methods for soft matter/Monte Carlo methods/Markov chains/Communicating states|Communicating states]]

>[!info] **Irreducible recurrent Markov's chain**
>We call a Markov's chain irreducible recurrent if it's irreducible and all the states are [[Zettelkasten/Master's degree/Numerical methods for soft matter/Monte Carlo methods/Markov chains/Recurrent and transient states|recurrent states]]

### Theorems on irreducible Markov's chains 

We will call from now on a Markov's chain defined over a finite $S$ a **finite Markov's chain**.

>[!warning] Theorem on finite irreducible Markov's chains
> All finite irreducible Markov's chains are recurrent irreducible.

This imply that if our space $S$ is finite and the relative Markov's chain irreducible, then we don't need any distinction for recurrent or transient states, they will be automatically recurrent.

>[!warning] Sufficient condition for irreducibility for finite Markov's chains 
> A Markov's chain is irreducible if there exists a permutation matrix Q such that:
> $$ QPQ^t = \begin{Vmatrix} A_1 & B \\ 0 & A_1 \end{Vmatrix}$$

This can be useful if one can find easily a permutation, or if the matrix $P$ is already given in this block form, because in that case the permutation is simply $Q=\mathbb{1}$

>[!warning] Simple lemma on finite irreducible Markov's chain
 >If a finite Markov's chain has $P_{ij}>0, \forall i,j$ then is irreducible.

>[!warning] Necessary and sufficient condition on irreducibility for finite Markov's chains
>A finite Markov's chain is irreducible if and only if its graph is a simple connected graph

https://math.stackexchange.com/questions/2653936/showing-the-transition-matrix-is-irreducible

 



