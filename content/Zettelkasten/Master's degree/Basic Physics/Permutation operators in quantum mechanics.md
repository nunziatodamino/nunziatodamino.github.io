https://www.youtube.com/watch?v=mgqxywZMTjs&list=PL8W2boV7eVfnJ6X1ifa_JuOZ-Nq1BjaWf&index=4

By definition a permutation is a rearrangement of an ordered set of elements.
#### Different ways to look at a permutation 

![[Immagini/Permutation.png|500]]
## $N=3$ identical particles

Consider the space $V = V_1 \otimes V_1 \otimes V_1$, with basis $\{\ket{u_i}_1\ket{u_j}_2\ket{u_k}_3\}$ (see [[Zettelkasten/Master's degree/Basic Physics/Tensor product state spaces|notation]] if there are doubts on the meaning ).
We define permutation operator $\hat{P}_{mnp}$:

$$ \hat{P}_{mnp}\ket{u_i}_1\ket{u_j}_2\ket{u_k}_3 = \ket{u_i}_m\ket{u_j}_n\ket{u_k}_p $$

Where $mnp$ have to be chosen between $1,2,3$ with no repetition.
Considering this there are $n=3!=6$ total permutations.
Notice also that $\hat{P}_{123}=\hat{\mathbb{1}}_1\otimes\hat{\mathbb{1}}_1\otimes\hat{\mathbb{1}}_1 =\hat{\mathbb{1}}_V$.
From these permutation we are interested more closely to **transpositions, i.e. permutations that changes 2 elements and leave the rest invariant**.
For $N=3$ we have that $\hat{P}_{132}$, $\hat{P}_{213}$ and $\hat{P}_{321}$ are transposition.

Is possible to prove that transpositions:
- Are hermitian : $\hat{P}_{mnp}^{\dagger}=\hat{P}_{mnp}$ 
- Are involutory : $\hat{P}_{mnp} = \hat{P}_{mnp}^{-1}$
- Are unitary : $\hat{P}_{mnp}^2 = \hat{\mathbb{1}}$

Moreover another important result is that **is possible to write any permutation as a product of transpositions** where the parity is fixed, given by the parity of the permutation.


