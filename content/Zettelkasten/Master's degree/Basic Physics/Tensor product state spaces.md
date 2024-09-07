In order to describe problems with more than one degree of freedom is necessary to introduce the concept of tensor product of state spaces.
## $N=2$ particles system

Suppose to have a ket $\ket{\phi} \in V_1$ describing the state of a particle and another ket $\ket{\psi} \in V_2$ of another particle.
Suppose I want to describe together the 2 particles, i.e. I want to consider the system composed of the 2 particles together. What is the general ket describing the state of the system and to which space it belongs ?

In this case, one defines :

$$ V = V_1 \otimes V_2 $$

As the tensor product of the spaces and states that the ket describing the system is:

$$ \ket{\phi}_1 \otimes \ket{\psi}_2  \in V$$

We state now some properties for the tensor product between kets:

- Commutativity : $\ket{\phi}_1 \otimes \ket{\psi}_2=\ket{\phi}_2 \otimes \ket{\psi}_1$
- Bi-linearity: $(\alpha\ket{\phi_1}_1+\beta\ket{\phi_2}_1) \otimes (\gamma\ket{\psi_1}_2+\delta\ket{\psi_2}_2) = \dots$

### Basis in tensor product spaces

If we have $V = V_1 \otimes V_2$ is possible to build a basis by the the basis of $V_1$ and $V_2$.

Consider to have $\{\ket{u_i}\}$ basis in $V_1$ of dimension $N_1$ and $\{\ket{v_j}\}$ basis in $V_2$ of dimension $N_2$.
Then we can build a basis of $V$ of dimension $N_1N_2$, by considering:

$$\{\ket{u_i}_1 \otimes \ket{v_j}_2 \} \subset V$$

Specifically is interesting to show the decomposition of $\ket{\phi}_1 \otimes \ket{\psi}_2$:

$$\ket{\phi}_1 \otimes \ket{\psi}_2 =\sum_i\alpha_i\ket{u_i}_1 \otimes \sum_j\beta_j\ket{v_j}_2= \sum_i\sum_j \alpha_i\beta_j \ket{u_i}_1 \otimes \ket{v_j}_2 \equiv \sum_i\sum_j c_{ij} \ket{u_i}_1 \otimes \ket{v_j}_2 $$

Note that this decomposition is always possible.
Very peculiar is instead the converse question.
### Entangled states

Consider a generic $\ket{\chi} \in V$. Then is surely possible to write the decomposition_

$$\ket{\chi} = \sum_i\sum_j c_{ij} \ket{u_i}_1 \otimes \ket{v_j}_2 $$

Is now possible to find 2 states $\ket{\phi}_1= \sum_i\alpha_i\ket{u_i}_1 \in V_1$ and $\ket{\psi}_2= \sum_j\beta_j\ket{v_j}_2 \in V_2$ such that $c_{ij}=\alpha_i\beta_j$ ?
**This is not possible in general.
The state for which this further decomposition is not possible are called entangled states.**

### Scalar product and orthonormality of the basis of V

Suppose to have $\ket{\phi}_1 \otimes \ket{\psi}_2 \in V$ and $\ket{\phi'}_1 \otimes \ket{\psi'}_2 \in V$ and suppose we want to define a scalar product in $V$.
Then, by common sense:

$$ (\bra{\phi}_1 \otimes \bra{\psi}_2)(\ket{\phi'}_1 \otimes \ket{\psi'}_2) \equiv \braket{\phi|\phi'}_1\braket{\psi|\psi'}_2 $$

Now we can prove that if the basis $\{\ket{u_i}\}$ basis in $V_1$ and $\{\ket{v_j}\}$ basis in $V_2$ are orthonormal, then the basis $\{\ket{u_i}_1 \otimes \ket{v_j}_2 \}$ in $V$ is also orthonormal:

$$ (\bra{u_l}_1 \otimes \bra{v_k}_2)(\ket{u_i}_1 \otimes \ket{v_j}_2) = \braket{u_l|u_i}_1\braket{v_k|v_j}_2 =\delta_{il}\delta_{jk} $$

### Operators in tensor product spaces

Generally we have the following. If we have an operator $\hat{A}_1$ acting on $V_1$ and an operator $\hat{B}_2$ acting on $V_2$ , then the operator $\hat{A}_1 \otimes \hat{B}_2$ acting on $V$ is defined as:

$$(\hat{A}_1 \otimes \hat{B}_2)(\ket{\phi}_1 \otimes \ket{\psi}_2) = \hat{A_1}\ket{\phi}_1 \otimes \hat{B}_2\ket{\psi}_2$$

In the end we are simply considering the following extensions : $\hat{A}_1 \to \hat{A}_1 \otimes \hat{\mathbb{1}}_2$ and $\hat{B}_2 \to\hat{\mathbb{1}}_1 \otimes \hat{B}_2$, so that is easy to consider the operator application to a generic state:

$$ (\hat{A}_1 \otimes \hat{B}_2)\ket{\chi}= (\hat{A}_1 \otimes \hat{B}_2)\left( \sum_i\sum_j c_{ij} \ket{u_i}_1 \otimes \ket{v_j}_2 \right) = \sum_i\sum_j c_{ij} \hat{A_1}\ket{u_i}_1 \otimes \hat{B}_2\ket{v_j}_2 $$

### The crazy world of notation

After all these shenanigans, one rarely encounters in a textbook this notation, **because is implicit**.

In fact all the following notation are usually equivalent in physics textbooks.
They are listed in increasing order of madness (Supposing to have $\ket{\phi} \in V_1$ and $\ket{\psi}\in V_2$)

$$ \ket{\phi}_1 \otimes \ket{\psi}_2 \iff  \ket{\phi}_1  \ket{\psi}_2 \iff \ket{\phi} \ket{\psi} \iff \ket{\phi,\psi}$$

Also, much more dangerous, is the following notation for operators

$$ \hat{A}_1 \otimes \hat{B}_2 \iff \hat{A}_1 \hat{B}_2 \iff \hat{A}\hat{B} \qquad\qquad\qquad \hat{A}_1 \otimes \hat{\mathbb{1}}_2 \iff \hat{A}_1 \iff \hat{A}$$

## $N=2$ identical particles system

The same consideration as before applies, just we have that:

$$ V = V_1 \otimes V_1 $$

In this case, having a ket $\ket{\phi} \in V_1$, to indicate a generic vector in $V$ we use the notation:

$$ \ket{\phi_1}_1 \otimes \ket{\phi_2}_1  \in V$$

Notice that in this case, given the fact that the tensor product is commutative, there is no way to distinguish the 2 particles

## $N$ identical particles system

Just a word on notation. To indicate the tensor product is custom to utilize the following:

$$ V = V_1 \otimes \dots\otimes V_1 = V_1^{\otimes N} $$






Reference:
https://www.youtube.com/watch?v=kz3206S2B6Q&list=PL8W2boV7eVfnJ6X1ifa_JuOZ-Nq1BjaWf&index=3

