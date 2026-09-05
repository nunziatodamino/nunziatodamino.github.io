### The decomposition statement and properties

Consider a generic matrix $M \in \mathbb{C}^{d_A \times d_B}$.
The following decomposition is always possible:

$$ M = L\Lambda R^\dagger $$

We define some properties of these matrices.
First let's consider the dimension of these matrices:
- $L$ has dimension $(d_A, \alpha = \min(d_A,d_B))$ and is a left orthogonal matrix, namely $L^\dagger L = \mathbb{1}$.
	- In the special case in which $\alpha =d_A$, $L$ is unitary (so is also valid $L L^\dagger = \mathbb{1}$)
- $\Lambda$ has dimension $(\alpha = \min(d_A,d_B), \alpha = \min(d_A,d_B))$ and is a diagonal matrix. The element in the diagonal are ordered $s_1 \geq s_2 \geq \dots s_\alpha$. In general we can decompose the matrix such that only the first $r \leq \alpha$ elements of the diagonal are non-zero. We define $r$ as the matrix rank (also called Schmidt rank).
- $R$ has dimension $(\alpha = \min(d_A,d_B), d_B)$ and is a right orthogonal matrix, namely $R^\dagger R = \mathbb{1}$.
	- In the special case in which $\alpha =d_B$, $R$ is unitary (so is also valid $R^\dagger R = \mathbb{1}$)

We observe that we can write the decomposition in term of the matrix elements:

$$ M_{ij} = \sum_{\alpha =1}^{\min(d_A,d_B)} L_{i\alpha}\Lambda_{\alpha\alpha}(R_{\alpha j})^\dagger = \sum_{\alpha =1}^{\min(d_A,d_B)} L_{i\alpha}\Lambda_{\alpha\alpha}R^*_{j\alpha} \equiv \sum_{\alpha =1}^{\min(d_A,d_B)} L_{i\alpha}\lambda_{\alpha}R^*_{j\alpha} $$

The last implication is what is usually found in Quantum information textbooks and papers.

This image is a visual representation on how the dimensions are chosen:

![[The singular value decomposition (SVD).png]]

### Connection with the eigenvalue decomposition

Consider now a special class of square matrix of order $n$ that has $n$ linearly independent eigenvectors (say an Hermitian matrix in finite dimensions to fix the ideas)
Then other than the SVD, we can decompose the matrix as:

$$M = UDU^{-1}$$

Where $D$ is the diagonal matrix containing the eigenvalues and $U$ is the matrix build with eigenvectors as columns.
Then if we build $MM^\dagger$ and $M^\dagger M$ by using the SVD decomposition:

$$
\begin{cases}
MM^\dagger =L\Lambda R^\dagger(L\Lambda R^\dagger)^\dagger = L\Lambda R^\dagger R \Lambda L^\dagger =  L \Lambda^2 L^\dagger \\
M^\dagger M =  R \Lambda^2 R^\dagger
\end{cases}
$$

And, given that $L$ and $R$ are unitary in the case of square matrix, the this conclude that for the matrix $MM^\dagger$ and $M^\dagger M$ have found eigenvalue decomposition both with $D = \Lambda^2$ .

