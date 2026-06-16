In general find the inverse of a matrix via the definition is computationally infeasible, as it contains the evaluation of the determinant, which is exponential in the size algorithmically.
One then uses a strategy based on solving [[Linear systems]].
Consider the identity:

$$ OO^{-1} = \mathbb{1} $$

Where $O$ is a generic $\mathbb{C^{N,N}}$ matrix. Then one can write:

$$ O
\begin{pmatrix}
\vdots && &&\vdots \\
\bar{x}_1 && \cdots && \bar{x}_N \\
\vdots && &&\vdots \\
\end{pmatrix}= 
\begin{pmatrix}
\vdots && &&\vdots \\
\bar{y}_1 && \cdots && \bar{y}_N \\
\vdots && &&\vdots \\
\end{pmatrix}
$$

In this way we can see the inverse problem as equivalent to solve the $N$ linear systems:

$$ O \bar{x}_i = \bar{y}_i \qquad i = 1, \dots, N $$

