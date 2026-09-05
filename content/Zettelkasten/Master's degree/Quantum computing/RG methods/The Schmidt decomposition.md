Consider a bipartite system, so given $\mathscr{H} = \mathscr{H}_A \otimes \mathscr{H}_B$, let $\ket{\alpha}_A$ and $\ket{\alpha}_B$ with $\alpha = 1, \dots, r$ be 2 basis respectively for the system A and B.
Now consider a pure state $\ket{\psi} \in \mathscr{H}$. We call Schmidt decomposition:

$$ \ket{\psi} = \sum_{\alpha = 1}^r \lambda_\alpha \ket{\alpha}_A\ket{\alpha}_B $$

We now show that this decomposition always exists, and how is possible to build it.
##### Construction of the Schmidt decomposition from a generic pure state decomposition
Consider $d_A = dim(\mathscr{H}_A)$ and $d_B = dim(\mathscr{H}_B)$ and consider 2 basis for the subsystems A and B, say $\ket{i}_A$ with $i = 1, \dots, d_A$ and $\ket{j}_B$ with $j = 1, \dots, d_B$. A generic pure state in $\mathscr{H}$ can be written as:

$$ \ket{\psi} = \sum_{i=1}^{d_A}\sum_{j=1}^{d_B} \psi_{ij} \ket{i}_A \otimes \ket{j}_B$$

Now we observe that $\psi_{ij} \in \mathbb{C}^{d_A \times d_B}$, so we can perform a [[The singular value decomposition (SVD)|SVD]]:

$$ \ket{\psi} = \sum_{i=1}^{d_A}\sum_{j=1}^{d_B}  \sum_{\alpha =1}^{\min(d_A,d_B)} L_{i\alpha}\lambda_{\alpha}R^*_{j\alpha} \ket{i}_A \otimes \ket{j}_B $$

Now we rearrange using the properties of the tensor product:

$$ \ket{\psi} =  \sum_{\alpha =1}^{\min(d_A,d_B)}\lambda_{\alpha}\sum_{i=1}^{d_A}  L_{i\alpha} \ket{i}_A \otimes \sum_{j=1}^{d_B}R^*_{j\alpha}\ket{j}_B \equiv \sum_{\alpha = 1}^{\min(d_A,d_B)} \lambda_\alpha \ket{\alpha}_A\ket{\alpha}_B  $$




