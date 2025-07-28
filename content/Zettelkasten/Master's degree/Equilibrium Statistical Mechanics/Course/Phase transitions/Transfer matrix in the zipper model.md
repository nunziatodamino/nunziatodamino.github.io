In this note we evaluate the explicit form for the transfer matrix in the zipper model with the no-bubble constraint $V_0 = +\infty$.

We begin by recalling the definition:

$$\braket{s_i|T|s_{j}} = T_{s_i, s_{j}} \equiv e^{-\beta\varepsilon_0(1-\delta_{s_{j}, 0})} \left[ 1-\delta_{s_{i},0}(1-\delta_{s_{j}, 0}))\right] $$

The basis ket are of the type $\ket{s_i} = \ket{0,0,\dots0,s_i,0 \dots, 0}^t$, i.e. at the i-th place the system is described by $s_i = 1, 2, \dots, G$ i.e. the degeneracy that the zipper can assume.
Now we proceed with the evaluation.

- 1st column $s_j = 0$ : $T_{s_i,0} = 1, \quad \forall s_i$.
- 1st row $s_i = 0$ : $T_{0, s_{j}} = e^{-\beta\varepsilon_0(1-\delta_{s_{j}, 0})}\delta_{s_j,0}$ . So that in this case we obtain if $s_j = 0$ : $T_{00} = 1$, while if $s_j \neq 0$ : $T_{0,s_j} = 0$.
- Inner matrix : $s_i \neq 0, s_j \neq 0$ : $T_{s_i, s_{j}} = e^{-\beta\varepsilon_0} \equiv a$

So we obtain

$$T = 
\begin{pmatrix}
1 & 0 & 0 & \cdots & 0 \\
1 & a & a & \cdots & a \\
1 & a & a & \cdots & a \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
1 & a & a & \cdots & a \\
\end{pmatrix}
=
\begin{pmatrix}
1 & \bar{0}^t_{N-1} \\
\bar{1}_{N-1} & a J_{N-1}
\end{pmatrix}
$$

Where $\mathbf{0} \in \mathbb{R}^{N-1}$ is the zero column vector, $\mathbf{1} \in \mathbb{R}^{N-1}$ is the column of ones and $J_{N-1} \in \mathbb{R}^{(N-1) \times (N-1)}$ is the all-ones matrix.
Having the matrix in this form makes it easy to evaluate the eigenvalues:

$$ \det(T-\lambda\mathbb{1}) = (1-\lambda)\det(aJ_{N-1}-\lambda\mathbb{1}) = 0 $$

We use now the fact that the all-ones matrix has known eigenvalues, specifically $J_n$ has eigenvalues $\lambda_1 = n$ with $m_{\lambda_1} = 1$ and $\lambda_2 = 0$ with $m_{\lambda_2} = n-1$. Moreover, given a matrix $A$ with eigenvalues $\lambda_1, \dots$, the eigenvalues of $kA$ are $k\lambda_1, \dots$
So we obtain easily for the matrix T :

- $\lambda_1 = 1$ with $m_{\lambda_1} = 1$
- $\lambda_2 = (N-1)a$ with $m_{\lambda_3} = 1$
- $\lambda_3 = 0$ with $m_{\lambda_3} = N-2$


**We now set $G \equiv N-1$.**

Is also of interest to find the related eigenvectors. First we observe that :

$$ J_n\ket{n} = n \ket{n} \iff \ket{n} = \bar{1}_n$$

Now we evaluate:

$$ T\ket{x}=\lambda\ket{x} \iff \begin{pmatrix}
1 & \bar{0}^t_{N-1} \\
\bar{1}_{N-1} & a J_{N-1}
\end{pmatrix} \begin{pmatrix}
x \\
\bar{y}
\end{pmatrix} = \begin{pmatrix}
\lambda x \\
\lambda\bar{y}
\end{pmatrix} $$

This is equivalent to the system:

$$ 
\begin{cases}
x = \lambda x \\
\bar{1}_{N-1}x+ a J_{N-1}\bar{y} = \lambda \bar{y}
\end{cases}
$$

- $\lambda_1 = 1$ )
$$ 
\begin{cases}
x =  x \\
\bar{1}_{N-1}x+ a J_{N-1}\bar{y} =  \bar{y}
\end{cases}
$$

Now, with $\bar{y} = \bar{1}_{N-1}$ :
$$ 
\begin{cases}
x =  x \\
\bar{1}_{N-1}x+ a (N-1)\bar{1}_{N-1} =  \bar{1}_{N-1}
\end{cases} \iff x = 1-(N-1)a = 1-Ga
$$

- $\lambda_2 = N-1 = G$ )
$$ 
\begin{cases}
(1-G)x =  0\\
\bar{1}_{N-1}x+ a J_{N-1}\bar{y} =  G\bar{y} 
\end{cases} \iff x = 0
$$

This reduces to :
$$ 
\begin{cases}
x =  0 \\
a J_{N-1}\bar{y} =  G\bar{y}
\end{cases} \iff \bar{y} = a\bar{1}_{N-1}
$$

- $\lambda_3 = 0$ )
$$ 
\begin{cases}
x =  0\\
\bar{1}_{N-1}x+ a J_{N-1}\bar{y} =  0 
\end{cases} \iff \begin{cases}
x =  0\\
a J_{N-1}\bar{y} =  0 
\end{cases}
$$

This reduces to :

$$ 
J_{N-1}\bar{y} =  0 
$$

So $\bar{y}$ is the eigenvector associated to $\lambda = 0$ eigenvalue of the $J_{N-1}$ matrix.
This can be any vector in the space orthogonal to $\bar{1}_{N-1}$.
A choice can be $\bar{y} = (1,-1,0,\dots, 0)^t$

In the end we have:

$$ 
\ket{\lambda_1} = \begin{pmatrix}
1-Ga \\
\bar{1}_{N-1} \\
\end{pmatrix} \qquad 
\ket{\lambda_2} = \begin{pmatrix}
0 \\
a\bar{1}_{N-1} \\
\end{pmatrix} \qquad
\ket{\lambda_3} = \begin{pmatrix}
0 \\
1 \\
-1 \\
0 \\
\vdots \\
0
\end{pmatrix} \qquad
$$


