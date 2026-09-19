The ansatz is the following: we begin by defining the action of the creation operator on an (anti)simmetrized ket.
Then we will consider its extension on the Fock space by let it become an endomorphism on this latter space.
Finally we will show that the annihilation operator action can be deduced by simply stating that is the adjoint of the creation operator.

For a single-particle orbital $|\alpha\rangle$, the creation operator is defined for a (anti)symmetrized state:

$$\hat a_\alpha^\dagger \ket{\alpha_1, \dots, \alpha_N}_{\text{A/S}} = \ket{\alpha,\alpha_1, \dots, \alpha_N}_{\text{A/S}}$$

For a normalized bosonic state:

$$\hat a_\alpha^\dagger \ket{\alpha_1, \dots, \alpha_N}^{\text{norm}}_{\text{S}} = \sqrt{n_\alpha +1} \ket{\alpha,\alpha_1, \dots, \alpha_N}^{\text{norm}}_{\text{S}}$$

For fermions the result is zero if $\alpha$ is occupied; otherwise the prefactor is one when $\alpha$ is prepended to the orbital list. Reordering that list into a fixed occupation-basis order contributes the permutation sign.

Is clear that the creation operator maps the $N$-particle (anti)symmetric sector to the $(N+1)$-(anti)symmetric particle sector:

$$  
\hat a_\alpha^\dagger: B_{N}\longrightarrow B_{N+1},  
\qquad  
\hat a_\alpha^\dagger: F_{N}\longrightarrow F_{N+1}.  
$$

To regard it as an operator on one space, define the bosonic and fermionic Fock spaces

$$  
\mathcal F_B=B_0\oplus B_1\oplus\cdots  
=\bigoplus_{N=0}^{\infty}B_N,  
$$

$$  
\mathcal F_F=F_0\oplus F_1\oplus\cdots  
=\bigoplus_{N=0}^{\infty}F_N.  
$$

Thus $\hat a_\alpha^\dagger$ acts within the full Fock space, while raising particle number by one. Its action on the vacuum fixes the one-particle convention:

$$  
\hat a_\alpha^\dagger|0\rangle=|\alpha\rangle.  
$$
