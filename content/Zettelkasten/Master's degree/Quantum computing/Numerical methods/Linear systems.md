Consider the following general problem: we have:

$$ A \bar{x} = \bar{y} $$

Where $A = \braket{r|A|x}$ or a general matrix of the type $A \in \mathbb{C}^{N,N}$

### Gaussian elimination

We transform the system in to the equivalent one:

$$ U \bar{x} = \bar{y}'  \qquad 
U = \begin{Vmatrix} 
u_{11} & \dots &&&& u_{1N} \\
0 & u_{22}& \dots &&& u_{2N} \\
\vdots & 0 & u_{33}  &&& u_{3N} \\
\vdots & \dots &&&& \vdots \\
0 & \dots &&&0& u_{NN} \\
\end{Vmatrix}$$

The reduction is done using the classic Gaussian elimination algorithm.
Once we obtain the reduction, the solution follows easily. 
Consider a generic row. then:

$$ \sum_{i=1}^N u_{ik}x_i =  \sum_{i=k}^N u_{ik}x_i = u_{kk}x_k +\sum_{i=k+1}^N u_{ik}x_i = y_{k} \iff x_k = \frac{1}{u_{kk}}\left(y_k - \sum_{i=k+1}^N u_{ik}x_i \right) $$

Of course we are left with the problem of finding this reduction.
We now estimate the algorithmic complexity of this reduction.
We have to reduce the element to 0 under the main diagonal in form of a triangle. We can count $N(N-1)/2$ elements.
For each element we have to perform a row wise reduction (say for element $u_{21}$ we perform $R_2 \to R_2 - \frac{u_{21}}{u_{11}}R_1$), so for each element we have to consider $\mathcal{O}(N)$ operations.
In total, for the Gaussian elimination. we have $\mathcal{O}(N^3)$ operations, while for the back-substitution we have $\mathcal{O}(N^2)$ (operations of the matrix-vector product).

### LU decomposition

One can prove that the following decomposition can be achieved:

$$ \hat{O}=\hat{L}\,\hat{U}
\qquad\text{such that}\qquad
\hat{L} =
\begin{pmatrix}
1        & 0        & \cdots & 0            & 0 \\
f_{2,1}  & 1        & \cdots & 0            & 0 \\
f_{3,1}  & f_{3,2}  & \ddots & \vdots       & \vdots \\
\vdots   & \vdots   & \ddots & 1            & 0 \\
f_{N,1}  & f_{N,2}  & \cdots & f_{N,N-1}    & 1
\end{pmatrix} , \
\hat{U} =
\begin{pmatrix}
U_{11} & U_{12} & U_{13} & \cdots & U_{1N} \\
0      & U_{22} & U_{23} & \cdots & U_{2N} \\
0      & 0      & U_{33} & \cdots & U_{3N} \\
\vdots & \vdots & \ddots & \ddots & \vdots \\
0      & 0      & 0      & \cdots & U_{NN}
\end{pmatrix}
 $$

The matrix $U$ is the one obtained with the Gaussian reduction, while the $L$ one contain the coefficients to be used in the row to achieve the reduction (e.g. say for eliminate element $u_{21}$ we perform $R_2 \to R_2 - f_{21}R_1$) 
This reduction cost algorithmically $\mathcal{O}(N^3)$ (we are performing a Gaussian elimination, just additionally storing the row reduction coefficients), while to solve the system, say we start from $\hat{O}\ket{x}=\ket{y}$ we have to solve the system:

$$ 
\begin{cases}
\hat{L}\ket{z}=\ket{y} \\
\hat{U}\ket{x}=\ket{z}
\end{cases}
$$

Both operation are of the order $\mathcal{O}(N^2)$, so the same order in total.
This seems a complication respect the simple Gaussian reduction, as they have the same complexity, (one can complain about double storage, but one can be smart and save them in one matrix as typically done in BLAS or LAPACK), but we will see that the reduction helps as an initial step in many algorithms.

