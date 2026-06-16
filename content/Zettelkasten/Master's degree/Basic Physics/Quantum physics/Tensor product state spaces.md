In order to describe problems with more than one degree of freedom is necessary to introduce the concept of tensor product of state spaces.
## $N=2$ particles system

Suppose to have a ket $\ket{\phi} \in V_1$ describing the state of a particle and another ket $\ket{\psi} \in V_2$ of another particle.
Suppose I want to describe together the 2 particles, i.e. I want to consider the system composed of the 2 particles together. What is the general ket describing the state of the system and to which space it belongs ?

In this case, one defines :

$$ V = V_1 \otimes V_2 $$

As the tensor product of the spaces and then every ket in $V$ can be written as :

$$ \ket{\Psi} = \sum_{ij} c_{ij}\ \ket{u_i}_1 \otimes \ket{v_j}_2  $$

Where $\{\ket{u_i}\}$ is a basis of the space $V_1$ and $\{\ket{v_j}\}$ is a basis of the space $V_2$
Note that **no hypothesis on whether the particles are identical is made yet**.

The note that follows explains what this tensor product operation means and how is defined formally.

### Tensor product properties

We state now some properties for the tensor product. Using the notation $\ket{\psi}_1 \in V_1$ and $\ket{\psi}_2 \in V_2$ to specify whether the ket is defined in space 1 or 2, we have the following properties: 

- Tensor product is commutative : $$\ket{\phi}_1 \otimes \ket{\psi}_2=\ket{\phi}_2 \otimes \ket{\psi}_1$$
- Tensor product is bilinear:  $$
\begin{aligned}
(\alpha\ket{\phi_1}_1+\beta\ket{\phi_2}_1) \otimes \ket{\psi_1}  &= \alpha \ket{\phi_1}_1 \otimes \ket{\psi_1} + \beta\ket{\phi_2}_1 \otimes \ket{\psi_1} \\
\ket{\phi_1}_1 \otimes (\gamma\ket{\psi_1}_2+\delta\ket{\psi_2}_2) &= \gamma \ket{\phi_1}_1 \otimes \ket{\psi_1}_2 + \delta \ket{\phi_1}_1 \otimes \ket{\psi_2}_2
\end{aligned}$$
### Basis in tensor product spaces

If we have $V = V_1 \otimes V_2$ is possible to build a basis for it uging the basis of $V_1$ and $V_2$.

Consider to have $\{\ket{u_i}\}$ basis in $V_1$ of dimension $N_1$ and $\{\ket{v_j}\}$ basis in $V_2$ of dimension $N_2$.
Then we can build a basis of $V$ of dimension $N_1N_2$, by considering:

$$\{\ket{u_i}_1 \otimes \ket{v_j}_2 \} \subset V$$

Specifically is interesting to show the decomposition of $\ket{\phi}_1 \otimes \ket{\psi}_2$:

$$\ket{\phi}_1 \otimes \ket{\psi}_2 =\sum_i\alpha_i\ket{u_i}_1 \otimes \sum_j\beta_j\ket{v_j}_2= \sum_i\sum_j \alpha_i\beta_j \ket{u_i}_1 \otimes \ket{v_j}_2 \equiv \sum_i\sum_j c_{ij} \ket{u_i}_1 \otimes \ket{v_j}_2 $$

Note that this decomposition is always possible, as one simple chooses $c_{ij} = \alpha_i\beta_j$ .
Very peculiar is instead the converse question, i.e. given a general ket in $V$ is possible to find a decomposition in states from $V_1$ and $V_2$ ? 
#### Entangled states

Consider a generic $\ket{\chi} \in V$. Then is surely possible to write the decomposition_

$$\ket{\chi} = \sum_i\sum_j c_{ij} \ket{u_i}_1 \otimes \ket{v_j}_2 $$

Is now possible to find 2 states $\ket{\phi}_1= \sum_i\alpha_i\ket{u_i}_1 \in V_1$ and $\ket{\psi}_2= \sum_j\beta_j\ket{v_j}_2 \in V_2$ such that $c_{ij}=\alpha_i\beta_j$ ?
**This is not possible in general.
The state for which this further decomposition is not possible are called entangled states.**
The paramount example one usually give is in the 2 qubit state space, the Bell states are all entangled. 

### Scalar product and orthonormality of the basis of V

Suppose we want to define a scalar product in $V$.
Then, by common sense (and definition):

$$ (\bra{\phi}_1 \otimes \bra{\psi}_2)(\ket{\phi'}_1 \otimes \ket{\psi'}_2) \equiv \braket{\phi|\phi'}_1\braket{\psi|\psi'}_2 $$

Now we can prove that if the basis $\{\ket{u_i}\}$ basis in $V_1$ and $\{\ket{v_j}\}$ basis in $V_2$ are orthonormal, then the basis $\{\ket{u_i}_1 \otimes \ket{v_j}_2 \}$ in $V$ is also orthonormal:

$$ (\bra{u_l}_1 \otimes \bra{v_k}_2)(\ket{u_i}_1 \otimes \ket{v_j}_2) = \braket{u_l|u_i}_1\braket{v_k|v_j}_2 =\delta_{il}\delta_{jk} $$

### Operators in tensor product spaces

Generally we have the following. If we have an operator $\hat{A}_1$ acting on $V_1$ and an operator $\hat{B}_2$ acting on $V_2$ , then the operator $\hat{A}_1 \otimes \hat{B}_2$ acting on $V$ is defined as:

$$(\hat{A}_1 \otimes \hat{B}_2)(\ket{\phi}_1 \otimes \ket{\psi}_2) \equiv \hat{A_1}\ket{\phi}_1 \otimes \hat{B}_2\ket{\psi}_2$$

In the end we are simply considering the following extensions : $\hat{A}_1 \to \hat{A}_1 \otimes \hat{\mathbb{1}}_2$ and $\hat{B}_2 \to\hat{\mathbb{1}}_1 \otimes \hat{B}_2$, so that is easy to consider the operator application to a generic state:

$$ (\hat{A}_1 \otimes \hat{B}_2)\ket{\chi}= (\hat{A}_1 \otimes \hat{B}_2)\left( \sum_i\sum_j c_{ij} \ket{u_i}_1 \otimes \ket{v_j}_2 \right) = \sum_i\sum_j c_{ij} \hat{A_1}\ket{u_i}_1 \otimes \hat{B}_2\ket{v_j}_2 $$

### The crazy world of notation

After all these shenanigans, one rarely encounters in a textbook this notation, **because is implicit**.

In fact all the following notation are usually equivalent in physics textbooks.
They are listed in increasing order of madness (Supposing to have $\ket{\phi} \in V_1$ and $\ket{\psi}\in V_2$)

$$ \ket{\phi}_1 \otimes \ket{\psi}_2 \iff  \ket{\phi}_1  \ket{\psi}_2 \iff \ket{\phi} \ket{\psi} \iff \ket{\phi,\psi}$$

Also, much more dangerous, is the following notation for operators

$$ \hat{A}_1 \otimes \hat{B}_2 \iff \hat{A}_1 \hat{B}_2 \iff \hat{A}\hat{B} \qquad\qquad\qquad \hat{A}_1 \otimes \hat{\mathbb{1}}_2 \iff \hat{A}_1 \iff \hat{A}$$

Reference:
https://www.youtube.com/watch?v=kz3206S2B6Q&list=PL8W2boV7eVfnJ6X1ifa_JuOZ-Nq1BjaWf&index=3

